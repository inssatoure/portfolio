import { SceneName } from './SceneController';

export interface SanityColor {
  hex: string;
  rgb: { r: number; g: number; b: number; a: number };
  hsl: { h: number; s: number; l: number; a: number };
  hsv: { h: number; s: number; v: number; a: number };
  alpha: number;
}

export interface Project {
  _type: 'project';
  title: string;
  shortTitle?: string;
  slug: { current: string };
  subTitle?: string;
  client?: string;
  designers?: Array<{ _type: string; name?: string; url?: string }>;
  links?: Array<{ _type: string; text?: string; url?: string }>;
  projectUrl?: string;
  githubUrl?: string;
  mainImage?: { asset: { url: string } };
  body?: any[];
  color1?: SanityColor;
  tags?: string[];
  order?: number;
}

export type SiteData = {
  startingScene: SceneName;
  projects: Project[] | null;
};

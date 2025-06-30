import { SceneName } from './SceneController';

export interface Project {
  _type: 'project';
  title: string;
  slug: { current: string };
  projectUrl: string;
  githubUrl: string;
  mainImage: { asset: { url: string } };
  body: any[];
  color1: string;
  tags: string[];
  order: number;
}

export type SiteData = {
  startingScene: SceneName;
  projects: Project[] | null;
};

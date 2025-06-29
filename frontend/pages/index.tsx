import type { InferGetStaticPropsType, NextPage } from 'next';
import { safeSanityClient } from '../src/sanity/sanityClient';
import { SceneName } from '../src/SceneController';

export async function getStaticProps() {
  const projects = await safeSanityClient.fetch('*[_type == "project"]');
  const scene:SceneName = 'intro';
  return {
    props: {
      projects,
      scene,
    },
  };
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

const ScenePage: NextPage<Props> = () => null;

export default ScenePage;

// import fetch from 'node-fetch';
import createClient from '@sanity/client';

const clientConfig = {
  projectId: process.env.SANITY_PROJECT_ID ?? '',
  dataset: process.env.SANITY_DATASET ?? '',
  previewMode: false,
  useCdn: false,
  apiVersion: '2022-07-31',
};

const authorizedClientConfig = {
  ...clientConfig,
  token: process.env.SANITY_TOKEN ?? '',
};

export const authorizedSanityClient = createClient(authorizedClientConfig);
export const safeSanityClient = createClient(clientConfig);



// console.log('SANITY_PROJECT_ID:', process.env.SANITY_PROJECT_ID);

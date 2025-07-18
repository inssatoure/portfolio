import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { DefaultSeo } from 'next-seo';
// import { useEventListener } from 'usehooks-ts';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { CustomCursor } from '../src/CustomCursor';
import { ThreePage } from '../src/ThreePage';
import { SiteData } from '../src/SiteData';
import { MobileVhAsCssVar } from '../src/MobileVhAsCssVar';
import { useConsoleLogDevSignature } from '../src/useConsoleLogDevSignature';
import { PlayAllVideosOnClickInLowPowerMode } from '../src/usePlayAllVideosOnClickInLowPowerMode';

function MyApp({ Component, pageProps }: AppProps) {
  const siteData:SiteData = {
    startingScene: pageProps.scene ?? 'error',
    projects: pageProps.projects ?? null,
  };

  useConsoleLogDevSignature();

  // useEventListener('focusin', (e) => {
  //   console.log('focused on', e.target);
  // });

  const title = 'Issa, Développeur Web Créatif';
const description = 'Portfolio de développeur web créatif';
const url = 'https://issatoure.com';

  return (
    <>
      <DefaultSeo
        title={title}
        description={description}
        canonical="https://bryantcodes.art"
        openGraph={{
          url,
          title,
          description,
          type: 'website',
          images: [
            {
              url: 'https://issatoure.com/images/social.png',
          width: 1200,
          height: 630,
          alt: 'Portfolio de Issa - Développeur Web Créatif',
          type: 'image/png',
            },
          ],
          site_name: 'issatoure.com',
        }}
        twitter={{
          handle: '@issatoure',
          cardType: 'summary_large_image',
        }}
      />
      <GoogleAnalytics trackPageViews />
      <MobileVhAsCssVar />
      <ThreePage
        siteData={siteData}
      />
      <Component {...pageProps} />
      <CustomCursor />
      <PlayAllVideosOnClickInLowPowerMode />
    </>
  );
}

export default MyApp;

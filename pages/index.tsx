import React from 'react'
import LandingPage from 'components/LandingPage'
import { getTextData } from 'lib/Utils';
//mport LayoutApp from 'components/Layout/LayoutApp';

export async function getStaticProps() {
  const markdownContent = await getTextData("landingText.md");
  return {
    props: markdownContent,
  };
}

export default function Home(markdownContent): JSX.Element {
  //console.log(markdownContent)
  return (
      <LandingPage {...markdownContent} />
  )
}

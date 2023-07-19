import React from "react";
import "styles/index.css";
import "styles/background.css";
import "styles/globalStyle.css";
import Seo from "components/Seo";
import type { AppProps } from "next/app";
import LayoutApp from "components/Layout/LayoutApp";
import LayoutInbody from "components/Layout/LayoutInbody";
import LayoutTextEditor from "components/Layout/LayoutTextEditor";
import LayoutQuillEditor from "components/Layout/LayoutQuillEditor";
import { useRouter } from "next/router";
import Script from "next/script";
import {
  applyPolyfills,
  defineCustomElements,
} from "open-heal-components/loader";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "link-button": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  applyPolyfills().then(() => {
    defineCustomElements();
  });

  const router = useRouter();

  //pathname is the current page ex: "/inbodyS10"
  const { pathname } = router;

  const options = {
    "/inbodyS10": LayoutInbody,
    "/": LayoutApp,
    "/editor": LayoutTextEditor,
    "/quill": LayoutQuillEditor,
    formHook: LayoutApp,
  };

  const Layout = options[pathname] || LayoutApp;

  return (
    <>
      <Seo title="OpenHeal" />
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-5125650425120493"
        async
        strategy="afterInteractive"
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5125650425120493"
        crossOrigin="anonymous"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

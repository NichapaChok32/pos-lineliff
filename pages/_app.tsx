import type { AppProps } from "next/app";
import type { liff } from "@line/liff";
import { useState, useEffect } from "react";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

import "../src/styles/globals.css";
import "../src/styles/pos-icon.css";

const liffId = "2000165056-VKqez8AJ";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [liffObject, setLiffObject] = useState<typeof liff | null>(null);
  const [liffError, setLiffError] = useState<string | null>(null);
  useEffect(() => {
    // to avoid `window is not defined` error
    import("@line/liff")
      .then((liff) => liff.default)
      .then((liff) => {
        console.log("LIFF init...");
        liff
          .init({ liffId: liffId! })
          .then(() => {
            console.log("LIFF init succeeded.");
            setLiffObject(liff);
          })
          .catch((error: Error) => {
            console.log("LIFF init failed.");
            setLiffError(error.toString());
          });
      });
  }, []);

  pageProps.liff = liffObject;
  pageProps.liffError = liffError;

  return <Component {...pageProps} />;
}

export default MyApp;

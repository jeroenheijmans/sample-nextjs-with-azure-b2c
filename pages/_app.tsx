import { useEffect } from "react";
import { useRouter } from "next/router";
import { MsalProvider } from "@azure/msal-react";
import { PageHeader } from "../components/PageHeader";
import { PageFooter } from "../components/PageFooter";
import { msalInstance } from "../services/authService";
import { CustomNavigationClient } from "../services/CustomNavigationClient";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const navigationClient = new CustomNavigationClient(router);
  msalInstance.setNavigationClient(navigationClient);

  useEffect(() => {
    const logger = (url) => console.log("⏭ routeChangeStart to", url);
    router.events.on("routeChangeStart", logger);
    return () => {
      router.events.off("routeChangeStart", logger);
    };
  });

  if (router.asPath.startsWith("/openid-redirect")) {
    console.log("📣 Targeting openid-redirect. Giving MsalProvider some time to handle redirect to target page.");
    return (
      <MsalProvider instance={msalInstance}>
        <Component {...pageProps} />
      </MsalProvider>
    );
  }

  console.log("📣 Rendering full application...");

  return (
    <>
      <div className="appContainer">
        <MsalProvider instance={msalInstance}>
          <PageHeader></PageHeader>
          <Component {...pageProps} />
        </MsalProvider>
      </div>
      <PageFooter></PageFooter>
    </>
  );
}

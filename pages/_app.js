import { useRouter } from 'next/router';
import { MsalProvider } from "@azure/msal-react";
import { PageHeader } from "../components/PageHeader";
import { msalInstance } from "../services/authService";
import { CustomNavigationClient } from "../services/CustomNavigationClient";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) { 
  const router = useRouter();
  const navigationClient = new CustomNavigationClient(router);
  msalInstance.setNavigationClient(navigationClient);

  return (
    <MsalProvider instance={msalInstance}>
      <PageHeader></PageHeader>
      <Component {...pageProps} />
    </MsalProvider>
  );
}

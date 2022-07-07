import { MsalProvider } from "@azure/msal-react";
import { PageHeader } from "../components/PageHeader";
import { msalInstance } from "../services/authService";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) { 
  return (
    <MsalProvider instance={msalInstance}>
      <PageHeader></PageHeader>
      <Component {...pageProps} />
    </MsalProvider>
  );
}

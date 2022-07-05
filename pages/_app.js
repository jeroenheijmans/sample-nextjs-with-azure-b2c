import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "../services/authService";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MsalProvider instance={msalInstance}>
      <Component {...pageProps} />
    </MsalProvider>
  );
}

export default MyApp;

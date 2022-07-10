import { useMsal } from "@azure/msal-react";
import { AuthenticationResult, InteractionStatus } from "@azure/msal-browser";
import { useRouter } from "next/router";
import { msalInstance } from "../services/authService";
import { useEffect } from "react";

export default function OpenIdRedirect() {
  const router = useRouter();
  const { inProgress } = useMsal();
  console.log("📣 Rendering openid-redirect page component while MSAL thinks inProgress === ", inProgress);

  useEffect(() => {
    async function handleMsalRedirectNotification() {
      try {
        const value: AuthenticationResult = await msalInstance.handleRedirectPromise();
        if (!value) {
          console.log("📣 Handled falsy result from MSAL redirect notification, assuming we shouldn't be on this page (perhaps user navigated directly to this URL?)");
          router.replace("/home");
        } else {
          console.log("📣 Presuming the library handled redirect correctly, nothing else to do.");
        }
      } catch (reason) {
        console.log("📣 Handled error result from MSAL redirect notification, reason given: ", reason);
        router.replace("/home");
      }
    }
    handleMsalRedirectNotification();
  });

  if (inProgress !== InteractionStatus.None) {
    return null;
  }


  return null;
}

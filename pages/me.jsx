import { InteractionType } from "@azure/msal-browser";
import { AuthenticatedTemplate, MsalAuthenticationTemplate } from "@azure/msal-react";
import { PageHeader } from "../components/PageHeader";
import { msalInstance } from "../services/authService";

export default function Me() {
  const accounts = msalInstance.getAllAccounts();

  return (
    <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
      <div>
        <PageHeader></PageHeader>
        <h1>😃 My details</h1>
        <p>You&apos;re at the protected page.</p>
          <AuthenticatedTemplate>
          <h2>
          Accounts known to MSAL:
        </h2>
            <pre>{ JSON.stringify(accounts, null, 2) }</pre>
            <h2>
          MSAL Instance information:
        </h2>
            <pre>{ JSON.stringify(msalInstance, null, 2) }</pre>
          </AuthenticatedTemplate>
      </div>
    </MsalAuthenticationTemplate>
  );
}

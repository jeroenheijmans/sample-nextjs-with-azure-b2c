import React from "react";
import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { loginRequest } from "../services/authConfig";
import NoSsr from "./NoSsr";
import LoadingOverlay from "./LoadingOverlay";

export function AuthenticationGuard(props) {
  function ErrorComponent() {
    return <p>Something went wrong...</p>;
  }

  return (
    <NoSsr>
      <MsalAuthenticationTemplate
        interactionType={InteractionType.Redirect}
        authenticationRequest={loginRequest}
        errorComponent={ErrorComponent}
        loadingComponent={LoadingOverlay}
      >
        {props.children}
      </MsalAuthenticationTemplate>
    </NoSsr>
  );
}

import React from 'react';
import {MsalAuthenticationTemplate} from '@azure/msal-react';
import {InteractionType} from '@azure/msal-browser';
import {loginRequest} from '../services/authConfig';
import NoSsr from './NoSsr';

export function AuthenticatedComponent(props) {
  function LoadingComponent() {
    return <div className="loading-overlay">Processing...</div>;
  }

  function ErrorComponent() {
    return <p>Something went wrong...</p>;
  }

  return (
    <NoSsr>
      <MsalAuthenticationTemplate
        interactionType={InteractionType.Redirect}
        authenticationRequest={loginRequest}
        errorComponent={ErrorComponent}
        loadingComponent={LoadingComponent}
      >
        {props.children}
      </MsalAuthenticationTemplate>
    </NoSsr>
  );
};

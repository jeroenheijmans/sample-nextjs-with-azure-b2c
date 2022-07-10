import { Configuration } from "@azure/msal-browser";

const clientId = process.env.NEXT_PUBLIC_AZURE_B2C_CLIENT_ID;
const b2cPolicy = process.env.NEXT_PUBLIC_AZURE_B2C_POLICY;
const tenant = process.env.NEXT_PUBLIC_AZURE_B2C_TENANT_NAME;
const hideConsoleLogging = process.env.NEXT_PUBLIC_MSAL_DEBUG_ON_CONSOLE !== "on";

export const msalConfig: Configuration = {
  auth: {
    clientId,
    authority: `https://${tenant}.b2clogin.com/${tenant}.onmicrosoft.com/${b2cPolicy}`,
    knownAuthorities: [`${tenant}.b2clogin.com`],
    redirectUri: "/openid-redirect",
    postLogoutRedirectUri: "/",
  },
  system: {
    loggerOptions: {
      loggerCallback(_level, message, _containsPii) {
        if (!hideConsoleLogging) {
          console.log(message);
        }
      },
    },
  },
};

export const authenticationRequest = {
  scopes: ["openid", "profile", "email"],
};

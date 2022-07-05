const clientId = process.env.NEXT_PUBLIC_AZURE_B2C_CLIENT_ID;
const b2cPolicy = process.env.NEXT_PUBLIC_AZURE_B2C_POLICY;
const tenant = process.env.NEXT_PUBLIC_AZURE_B2C_TENANT_NAME;

export const msalConfig = {
  auth: {
    clientId,
    authority: `https://${tenant}.b2clogin.com/${tenant}.onmicrosoft.com/${b2cPolicy}`,
    knownAuthorities: [`${tenant}.b2clogin.com`],
    redirectUri: "/",
    postLogoutRedirectUri: "/",
  },
};

export const loginRequest = {
  scopes: ["openid", "profile", "email"],
};

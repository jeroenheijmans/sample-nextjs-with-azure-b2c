import { NavigationClient } from "@azure/msal-browser";

// See: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/performance.md#how-to-configure-azuremsal-react-to-use-your-routers-navigate-function-for-client-side-navigation
export class CustomNavigationClient extends NavigationClient {
  constructor(router) {
    super();
    this.router = router;
  }

  async navigateInternal(url, options) {
    const relativePath = url.replace(window.location.origin, "");
    if (options.noHistory) {
      this.router.replace(relativePath);
    } else {
      this.router.push(relativePath);
    }

    return false;
  }
}

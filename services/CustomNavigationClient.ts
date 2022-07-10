import { NavigationClient, NavigationOptions } from "@azure/msal-browser";
import { NextRouter } from "next/router";

// See: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/performance.md#how-to-configure-azuremsal-react-to-use-your-routers-navigate-function-for-client-side-navigation
export class CustomNavigationClient extends NavigationClient {
  constructor(private router: NextRouter) {
    super();
    this.router = router;
  }

  async navigateInternal(url: string, options: NavigationOptions) {
    const relativePath = url.replace(window.location.origin, "");
    if (options.noHistory) {
      this.router.replace(relativePath);
    } else {
      this.router.push(relativePath);
    }

    return false;
  }
}

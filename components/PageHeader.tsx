import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { authenticationRequest } from "../services/authConfig";

export function PageHeader() {
  const { instance } = useMsal();
  const router = useRouter();

  const handleLogin = () => {
    // TODO: Handle promise then/error
    instance.loginRedirect(authenticationRequest);
  };

  const handleLogout = () => {
    // TODO: Handle promise then/error
    instance.logoutRedirect();
  };

  return (
    <>
      <Head>
        <title>Sample app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Link href="/home">
          <a className={router.pathname === "/home" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/me">
          <a className={router.pathname === "/me" ? "active" : ""}>My Details 🔒</a>
        </Link>
        <Link href="/faq">
          <a className={router.pathname === "/faq" ? "active" : ""}>FAQ</a>
        </Link>
        <Link href="/info">
          <a className={router.pathname === "/info" ? "active" : ""}>Info</a>
        </Link>
        <div style={{ float: "right" }}>
          <UnauthenticatedTemplate>
            <a href="#" onClick={() => handleLogin()}>
              👤 Login
            </a>
          </UnauthenticatedTemplate>
          <AuthenticatedTemplate>
            <a href="#" onClick={() => handleLogout()}>
              ❌ Logout
            </a>
          </AuthenticatedTemplate>
        </div>
      </nav>
    </>
  );
}

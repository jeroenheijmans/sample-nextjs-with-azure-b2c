import { useEffect } from "react";
import Router from "next/router";
import LoadingOverlay from "../components/LoadingOverlay";

export default function Index() {
  useEffect(() => {
    // Delay is here for demonstration purposes, plus it ensures users
    // don't get a brief flash of the overlay. Some different styling
    // could solve that more graciously.
    const delay = setTimeout(() => Router.replace("/home", ), 1000);
    return () => clearTimeout(delay);
  });
  return <>
    <LoadingOverlay></LoadingOverlay>
  </>;
}
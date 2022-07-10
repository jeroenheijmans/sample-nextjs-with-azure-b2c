import { useEffect } from "react";
import Router from "next/router";
import LoadingOverlay from "../components/LoadingOverlay";

let x = 1;

export default function Index() {
  useEffect(() => {
    const delay = setTimeout(() => Router.replace("/home", ), 1000);
    return () => clearTimeout(delay);
  });
  return <>
    <LoadingOverlay></LoadingOverlay>
  </>;
}
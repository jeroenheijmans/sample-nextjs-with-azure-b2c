import { useEffect } from "react";
import Router from "next/router";
import { LoadingOverlay } from "../components/LoadingOverlay";

export default function Index() {
  useEffect(() => {
    Router.replace("/home");
  });
  return <LoadingOverlay></LoadingOverlay>;
}

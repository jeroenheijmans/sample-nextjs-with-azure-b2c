import dynamic from "next/dynamic";
import React, { ReactNode } from "react";

const NoSsr = (props: { children: ReactNode }) => <React.Fragment>{props.children}</React.Fragment>;

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});

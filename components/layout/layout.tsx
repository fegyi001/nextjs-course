import { FC, Fragment, ReactNode } from "react";

import MainHeader from "@/components/layout/main-header";

const Layout: FC<{ children: ReactNode }> = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;

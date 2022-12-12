import { FC, ReactNode } from "react";

import Navbar from "../Navbar";
import "./index.scss";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="main-layout">{children}</div>
      </main>
    </>
  );
};

export default Layout;

import Footer from "./Footer";
import Navbar from "./Navbar";
import { FC, ReactElement } from "react";
import styles from "../../styles/Home.module.css";

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

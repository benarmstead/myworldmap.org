import React from "react";
import Footer from "../components/layout/Footer";

const LayoutDefault = ({ children }) => (
  <>
    <main className="site-content">{children}</main>
    {/* <Banner /> */}
    <Footer />
  </>
);

export default LayoutDefault;

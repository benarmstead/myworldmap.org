import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" hideSignin />
    <main className="site-content">{children}</main>
    {/* <Banner /> */}
    <Footer />
  </>
);

export default LayoutDefault;

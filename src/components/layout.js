import PropTypes from "prop-types";
import React, { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalContextProvider";
import isLightMode from "../utils/is-light-mode";
import Banner from "./banner";
import Footer from "./footer";
import GithubCorner from "./github-corner";
import Header from "./header";

if (typeof document !== "undefined") {
  if (isLightMode()) {
    document.documentElement.classList.remove("mode-dark");
  } else {
    document.documentElement.classList.add("mode-dark");
  }
}

const Layout = ({ children }) => {
  const state = useContext(GlobalStateContext);

  return (
    <div>
      <GithubCorner />
      <Header />
      <main>{children}</main>
      {state.bannerVisible && (
        <Banner message={state.bannerMessage} type={state.bannerType} />
      )}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

import React, { useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { connect } from "react-redux";
import { load_user } from "../actions/auth";

const Layout = ({ load_user, children }) => {
  useEffect(() => {
    // checkAuthenticated();
    load_user();
  }, []);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default connect(null, { load_user })(Layout);

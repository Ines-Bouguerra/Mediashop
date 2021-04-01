import React, { useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { connect } from "react-redux";
import { checkAuthenticated, load_user,googleAuthenticate } from "../actions/auth";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Layout = ({ checkAuthenticated, load_user,googleAuthenticate, children }) => {
  let location = useLocation();
  
  useEffect(() => {
    const values = queryString.parse(location.search);
    const state = values.state ? values.state : null;
    const code = values.code ? values.code : null;
    console.log('State: ' + state);
    console.log('Code: ' + code);

    if (state && code) {
        googleAuthenticate(state, code);
    }
    checkAuthenticated();
    load_user();
  }, [checkAuthenticated,load_user,location]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user ,googleAuthenticate})(Layout);

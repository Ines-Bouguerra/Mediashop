

import React, { useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../actions/auth";


const AdminLayout = ({ checkAuthenticated, load_user, children }) => {
  
  useEffect(() => {
   
    checkAuthenticated();
    load_user();
  }, [checkAuthenticated,load_user]);

  return (
    <div>
      {children}
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user})(AdminLayout);

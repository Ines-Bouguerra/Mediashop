import React from "react";
import HomeComponent from "./HomeComponent";
import Navbar from "./Navbar";
import Overlay from "./Overlay";
import PageLoader from "./PageLoader";
import Sidebar from "./Sidebar";
import GoogleFontLoader from "react-google-font-loader";
import "adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css"
import "adminbsb-materialdesign/plugins/node-waves/waves.css"
import "adminbsb-materialdesign/plugins/animate-css/animate.css"
import "adminbsb-materialdesign/plugins/morrisjs/morris.css"
import "adminbsb-materialdesign/css/themes/all-themes.css"
import "adminbsb-materialdesign/css/style.css"
import "adminbsb-materialdesign/plugins/jquery/jquery.min.js"
import "adminbsb-materialdesign/plugins/bootstrap-select/js/bootstrap-select.js"
import "adminbsb-materialdesign/plugins/jquery-slimscroll/jquery.slimscroll.js"
import "adminbsb-materialdesign/plugins/node-waves/waves.js"
import "adminbsb-materialdesign/plugins/jquery-countto/jquery.countTo.js"
import "adminbsb-materialdesign/plugins/raphael/raphael.min.js"
import "adminbsb-materialdesign/plugins/morrisjs/morris.js"
import "adminbsb-materialdesign/plugins/chartjs/Chart.bundle.js"
import "adminbsb-materialdesign/plugins/flot-charts/jquery.flot.js"
import "adminbsb-materialdesign/plugins/flot-charts/jquery.flot.resize.js"
import "adminbsb-materialdesign/plugins/flot-charts/jquery.flot.resize.js"
import "adminbsb-materialdesign/plugins/flot-charts/jquery.flot.pie.js"
import "adminbsb-materialdesign/plugins/flot-charts/jquery.flot.categories.js"
import "adminbsb-materialdesign/plugins/flot-charts/jquery.flot.time.js"
import "adminbsb-materialdesign/plugins/jquery-sparkline/jquery.sparkline.js"
import "adminbsb-materialdesign/js/admin.js"
import "adminbsb-materialdesign/js/pages/index.js"
import "adminbsb-materialdesign/js/demo.js"


class MainComponent extends React.Component {
  state = {
    bodyClass: "theme-red ls-closed",
    displayOverlay: "none",
    width: window.screen.width,
  };
  onBarClick = () => {
    if (this.state.bodyClass === "theme-red ls-closed overlay-open") {
      this.setState({ bodyClass: "theme-red ls-closed" });
      this.setState({ displayOverlay: "none" });
    } else if (this.state.bodyClass === "theme-red ls-closed") {
      this.setState({ bodyClass: "theme-red ls-closed overlay-open" });
      this.setState({ displayOverlay: "block" });
    }
  };

  onscreenresize = () => {
    console.log(window.screen.width);
    this.setState({ width: window.screen.width });
  };

  componentWillMount() {
    window.addEventListener("resize", this.onscreenresize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onscreenresize);
  }

  componentDidMount() {
    var inputall = document.querySelectorAll("input");
    inputall.forEach((input) => {
      input.addEventListener("focus", function () {
        this.parentNode.className = "form-line focused";
      });
    });

    inputall.forEach((input) => {
      input.addEventListener("blur", function () {
        this.parentNode.className = "form-line";
      });
    });
  }
  render() {
    console.log(this.props);
    if (this.state.width > 1150) {
      document.getElementById("root").className = "theme-red";
    } else {
      document.getElementById("root").className = this.state.bodyClass;
    }

    return (
      <>
      <GoogleFontLoader
          fonts={[
            {
              font: "Roboto",
              weights: [400, 700],
            },
          ]}
          subsets={["latin", "cyrillic-ext"]}
        />
        <GoogleFontLoader
          fonts={[
            {
              font: "Material+Icons",
            },
          ]}
        />
        <Overlay display={this.state.displayOverlay}/>
        <PageLoader />
        <Navbar onBarClick={this.onBarClick} />
        <Sidebar />
        <HomeComponent />
      </>
    );
  }
}

export default MainComponent;

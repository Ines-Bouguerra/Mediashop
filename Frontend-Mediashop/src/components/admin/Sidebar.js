import React from "react";
import usericon from "adminbsb-materialdesign/images/user.png";
import Config from '../../utils/Config'

class Sidebar extends React.Component {
  state = {
    defaultClass: "btn-group user-helper-dropdown",
  };
  constructor(props) {
    super(props);
    this.divref = React.createRef();
    // this.divref2 = React.createRef();
  }
  componentWillMount() {
    document.addEventListener("mousedown", this.handleMouseClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleMouseClick, false);
  }
  handleMouseClick = (event) => {
    if (
      event.target === this.divref.current 
    ) {
      console.log("Click Element");
      return;
    } else {
      console.log("Click Outside");
      this.setState({ defaultClass: "btn-group user-helper-dropdown" });
    }
  };

  showLogoutMenu = () => {
    if (this.state.defaultClass === "btn-group user-helper-dropdown") {
      this.setState({ defaultClass: "btn-group user-helper-dropdown open" });
    } else {
      this.setState({ defaultClass: "btn-group user-helper-dropdown" });
    }
  };
  render() {
    return (
      <section>
        <aside id="leftsidebar" className="sidebar">
          <div className="user-info">
            <div className="image">
              <img src={usericon} width={48} height={48} alt="User" />
            </div>
            <div className="info-container">
              <div
                className="name"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                John Doe
              </div>
              <div className="email">john.doe@example.com</div>
              <div className={this.state.defaultClass}>
                <i
                  className="material-icons"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                  onClick={this.showLogoutMenu}
                  ref={this.divref}
                >
                  keyboard_arrow_down
                </i>
                <ul className="dropdown-menu pull-right">
                  <li>
                    <a href={Config.logoutPageUrl}
                      className=" waves-effect waves-block"
                      >
                      <i className="material-icons">input</i>Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="menu">
            <div
              className="slimScrollDiv"
              style={{
                position: "relative",
                overflow: "hidden",
                width: "auto",
                height: 587,
              }}
            >
              <ul
                className="list"
                style={{ overflow: "hidden", width: "auto", height: 587 }}
              >
                <li className="header">MAIN NAVIGATION</li>
                <li className="active">
                  <a
                    href="index.html"
                    className="toggled waves-effect waves-block"
                  >
                    <i className="material-icons">home</i>
                    <span>Home</span>
                  </a>
                </li>
              </ul>
              <div
                className="slimScrollBar"
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  width: 4,
                  position: "absolute",
                  top: 0,
                  opacity: "0.4",
                  display: "none",
                  borderRadius: 0,
                  zIndex: 99,
                  right: 1,
                  height: "370.504px",
                }}
              />
              <div
                className="slimScrollRail"
                style={{
                  width: 4,
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  display: "none",
                  borderRadius: 0,
                  background: "rgb(51, 51, 51)",
                  opacity: "0.2",
                  zIndex: 90,
                  right: 1,
                }}
              />
            </div>
          </div>
          <div className="legal">
            <div className="copyright">
              © 2021 <a href="#x">Mediashop</a>.
            </div>
            <div className="version">
              <b>Version: </b> 1.0.0
            </div>
          </div>
        </aside>
      </section>
    );
  }
}

export default Sidebar;

import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./nav.styles.scss";
import logo from "../../assets/icons8-lightning-bolt-48.png";

const Nav = () => {
  return (
    <Fragment>
      <div className="nav">
        <Link className="logo-container" to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/topplistan">
            Topplistan
          </Link>
          <Link className="nav-link" to="/spartips">
            Spartips
          </Link>
          <Link className="nav-link" to="/logga-in">
            Logga in
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;

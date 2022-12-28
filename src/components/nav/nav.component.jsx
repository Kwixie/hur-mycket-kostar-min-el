import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import "./nav.styles.scss";
import logo from "../../assets/icons8-lightning-bolt-48.png";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Nav = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="nav">
        <Link className="logo-container" to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/sparkalkylatorn">
            Sparkalkylatorn
          </Link>
          <Link className="nav-link" to="/spartips">
            Spartips
          </Link>
          {currentUser ? (
            <Link className="nav-link" onClick={signOutUser}>
              Logga ut
            </Link>
          ) : (
            <Link className="nav-link" to="/logga-in">
              Logga in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;

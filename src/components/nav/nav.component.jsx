import { Fragment, useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import "./nav.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Nav = () => {
  const { currentUser } = useContext(UserContext);
  const [nState, setnState] = useState("top");
  const [lastScrollY, setScrollY] = useState(0);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  const changeNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setnState("down");
    }
    if (window.scrollY < lastScrollY) {
      setnState("up");
    }
    if (window.scrollY === 0) {
      setnState("top");
    }
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeNavbar);
      return () => {
        window.removeEventListener("scroll", changeNavbar);
      };
    }
  });

  return (
    <Fragment>
      <div className={"nav " + nState}>
        <Link className="logo-container" to="/">
          <span className="material-icons">electric_bolt</span>
        </Link>
        <nav className="nav-links-container" ref={navRef}>
          <Link className="nav-link" to="/sparkalkylatorn">
            Sparkalkylatorn
          </Link>
          <Link className="nav-link" to="/spartips">
            Spartips
          </Link>
          <Link className="nav-link" to="/om">
            Om Sidan
          </Link>
          {/*           {currentUser ? (
            <Link className="nav-link" onClick={signOutUser}>
              Logga ut
            </Link>
          ) : (
            <Link className="nav-link" to="/logga-in">
              Logga in
            </Link>
          )} */}
          <button
            className="material-icons nav-btn nav-close-btn"
            onClick={showNavbar}
          >
            close
          </button>
        </nav>
        <button
          className="material-icons nav-btn nav-open-btn"
          onClick={showNavbar}
        >
          menu
        </button>
      </div>
    </Fragment>
  );
};

export default Nav;

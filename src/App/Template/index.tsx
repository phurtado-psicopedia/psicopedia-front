import React, { useContext } from "react";
import { withRouter, __RouterContext } from "react-router";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { userLogout } from "../../Redux/B_actions/user";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import imgPokemonLogo from "../../Assets/Pokemon_logo.svg";
import styles from "./Template.module.scss";

import { HOME_PATH, SIGNUP_PATH, POKEDEX_PATH } from "../../Config/constants/ROUTER_URLs";

const useRouter = () => useContext(__RouterContext);

const Template: React.FC = (props: any) => {
  
  const dispatch = useDispatch();
  const router = useRouter();
  const { match, history } = router;   
  const paths =  match.url;

  const handleLogOut = () => {
    dispatch(userLogout());
    history.push(HOME_PATH);
  }

  return (
    <div style={{ minHeight: "100vh" }}>        
      <nav className={`navbar fixed-top navbar-expand-lg bg-light ${styles.Nav}`}>
        <Link to={paths.includes(POKEDEX_PATH) ? "/pokedex" : "/" } >Pokedex</Link>
        <img src={imgPokemonLogo} alt="Pokemon logo" />

        <button className={`navbar-toggler ${styles.NavButtonToggler}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className={`collapse navbar-collapse ${styles.NavCollapsedMenu}`} id="navbarSupportedContent">                      
          <ul className="navbar-nav mr-auto"></ul>
          { (paths.includes(POKEDEX_PATH)) ? 
              (<button onClick={handleLogOut} className={`btn my-2 my-sm-0 ${styles.NavButton}`} >Log out</button>)
            : 
            ( <>{
                (paths.includes(SIGNUP_PATH)) ? 
                  (<Link to={HOME_PATH} className={`btn my-2 my-sm-0 ${styles.NavButton}`} >Sign in</Link>)
                  :(<Link to={SIGNUP_PATH} className={`btn my-2 my-sm-0 ${styles.NavButton}`} >Sign up</Link>)
              }</>
          )}
        </div>
      </nav>

        
      { /* CONTENT */ }
      <div className={styles.Content}>
        {props.children}

        <div className={styles.Footer}>
          <hr />
          <div className={styles.FooterHeader}>Yuxi Global. Copyright © 2019</div>
          <div className={styles.FooterCaption}>Todos los derechos reservados.</div>
        </div>
      </div>
      { /* FOOTER */ }
      
    </div>
  );
};

export default withRouter(Template);

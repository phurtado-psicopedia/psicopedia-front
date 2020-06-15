import React, { useContext } from "react";
import { withRouter, __RouterContext } from "react-router";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeart } from "@fortawesome/free-solid-svg-icons";

import imgPsicopediaLogo from "../../Assets/Lavender Circles Wedding Logo.png";
import iconFacebook from "../../Assets/social-svg/facebook.svg";
import iconInstagram from "../../Assets/social-svg/instagram.svg";
import iconWhatsapp from "../../Assets/social-svg/whatsapp.svg";
import styles from "./Template.module.scss";

import { 
  HOME_PATH, 
  CONTACT_PATH,
  SERVICES_PATH,
  ABOUT_PATH
} from "../../Config/constants/ROUTER_URLs";

const useRouter = () => useContext(__RouterContext);

const Template: React.FC = (props: any) => {
  
  const router = useRouter();
  const { match } = router;   
  const paths =  match.url;

  return (
    <div className={styles.wrapper} style={{ minHeight: "100vh" }}>        
      <nav className={`navbar fixed-top navbar-expand-lg bg-light ${styles.Nav}`}>
        <img src={imgPsicopediaLogo} alt="logo psicopedia" />
        <Link to={"/"} className={styles.title}>
          <span>Psicopedia </span>
          <i>Equipo de psicólogos</i>
        </Link>        

        <button className={`navbar-toggler ${styles.NavButtonToggler}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className={`collapse navbar-collapse ${styles.NavCollapsedMenu}`} id="navbarSupportedContent">                      
          <ul className="navbar-nav mr-auto">          
            <Link to={HOME_PATH} className={`btn my-2 my-sm-0 ${styles.NavButton} ${paths === HOME_PATH ? styles.activePage: ""}`} >Inicio</Link>
            <Link to={ABOUT_PATH} className={`btn my-2 my-sm-0 ${styles.NavButton} ${paths === ABOUT_PATH ? styles.activePage: ""}`} >¿Quiénes Somos?</Link>
            <Link to={SERVICES_PATH} className={`btn my-2 my-sm-0 ${styles.NavButton} ${paths === SERVICES_PATH ? styles.activePage: ""}`} >Servicios</Link>
            <Link to={CONTACT_PATH} className={`btn my-2 my-sm-0 ${styles.NavButton} ${paths === CONTACT_PATH ? styles.activePage: ""}`} >Contáctanos</Link>
          </ul>
        </div>
      </nav>
        
      { /* CONTENT */ }
      <div className={styles.Content}>
        {props.children}
      </div>
      
      { /* FOOTER */ }
      <div className={styles.Footer}>
        <div className={styles.FooterCompany}>          
          <div className={styles.FooterSocial}>
            <a className={styles.hiddenText} target="_blank" rel="noopener noreferrer" href={"https://www.facebook.com/mipsicopedia-104501857947346/"}><img src={iconFacebook} alt="facebook"/>mipsicopedia</a>
            <a className={styles.hiddenText} target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/mipsicopedia/"}><img src={iconInstagram} alt="instagram"/>@mipsicopedia</a>
            <a className={styles.hiddenText} href={"https://wa.link/k0ya62"}><img src={iconWhatsapp} alt="whatsapp"/>315 281 0049</a>
          </div>
          <div className={styles.FooterHeader}>Psicopedia</div>
        </div>
        <div className={styles.FooterCaption}>
            Todos los derechos reservados. Copyright © 2020.
        </div>
        <div className={styles.FooterCaption2}>
          <p>Made in <span className={styles.Y}>Co</span><span className={styles.B}>lom</span><span className={styles.R}>bia</span> with <FontAwesomeIcon icon={faHeart} /> by <a href={"https://www.linkedin.com/in/javialej/"}>javialej</a></p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Template);

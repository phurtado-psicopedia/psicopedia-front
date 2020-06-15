import React from "react";
import { Link } from "react-router-dom";
import Template from "../../Template";
import { ABOUT_PATH, SERVICES_PATH } from "../../../Config/constants/ROUTER_URLs";
import styles from "./Home.module.scss";

import imgPsicopediaLogo from "../../../Assets/Lavender Circles Wedding Logo.png";
import imgHoja from "../../../Assets/hoja.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = ({ ...props } : any) => {

    return (
        <Template>            
            
            <div className={styles.HomeWelcome}>
                <div className={styles.HomeWelcomeLeft}>
                    <div className={styles.header}>Te acompañamos en tu proceso psicológico</div>
                    <div className={styles.caption}>Tu bienestar en buenas manos</div>
                </div>
                <div className={styles.HomeWelcomeRight}>
                    <img src={imgPsicopediaLogo} alt={"logo"}></img>
                </div>
                
            </div>
            <Link to={ABOUT_PATH} className={`${styles.prompt1} ${styles.p1A}`}>
                <div className={styles.headline}>Conoce más sobre quienes somos, nuestro enfoque y equipo de trabajo</div>
                <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link to={SERVICES_PATH} className={`${styles.prompt1} ${styles.p1B}`}>
                <div className={styles.headline}>Conoce nuestros servicios</div>
                <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <div className={styles.prompt2}>
                ¿Cuando ir al psicologo?
            </div>
            <div className={styles.prompt3}>
                <div className={styles.cell} style={{ backgroundColor: "#1c5b5f", color: "#ffffff"}}> Si sientes que las circunstancias exceden tus recursos personales para afrontarlos.</div>
                <div className={styles.cell} style={{ backgroundColor: "#c7d500", color: "#323232"}}> Si sientes que el malestar emocional afecta tu desenvolvimiento en actividades diarias.</div>
                <div className={styles.cell} style={{ backgroundColor: "#f5f5f5", color: "#323232"}}> Cuando necesites un espacio para ser escuchado y comprendido.</div>
                <div className={styles.cell} style={{ backgroundColor: "#545454", color: "#ffffff"}}> Cuando requieras una orientación o guía ante un evento o situación en particular.</div>
                <div className={styles.cell} style={{ backgroundColor: "#e5f6f7", color: "#323232"}}> Cuando desees mejorar un área específica de tu vida.</div>
                <div className={styles.cell} style={{ backgroundColor: "#f8f9eb", color: "#323232"}}> Recuerda: ¡Todo malestar físico y psicológico ES IMPORTANTE!</div>
            </div>
            <div className={styles.prompt4}>
                <img src={imgHoja} alt={"hoja"}></img>
            </div>
            <div className={styles.prompt5}>
                Siguenos en nuestras redes
            </div>

        </Template>
    );
};

export default Home;
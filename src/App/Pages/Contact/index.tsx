import React from "react";
import Template from "../../Template";
import styles from "./Contact.module.scss";

import iconFacebook from "../../../Assets/social-svg/facebook.svg";
import iconInstagram from "../../../Assets/social-svg/instagram.svg";
import iconWhatsapp from "../../../Assets/social-svg/whatsapp.svg";

const About = ({ ...props } : any) => {

    return (
        <Template>                        
            <div className={styles.canvas}>
                
                <div className={styles.headline}>
                    ¡Gracias por confiar en nosotros!
                </div>
                <div className={styles.captionH}>Horarios de atención</div>
                <div className={styles.captionB}>    
                    Lunes a Viernes: 8:00 am a 5:00 pm
                    <br />
                    Sábados: 9:00 am a 12:00 pm
                </div>
                <div className={styles.form}>
                    
                </div>
                <div className={styles.captionH}>Contactanos también a través de nuestras redes sociales</div>
                <div className={styles.social}>
                    <a target="_blank" rel="noopener noreferrer" href={"https://www.facebook.com/mipsicopedia-104501857947346/"}><img src={iconFacebook} alt="facebook"/>mipsicopedia</a>
                    <a target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/mipsicopedia/"}><img src={iconInstagram} alt="instagram"/>@mipsicopedia</a>
                    <a href={"tel:+573152810049"}><img src={iconWhatsapp} alt="whatsapp"/>+57 315 281 0049</a>
                </div>
                <div className={styles.captionB}>
                    Email: <a href={"mailto:psicopedia@gmail.com"}>psicopedia@gmail.com</a>
                </div>
                <div className={styles.captionB}>Bogotá, Colombia</div>
            </div>
        </Template>
    );
};

export default About;
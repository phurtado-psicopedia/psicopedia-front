import React from "react";
import Template from "../../Template";
import styles from "./About.module.scss";

import peopleZobed from "../../../Assets/people/Zobed.jpg";
import peopleAmiga1 from "../../../Assets/people/amigaA.jpg";
import peopleAmiga2 from "../../../Assets/people/amigaB.jpg";
import peopleAmiga3 from "../../../Assets/people/amigaC.jpg";

const About = ({ ...props } : any) => {

    return (
        <Template>                        
            <div className={styles.prompt1}>
                <div className={styles.headline}>
                    <b>Psicopedia</b> es un equipo de psicólogas egresadas de la Universidad San Buenaventura, Bogotá.
                    
                </div>                
                <div className={styles.caption}>
                    Con énfasis ético e investigativo. Trabajamos desde un enfoque de psicología positiva e inteligencia emocional,  los cuales se basan en el aprovechamiento de habilidades y capacidades de los seres humanos para mejorar su bienestar emocional y calidad de vida.
                    La autonomía y confidencialidad son nuestra máxima prioridad e invertimos el esfuerzo y formación necesaria para el cumplimiento de  nuestra labor. 
                </div>
            </div>

            <div  className={styles.prompt2}>
                <div className={styles.headline}>
                    EQUIPO DE TRABAJO                    
                </div>                
                <div className={styles.people}>
                    <div className={styles.personCard}>
                        <img src={peopleZobed} alt={"person"}/>
                        <div className={styles.name}>
                            Zobed Villalba
                        </div>
                        <div className={styles.description}>
                            Profesional en psicología, con certificaciones en Bioética, Primeros Auxilios Psicológicos, Desarrollo Mental del Niño y el Adolescente y Gestión Humana. Experiencia en atención personalizada en contextos individuales, educativos y entidades del sector público y privado. 
                        </div>
                    </div>
                    <div className={styles.personCard}>
                        <img src={peopleAmiga1} alt={"person"}/>
                        <div className={styles.name}>
                            Karen Macias
                        </div>
                        <div className={styles.description}>
                            Profesional en psicología, con certificaciones en Bioética, Educación Sexual Integral, Desarrollo Mental del Niño y el Adolescente y Gestión del Talento Humano en aproximación a la ética profesional; conocimiento en procesos de paz y posconflicto. Experiencia en atención personalizada en contextos individuales, sociales y educativos, en sectores públicos y privados. 
                        </div>
                    </div>
                    <div className={styles.personCard}>
                        <img src={peopleAmiga2} alt={"person"}/>
                        <div className={styles.name}>
                            Isis Urzola
                        </div>
                        <div className={styles.description}>
                            Profesional en psicología, con certificaciones en Administración de Recursos Humanos, Sistema de Gestión en la Seguridad y Salud en el Trabajo, Gestión Humana; con conocimiento en Bioética. Experiencia en atención personalizada en contextos organizacionales e individuales.
                        </div>
                    </div>
                    <div className={styles.personCard}>
                        <img src={peopleAmiga3} alt={"person"}/>
                        <div className={styles.name}>
                            Piedad Hurtado
                        </div>
                        <div className={styles.description}>
                        Profesional en psicología, con certificaciones en Bioética, Gestión del Talento Humano, Administración de Recursos Humanos. Con experiencia en contextos organizacionales en sectores públicos y privados. 
                        </div>
                    </div>
                </div>
            </div>
        
        </Template>
    );
};

export default About;
import React from "react";
import Template from "../../Template";
import styles from "./Services.module.scss";

const About = ({ ...props } : any) => {

    return (
        <Template>                        
            <div className={styles.prompt1}>
                <div className={styles.headline}>¡Estaremos junto a usted durante todo el proceso!</div>
            </div>
            <div className={styles.prompt2} style={{ backgroundColor: "#f8f9eb"}}>
                <div className={styles.headline}>Acompañamiento Individual</div>                
                <div className={styles.caption}>
                    Áreas de abordaje: orientación vocacional y/o profesional, autoestima y autoconocimiento, hábitos saludables, inteligencia emocional, estrés y ansiedad adaptativa, toma de decisiones, crecimiento y desarrollo personal, rupturas amorosas y duelos afectivos, conflictos de pareja, sexualidad, autoeficacia, optimización del tiempo.
                </div>
            </div>
            <div className={styles.prompt2} style={{ backgroundColor: "#f5f5f5"}}>
                <div className={styles.headline}>Acompañamiento infantil y adolescente</div>                
                <div className={styles.caption}>
                    Áreas de abordaje: hábitos de estudio, optimización del tiempo, atención y concentración, manejo de emociones, relaciones interpersonales, autoestima y autoconocimiento, sexualidad, autoeficacia, motricidad fina y gruesa, autonomía, toma de decisiones.
                </div>
            </div>
            <div className={styles.prompt2} style={{ backgroundColor: "#e5f6f7"}}>
                <div className={styles.headline}>Acompañamiento Organizacional</div>                
                <div className={styles.caption}>
                    <b>Áreas de abordaje:</b> seguridad y salud en el trabajo, clima laboral, planificación del talento humano, selección de personal, vinculación y contratación, evaluación de desempeño, capacitaciones (aprendizaje organizacional, normas ISO.
                </div>
            </div>
        </Template>
    );
};

export default About;
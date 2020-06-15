import React from "react";
import Template from "../../Template";
import styles from "./MyV.module.scss";

const MyV = ({ ...props } : any) => {

    return (
        <Template>                        

            <div  className={styles.container}>
                <div className={styles.prompt2} style={{ backgroundColor: "#f8f9eb"}}>
                    <div className={styles.headline}>MISIÓN</div>                
                    <div className={styles.caption}>
                        Facilitar la adquisición de habilidades y herramientas para la resolución de problemas y toma de decisiones; con el fin de fortalecer capacidades de desarrollo personal y bienestar integral.
                    </div>
                </div> 
                <div className={styles.prompt2} style={{ backgroundColor: "#e5f6f7"}}>
                    <div className={styles.headline}>VISIÓN</div>                
                    <div className={styles.caption}>
                        Para el año 2025 ser un equipo de psicólogos reconocido a nivel nacional por su gestión organizacional y profesional en el acompañamiento y asesoría en adquisición de herramientas para mejorar la calidad de vida y de servicio. Tanto en empresas pequeñas y medianas, como en el desarrollo de niños, jovenes y adolescentes.
                    </div>
                </div>                               
            </div>            
        </Template>
    );
};

export default MyV;
import React from "react";
import Template from "../../Template";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

import styles from "./NotFound.module.scss";

const NotFound = (props: any) => {

    return (
        <Template>
            <div className={styles.Body}>
                <div className={styles.BodyText}>
                    <FontAwesomeIcon icon={faExclamation} className={styles.Icon}  size="10x"/>
                    <p>
                        <b>Pagina no encontrada :( </b> 
                        por favor dirígete al inicio de Psicopedia para mas información.
                    </p>
                </div>
                
            </div>
        </Template>
    );
};

export default withRouter(NotFound);
import React from "react";
import styles from "./Loader.module.scss";

const Loader = ({open} :any) => {

    // const [visible, setVisible] = useState<boolean>(open);
    
    // useEffect(() => { setVisible(open) }, [open])

    return (
        <div className={`${styles.Loader}`}>

        </div>
    )
}

export default Loader;
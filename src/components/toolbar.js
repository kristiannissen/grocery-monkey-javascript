/**
 *
 */
import ReactDOM from 'react-dom';
import {useEffect, useState} from 'react';

import styles from "../styles/toolbar.module.css";

const Toolbar = () => {
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true)
    }, [])

    const content = <div className={styles.container}>
        <div className="flex items-center justify-center">
            <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg">
                <button type="button" className="">Left</button>
                <button type="button" className="">Center</button>
                <button type="button" className="">Right</button>
            </div>
        </div>
    </div>

    if (isBrowser) {
        return ReactDOM.createPortal(
            content,
            document.getElementById("toolbar")
        )
    } else {
        return null;
    }
}

export default Toolbar;

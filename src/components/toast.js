/**
 *
 */
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import styles from "../styles/toast.module.css"

const Toast = ({ show, message, onHide }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
    let timer = setTimeout(() => onHide(), 2000);
    return () => clearTimeout(timer);
  }, [show, onHide]);

  const content = show ? (
    <div className="flex space-x-2 justify-center">
      <span className={styles.message}>{message}</span>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(content, document.getElementById("toast"));
  } else {
    return null;
  }
};

export default Toast;

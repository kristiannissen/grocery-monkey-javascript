/**
 *
 */
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

import styles from "../styles/toolbar.module.css";

const Toolbar = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const content = (
    <div className={styles.container}>
      <div className="flex items-center justify-center">
        <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg">
          <button
            type="button"
            className="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white"
          >
            Left
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white"
          >
            Center
          </button>
          <button
            type="button"
            className="rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white"
          >
            Right
          </button>
        </div>
      </div>
    </div>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(content, document.getElementById("toolbar"));
  } else {
    return null;
  }
};

export default Toolbar;

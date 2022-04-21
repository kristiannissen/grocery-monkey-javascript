/**
 *
 */
import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { useShell } from "./../context/shell";

import "./toast.css";

const Toast = ({ show, message, type, onToggle }) => {
  const shell = useShell();

  useEffect(() => {}, [show]);

  const content = show ? (
    <div className={type ? `alert alert__${type}` : `alert`}>
      <span className="alert__message">{message}</span>
      <span className="alert__btn_close">
        <button onClick={(e) => onToggle()}>Close</button>
      </span>
    </div>
  ) : null;

  return ReactDOM.createPortal(content, document.getElementById(shell.dialog));
};

export default Toast;

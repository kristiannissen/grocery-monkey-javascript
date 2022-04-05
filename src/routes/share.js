/**
 *
 *
 */
import React, { useState, useEffect } from "react";
import Toast from "../components/toast";

const Share = () => {
  const [uuid, setUuid] = useState("");
  const [toast, showToast] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("info")

  useEffect(() => {
    let d = localStorage.getItem("uuid");
    setUuid(d);
  }, []);

  useEffect(() => {
    if (message !== "") showToast(true);
  }, [message]);

  const doShare = () => {
    if ("share" in navigator) {
      try {
        navigator.share({
          title: "Grocery Monkey",
          text: "Join my grocery list",
          url: `${process.env.REACT_APP_DOMAIN}/join/${uuid}`,
        });
      } catch (err) {
        setMessage(err);
      }
    } else {
      // Use clipboard instead
      navigator.permissions.query({ name: "clipboard-write" }).then((res) => {
        if (res.state === "granted" || res.state === "prompt") {
          navigator.clipboard
            .writeText(`${process.env.REACT_APP_DOMAIN}/join/${uuid}`)
            .then(
              () => {
                setMessage("URL copied to your clipboard");
                setMessageType("success")
              },
              () => {
                setMessage("Could not use the clipboard");
                setMessageType("warning")
              }
            );
        }
      });
    }
  };

  return (
    <div>
      Share your groceries
      <div>
        <button className="btn-primary" onClick={(e) => doShare(e)}>
          Share
        </button>
        <Toast show={toast} message={message} type={messageType} />
      </div>
    </div>
  );
};

export default Share;

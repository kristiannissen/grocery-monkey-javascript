/**
 * @file Groceries
 *
 */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Custom components
import Toast from "../components/toast";
import { useAuth } from "../context/auth";
import { helpFetch } from "../helpers/";

const Groceries = () => {
  const [groceries, setGroceries] = useState([]);
  const [grocery, setGrocery] = useState({ name: "", id: "" });
  const [toast, showToast] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const [token, setToken] = useState("");

  // Token
  useEffect(() => {
    // console.log(auth.getToken());
    setToken(auth.getToken());
  }, [auth]);

  useEffect(() => {
    if (message !== "") showToast(true);
  }, [message]);

  useEffect(() => {
    // Initial data
    /* let data = localStorage.getItem("groceries");
    setGroceries(data ? JSON.parse(data) : []); */
    // Check if uuid exists
    let uuid = localStorage.getItem("uuid");
    if (uuid && groceries.length === 0 && token.length > 0) {
      helpFetch("groceries", "GET", { uuid: uuid }, token).then((resp) =>
        setGroceries(resp.groceries)
      );
    }
  }, [groceries, token]);

  useEffect(() => {
    if (loading === true) {
      let body = {
        useruuid: localStorage.getItem("useruuid"),
        groceries: groceries,
        uuid: localStorage.getItem("uuid"),
        subscribers: JSON.parse(localStorage.getItem("subscribers") || "[]"),
      };
      let method = localStorage.getItem("uuid") ? "PUT" : "POST";
      // Make the request
      helpFetch("groceries", method, body, token)
        .then((resp) => {
          setGroceries(resp.groceries);
          localStorage.setItem("uuid", resp.uuid);
        })
        .catch((err) => setMessage(err.message));
      /*
        navigator.serviceWorker.ready.then((reg) => {
            reg.sync.register("run-forest")
        })*/
    }
    return () => setLoading(false);
  }, [groceries, loading, token]);

  const handleClick = () => {
    if (grocery.name === "") {
      setMessage("Input field cannot be empty");
    } else {
      setGroceries([...groceries, grocery]);
      setGrocery({ name: "", id: "" });
      setLoading(true);
    }
  };

  const handleChange = (e) => {
    let entry = { name: e.target.value, id: new Date().getTime().toString() };
    setGrocery({
      ...grocery,
      ...entry,
    });
  };

  const handleDelete = (id) => {
    setGroceries(groceries.filter((g) => id !== g.id));
    setLoading(true);
  };

  return (
    <div className="min-w-full">
      <div className="flex flex-row">
        <div className="basis-3/4">
          <h1>Grocery List</h1>
        </div>
        <div className="basis-1/4 grid justify-items-end">
          <Link to="/mealplan">Meal Plan</Link>
        </div>
      </div>
      <div className="min-w-full">
        {groceries.map((grocery) => (
          <div
            className="flex flex-row h-12"
            key={grocery.id}
            data-key={grocery.id}
          >
            <div className="basis-3/4 px-1.5 py-1.5">{grocery.name}</div>
            <div className="basis-1/4 px-1.5 py-1.5 grid justify-items-end">
              <span
                className="top-0 bottom-0 w-6 h-6"
                onClick={() => handleDelete(grocery.id)}
              >
                <svg
                  className="fill-current text-rose-500 w-6 h-6"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <div className="form_group">
          <label htmlFor="entry" className="field__label">
            Add Grocery
          </label>
          <input
            type="text"
            className="field__text"
            value={grocery.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="flex form_group button-group">
          <button
            className="btn-primary mt-auto"
            onClick={(e) => handleClick(e)}
          >
            Add
          </button>
          {groceries.length > 0 && (
            <Link to="/share" className="btn-primary mt-auto">
              Share
            </Link>
          )}
        </div>
      </div>
      <Toast
        show={toast}
        message={message}
        onToggle={(e) => showToast(false)}
      />
    </div>
  );
};

export default Groceries;

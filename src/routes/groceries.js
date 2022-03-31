/**
 * @file Groceries
 *
 */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Custom components
import Toast from "../components/toast";

const Groceries = () => {
  const [groceries, setGroceries] = useState([]);
  const [grocery, setGrocery] = useState({ name: "", id: "" });
  const [toast, showToast] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Token
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (message !== "") showToast(true);
  }, [message]);

  useEffect(() => {
    // Initial data
    let data = localStorage.getItem("groceries");
    setGroceries(data ? JSON.parse(data) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("groceries", JSON.stringify(groceries));
    // Get the Uuid for the list, it if hasn't been set
    // uuid = null
    let uuid = localStorage.getItem("uuid");
    let useruuid = localStorage.getItem("useruuid");

    if (loading === true) {
      // Request method
      let method = "PUT";
      if (uuid === null) {
        method = "POST";
      }
      // POST|PUT to store data
      fetch(`${process.env.REACT_APP_DOMAIN}/groceries`, {
        method: method,
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          useruuid: useruuid,
          groceries: groceries,
          uuid: uuid
        }),
      })
        .then((response) => response.json())
        .then((data) => localStorage.setItem("uuid", data.uuid))
        .catch((err) => setMessage(err));
    }

    return () => setLoading(false);
  }, [groceries, loading, token]);

  const handleClick = () => {
    if (grocery.name === "") {
        setMessage("Input field cannot be empty")
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
        <div className="flex form_group">
          <button
            className="btn-primary mt-auto"
            onClick={(e) => handleClick(e)}
          >
            Add
          </button>
        </div>
      </div>
      <Toast show={toast} message={message} />
    </div>
  );
};

export default Groceries;

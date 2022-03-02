/**
 * @file Groceries
 *
 */
import React, { useEffect, useState, useCallback } from "react";
// Custom components
import Toast from "../components/toast";

const Groceries = () => {
  const [groceries, setGroceries] = useState([]);
  const [grocery, setGrocery] = useState({ name: "", id: "" });
  const [user, setUser] = useState({});
  const [toast, showToast] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message !== "") showToast(true);
  }, [message]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    setGroceries(JSON.parse(localStorage.getItem("user")).groceries);
  }, []);

  const updateGroceries = useCallback(() => {
    if (groceries.length > 0) {
      let token = localStorage.getItem("token");
      let user = JSON.parse(localStorage.getItem("user"));
      user.groceries = groceries;

      fetch(`${process.env.REACT_APP_DOMAIN}/groceries/${user.id}/update`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => setMessage("Something went wrong!"));
    }
  }, [groceries]);

  useEffect(() => {
    updateGroceries();
  }, [updateGroceries]);

  const handleClick = () => {
    setGroceries([...groceries, grocery]);
    setGrocery({ name: "", id: "" });
  };

  const handleChange = (e) => {
    let entry = { name: e.target.value, id: `${groceries.length + 1}` };
    setGrocery({
      ...grocery,
      ...entry,
    });
  };

  const handleDelete = (id) => {
    setGroceries(groceries.filter((g) => id !== g.id));
  };

  return (
    <div className="min-w-full">
      <h1>Grocery List</h1>
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

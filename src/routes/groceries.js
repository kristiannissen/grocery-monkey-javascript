/**
 * @file Groceries
 *
 */
import React, { useEffect, useState, useRef, useCallback } from "react";
// Custom components
import Toast from "../components/toast";

const Groceries = () => {
  const [groceries, setGroceries] = useState([]);
  const [grocery, setGrocery] = useState({ name: "", id: "" });
  const [user, setUser] = useState({});
  const [toast, showToast] = useState(false);
  const [message, setMessage] = useState("");
  const mountRef = useRef(true);

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

  const handleDelete = (e) => {
    setGroceries(
      groceries.filter((g) => e.target.parentElement.dataset.key !== g.id)
    );
  };

  return (
    <div className="grid justify-items-center">
      <div className="">
        {groceries.map((grocery) => (
          <div className="" key={grocery.id} data-key={grocery.id}>
            {grocery.name} <button onClick={handleDelete}>X</button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2">
        <div className="">
          <label htmlFor="entry" className="field__label">
            Entry
          </label>
          <input
            type="text"
            className="field__text"
            value={grocery.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="flex">
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

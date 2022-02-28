/**
 * @file Groceries
 *
 */
import React, { useEffect, useState, useRef } from "react";

const Groceries = () => {
  const [groceries, setGroceries] = useState([]);
  const [grocery, setGrocery] = useState({ name: "", id: "" });
  const [user, setUser] = useState({});
  const mountRef = useRef(true);

  useEffect(() => {
    let token = localStorage.getItem("_token");
    fetch("http://localhost:3001/groceries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  useEffect(() => {
    let token = localStorage.getItem("_token");
    user.groceries = groceries
    if (groceries.length > 0) {
          fetch(`http://localhost:3001/groceries/${user.id}/update`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((data) => setUser(data));
        }
    return () => mountRef.current;
  }, [groceries]);

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
    </div>
  );
};

export default Groceries;

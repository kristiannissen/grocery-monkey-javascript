import React, { useState, useEffect } from "react";

import { useRandomNumber } from "./../hooks/userandomnumber";

import "./../css/forms.css";
import "./../css/lists.css";
import "./../css/groceries.css";

const Groceries = () => {
  const [grocery, setGrocery] = useState({
    name: "",
    id: 0,
  });
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    console.log("Update groceries: ", groceries);
  }, [groceries]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let entry = {
      [name]: value,
      id: new Date().getTime(),
    };
    setGrocery({ ...grocery, ...entry });
  };

  const handleRemove = (id) => {
    setGroceries(groceries.filter((g) => g.id !== id));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setGroceries([...groceries, grocery]);
    setGrocery({ name: "", id: 0 });
  };

  return (
    <div className="grocery__list_container">
      <div className="list">
        {groceries.map((grocery) => (
          <div key={grocery.id} className="list__item">
            <div className="list__item_title">{grocery.name}</div>
            <div className="list__item_content">
              <button
                className="btn__primary_round"
                onClick={(e) => handleRemove(grocery.id)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="list__form_container">
        <div className="form__container">
          <form>
            <div className="form__group">
              <label htmlFor="name">Add Grocery</label>
              <input
                type="text"
                name="name"
                value={grocery.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form__group">
              <button className="btn__primary" onClick={(e) => handleAdd(e)}>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Groceries;

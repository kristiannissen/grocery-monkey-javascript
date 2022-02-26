/**
 * @file Groceries
 *
 */
import React, { useEffect, useState } from "react";
import { Outlet, Link, useParams } from "react-router-dom";

const Groceries = () => {
  const [groceries, setGroceries] = useState([]);
    const [grocery, setGrocery] = useState({name: ""})
  let params = useParams();

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
      .then((data) => setGroceries(data.groceries));
  }, []);

    const handleClick = () => {
        console.log(grocery)
    }

    const handleChange = (e) => {
        let entry = {name: e.target.value}
        setGrocery({
            ...grocery,
            ...entry
        })
    }

  return (
    <div className="grid justify-items-center">
      <div className="">
        {groceries.map((grocery) => (
          <div className="" key={grocery.id}>
            {grocery.name}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2">
            <div className="">
                <label htmlFor="entry" className="label">Entry</label>
                <input type="text" className="input-field__text" value={grocery.name} name="name" onChange={handleChange}/>
            </div>
            <div className="">
                <button className="btn-primary" onClick={(e) => handleClick(e)}>Add</button>
            </div>
      </div>
    </div>
  );
};

export default Groceries;

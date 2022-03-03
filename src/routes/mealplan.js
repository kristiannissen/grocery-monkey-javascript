/**
 *
 */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MealPlan = () => {
  const randId = (pow) => Math.floor(Math.random() * pow);
  const [mealPlan, setMealPlan] = useState([]);
  const [meal, setMeal] = useState({
    name: "",
    id: randId(new Date().getTime()),
  });

  useEffect(() => {}, [], []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let entry = {
      [name]: value,
      id: randId(new Date().getTime()),
    };
    setMeal({
      ...meal,
      ...entry,
    });
  };

  const handleClick = () => {
    setMealPlan([...mealPlan, meal]);
    setMeal({ name: "", id: "" });
    console.log("here");
  };

  const handleDelete = (id) => setMealPlan(mealPlan.filter((m) => m.id !== id));

  return (
    <div className="min-w-full">
      <div className="flex flex-row">
        <div className="basis-3/4">
          <h1>Meal Plan</h1>
        </div>
        <div className="basis-1/4 grid justify-items-end">
          <Link to="/groceries">Groceries</Link>
        </div>
      </div>
      <div className="min-w-full">
        {mealPlan.map((meal, i) => (
          <div className="flex flex-row px-1.5 py-1.5" key={meal.id}>
            <div className="basis-1/4">Day {i + 1}</div>
            <div className="basis-2/4">{meal.name}</div>
            <div className="basis-1/4 grid justify-items-end">
              <span
                className="rounded-full text-white bg-rose-500 px-2"
                onClick={(e) => handleDelete(meal.id)}
              >
                X
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
            value={meal.name}
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
    </div>
  );
};

export default MealPlan;

/**
 * @file GroceryForm
 *
 */
import React from "react";

const GroceryForm = () => {
  return (
    <div className="flex justify-center">
      <form>
        <div className="">
          <label htmlFor="" className="label">
            Name
          </label>
          <input type="text" className="input-field__text" id="" />
        </div>
        <div className="">
          <label htmlFor="" className="label">
            QTY
          </label>
          <input type="text" className="input-field__text" id="" />
        </div>
        <div className="">
          <label htmlFor="" className="label">
            Units
          </label>
          <select className="select">
            <option>L</option>
            <option>Stk</option>
          </select>
        </div>
        <div className="">
          <label htmlFor="" className="label">
            Store
          </label>
          <input type="text" className="input-field__text" id="" />
        </div>
      </form>
    </div>
  );
};

export default GroceryForm;

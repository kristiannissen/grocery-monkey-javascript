/**
 * List
 */
import React from "react";

const List = ({ arr }) => {
  let items = arr.map((i) => {
    return (
      <li key={i.Key} className="py-2">
        {i.Name} {i.QTY} {i.Unit}{" "}
        <span className="text-xs rounded-sm bg-slate-200 px-1">{i.Store}</span>
      </li>
    );
  });
  return <ul className="px-8">{items}</ul>;
};

export default List;

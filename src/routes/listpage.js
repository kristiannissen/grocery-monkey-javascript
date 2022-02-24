/**
 *
 */
import React from "react";
import { Link } from "react-router-dom";

const ListPage = () => {
  return (
    <div>
      List Page
      <Link to="/">Home</Link>
      <Link to="/grocery/new">Form New</Link>
      <Link to="/grocery/:123/edit">Form Edit</Link>
    </div>
  );
};

export default ListPage;

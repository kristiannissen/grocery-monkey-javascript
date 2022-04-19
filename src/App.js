/**
 *
 */
import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout, Home } from "./routes/";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

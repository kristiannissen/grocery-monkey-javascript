/**
 *
 */
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Layout, Home, NoMatch } from "./routes/";

const Groceries = React.lazy(() => import("./routes/groceries"))
const MealPlan = React.lazy(() => import("./routes/mealplan"))

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="groceries" element={
            <React.Suspense fallback={<>...</>}>
              <Groceries />
            </React.Suspense>
          } />
          <Route path="mealplan" element={
            <React.Suspense fallback={<>...</>}>
              <MealPlan />
            </React.Suspense>
          } />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
  );
};

export default App;

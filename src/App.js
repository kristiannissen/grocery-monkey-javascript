/**
 *
 */
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Layout, Home, NoMatch, Groceries, Signin, Signup } from "./routes/";
import { RequireAuth } from "./context/auth";

const MealPlan = React.lazy(() => import("./routes/mealplan"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RequireAuth element={<Groceries />} />} />
        <Route
          path="mealplan"
          element={
            <React.Suspense fallback={<>...</>}>
              <RequireAuth element={<MealPlan />} />
            </React.Suspense>
          }
        />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;

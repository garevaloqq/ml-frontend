import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import { PageLoader } from "./components";
import routes from "./routes";

function App() {
  return (
    <Routes>
      {routes.map((route, i) => {
        return (
          <Route
            {...route}
            key={i}
            path={route.path}
            element={
              <Suspense fallback={<PageLoader />}>
                <route.element />
              </Suspense>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;

import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Layout, PageLoader } from "./components";
import routes from "./routes";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;

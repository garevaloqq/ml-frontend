import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet, HelmetProvider } from "react-helmet-async";

import App from "./App";
import { Layout } from "./components";
import { MainProvider } from "./contexts";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <MainProvider>
        <Layout>
          <Helmet
            titleTemplate="%s - Mercado libre"
            defaultTitle="Mercado libre"
          >
            <meta
              name="description"
              content="Comprá productos con Envío Gratis en el día en Mercado Libre Uruguay. Encontrá miles de marcas y productos a precios increíbles."
            />

            <meta name="og:title" content="Mercado libre" />
            <meta name="og:description" content="Mercado Libre Uruguay" />

            <meta
              name="og:image"
              content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2"
            />
          </Helmet>
          <App />
        </Layout>
      </MainProvider>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

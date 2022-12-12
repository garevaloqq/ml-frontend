import { Helmet } from "react-helmet-async";
import "./index.scss";

const HomePage = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Inicio mercado libre</title>
        <meta
          name="description"
          content="Comprá productos con Envío Gratis en el día en Mercado Libre Uruguay. Encontrá miles de marcas y productos a precios increíbles."
        />
      </Helmet>
      <div className="content">
        <h1>Bienvenido a Mercado libre</h1>
      </div>
    </div>
  );
};

export default HomePage;

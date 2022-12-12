import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>¡Ups! Parece que te has perdido.</h1>
      <p>Aquí tiene algunos enlaces útiles:</p>
      <Link to="/">Página de inicio</Link>
    </div>
  );
}

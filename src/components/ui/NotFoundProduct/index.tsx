import { Link, useNavigate } from "react-router-dom";

import "./index.scss";

type Props = {
  id: string;
};

export default function NotFoundProduct({ id }: Props) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="content">
        <h1>Producto no encontrado</h1>
        <p>{id}</p>
        <Link
          to={".."}
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          Ir atrás
        </Link>
      </div>
    </div>
  );
}

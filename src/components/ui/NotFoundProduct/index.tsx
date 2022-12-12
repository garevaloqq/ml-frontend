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
        <h1>Product not found</h1>
        <p>{id}</p>
        <Link
          to={".."}
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          Go back
        </Link>
      </div>
    </div>
  );
}

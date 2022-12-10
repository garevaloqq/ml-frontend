import { useNavigate } from "react-router-dom";
import { PriceView } from "src/components";
import { IProduct } from "src/interfaces";
import "./index.scss";

interface Props extends IProduct {}

const CardProduct = ({ id, title, price, picture , city_name }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/items/${id}`)}>
      <div className="card-logo">
        <img width={160} height={160} src={picture} alt={title} />
      </div>
      <div className="card-content">
        <PriceView {...price}/>
        <p>{title}</p>
        <div className="city-mobile">{city_name}</div>
      </div>
      <div className="card-actions">{city_name}</div>
    </div>
  );
};

export default CardProduct;

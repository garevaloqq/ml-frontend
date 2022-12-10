import { FC } from "react";
import { PriceView } from "src/components";
import { IProduct } from "src/interfaces";
import "./index.scss";

interface Props extends IProduct {}

interface ResponsiveProps {
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  sold_quantity: number;
}

const CardActionResponsive: FC<ResponsiveProps> = ({
  sold_quantity,
  title,
  price,
}) => {
  return (
    <div className="card-actions-responsive">
      <span className="sold-quantity">{`Nuevo ${
        sold_quantity === 0
          ? ""
          : sold_quantity === 1
          ? "- 1 vendido"
          : "- " + sold_quantity + " vendidos"
      }`}</span>
      <h1 className="name">{title}</h1>
      <div className="buy-action">
        <div>
          <PriceView {...price} />
        </div>
        <button className="buy-btn">Comprar</button>
      </div>
    </div>
  );
};

const ProductDetails: FC<Props> = ({
  id,
  title,
  picture,
  price,
  description,
  sold_quantity,
}) => {
  return (
    <div className="card">
      <div className="card-content">
        <img src={picture} alt={id} />
        <CardActionResponsive
          price={price}
          sold_quantity={sold_quantity || 0}
          title={title}
        />
        <div className="card-description">
          <h1>Descripción del producto</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className="card-actions">
        <span className="sold-quantity">{`Nuevo ${
          sold_quantity === 0
            ? ""
            : sold_quantity === 1
            ? "- 1 vendido"
            : "- " + sold_quantity + " vendidos"
        }`}</span>
        <h1 className="name">{title}</h1>
        <div className="amount">
          <PriceView {...price} />
        </div>
        <button className="buy-btn">Comprar</button>
      </div>
    </div>
  );
};

export default ProductDetails;

import { FC } from "react";
import { currency as utils } from "src/utils";
import "./index.scss";

type Props = {
  currency: string;
  amount: number;
  decimals: number;
};

//TODO: Que hago con el currency
const PriceView: FC<Props> = ({ amount, decimals }) => {
  const formattedPrice = utils.format(amount);
  const formattedDecimals = `${decimals}0`;

  return (
    <div className="price">
      <span>{formattedPrice}</span>
      <span className="decimal">{formattedDecimals.substring(0, 2)}</span>
    </div>
  );
};

export default PriceView;

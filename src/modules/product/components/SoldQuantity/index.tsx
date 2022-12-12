interface Props {
  sold_quantity: number;
  condition: string;
}

const SoldQuantity = ({ sold_quantity, condition }: Props) => {
  return (
    <span className="sold-quantity">{`${condition} ${
      sold_quantity === 0
        ? ""
        : sold_quantity === 1
        ? "- 1 vendido"
        : "- " + sold_quantity + " vendidos"
    }`}</span>
  );
};

export default SoldQuantity;

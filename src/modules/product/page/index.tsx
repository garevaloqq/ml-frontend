import { FC } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "src/components";
import ProductDetails from "../components/ProductDetails";
import { useGetProducts } from "../hooks/useGetProduct";

const ProductPage: FC = () => {
  const params = useParams<any>();
  const { id } = params as { id: string };
  const { data: product } = useGetProducts(id);

  return (
    <>
      <Breadcrumb />
      <ProductDetails {...product} />
    </>
  );
};

export default ProductPage;

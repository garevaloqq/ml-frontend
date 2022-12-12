import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import { Breadcrumb, NotFoundProduct, PageLoader } from "src/components";
import ProductDetails from "../components/ProductDetails";
import { useGetProducts } from "../hooks/useGetProduct";

const ProductPage: FC = () => {
  const params = useParams<any>();
  const { id } = params as { id: string };
  const { data, isLoading } = useGetProducts(id);

  if (isLoading) {
    return <PageLoader />;
  }

  if (!isLoading && !data.item) {
    return <NotFoundProduct id={id} />;
  }

  return (
    <>
      <Helmet>
        <title>{data.item.title}</title>
        <meta name="description" content={data.item.description} />
      </Helmet>
      <Breadcrumb categories={data.categories} />
      <ProductDetails {...data.item} />
    </>
  );
};

export default ProductPage;

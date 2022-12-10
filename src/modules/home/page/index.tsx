import { FC } from "react";
import { Breadcrumb, ListProduct } from "src/components";
import { useGetProducts } from "../hooks/useHome";

const HomePage: FC = () => {
  const { data, isLoading } = useGetProducts("Xiaomi");
  
  return (
    <>
      <Breadcrumb />
      <ListProduct data={data} isLoading={isLoading} />;
    </>
  );
};

export default HomePage;

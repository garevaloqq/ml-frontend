import { FC, memo } from "react";
import { useSearchParams } from "react-router-dom";
import { Breadcrumb, ListProduct } from "src/components";
import { useGetProducts } from "src/modules/home/hooks/useHome";

const SearchPage: FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search") || "";

  const { data, isLoading } = useGetProducts(query?.toString());  

  return (
    <>
      <Breadcrumb />
      <ListProduct data={data} isLoading={isLoading} />
    </>
  );
};

export default memo(SearchPage);

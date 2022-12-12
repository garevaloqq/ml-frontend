import { FC, memo } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";

import { Breadcrumb, ListProduct, PageLoader } from "src/components";
import { useGetProducts } from "src/modules/search/hooks/useSearch";

const SearchPage: FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search") || "";

  const { data, isLoading } = useGetProducts(query?.toString());

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <Helmet>
        <title>{query}</title>
        <meta name="description" content="Productos en mercado libre" />
      </Helmet>
      <Breadcrumb categories={data.categories} />
      <ListProduct data={data.items} isLoading={isLoading} />
    </>
  );
};

export default memo(SearchPage);

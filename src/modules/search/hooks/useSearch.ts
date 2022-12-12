import { useMemo } from "react";
import { useQuery } from "react-query";

import { CACHE_KEY_LIST_PRODUCT } from "../constants/search";
import SearchApiService from "../services/SearchApiService";

export const useGetProducts = (query: string) => {
  const queryConfig = useMemo(() => {
    return { enabled: !!query && query.trim().length > 0 };
  }, [query]);

  return useQuery(
    [CACHE_KEY_LIST_PRODUCT, query],
    async () => {
      const { data } = await SearchApiService.getProducts(query);
      return data;
    },
    queryConfig
  );
};

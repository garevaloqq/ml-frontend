import { useMemo } from "react";
import { useQuery } from "react-query";
import { CACHE_KEY_ONE_PRODUCT } from "../constants/product";
import ProductApiService from "../services/ProductApiService";

export const useGetProducts = (id: string) => {
  const queryConfig = useMemo(() => {
    return { enabled: !!id };
  }, [id]);

  return useQuery(
    [CACHE_KEY_ONE_PRODUCT, id],
    async () => {
      const { data } = await ProductApiService.getOne(id);
      return data.item;
    },
    queryConfig
  );
};

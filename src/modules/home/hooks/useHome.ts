import { useMemo } from "react";
import { useQuery } from "react-query";
import { CACHE_KEY_LIST_HOME } from "../constants/home";
import HomeApiService from "../services/HomeApiService";

export const useGetProducts = (query: string) => {
  const queryConfig = useMemo(() => {
    return { enabled: !!query && query.trim().length > 0 };
  }, [query]);

  return useQuery(
    [CACHE_KEY_LIST_HOME, query],
    async () => {
      const { data } = await HomeApiService.search(query);
      return data.items?.slice(0, 4);
    },
    queryConfig
  );
};

import { FC } from "react";
import {
  QueryCache,
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
};

const queryCache = new QueryCache();
const mutationCache = new MutationCache();
const queryClient = new QueryClient({
  queryCache,
  mutationCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MainProvider: FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>{children}</Router>
    </QueryClientProvider>
  );
};

export default MainProvider;

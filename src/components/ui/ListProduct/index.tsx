import { FC, memo } from "react";
import PageLoader from "src/components/PageLoader";
import { IProduct } from "src/interfaces";
import CardProduct from "../CardProduct";

type Props = {
  data: IProduct[];
  isLoading: boolean;
};

const ListProduct: FC<Props> = ({ data, isLoading }) => {
  if (isLoading) return <PageLoader />;

  return (
    <div style={{ backgroundColor: "white" }}>
      {data?.length > 0 ? (
        <div id="product-list" data-testid="product-list">
          {data?.map(({ id, ...rest }: IProduct) => {
            return (
              <div key={id}>
                <CardProduct id={id} {...rest} />
                <hr style={{ opacity: 0.2 }} />
              </div>
            );
          })}
        </div>
      ) : (
        <div data-testid="no-result">No Results Found</div>
      )}
    </div>
  );
};

export default memo(ListProduct);

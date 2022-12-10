import { FC, memo } from "react";
import { IProduct } from "src/interfaces";
import CardProduct from "../CardProduct";

type Props = {
  data: IProduct[];
  isLoading: boolean;
};

const ListProduct: FC<Props> = ({ data }) => {

  return (
    <div style={{ backgroundColor: "white" }}>
      {data?.length > 0 ? (
        data?.map(({ id, ...rest }: IProduct) => {
          return (
            <div key={id}>
              <CardProduct id={id} {...rest} />
              <hr style={{ opacity: 0.2 }} />
            </div>
          );
        })
      ) : (
        <div>Not data</div>
      )}
    </div>
  );
};

export default memo(ListProduct);

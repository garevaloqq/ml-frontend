import {
  render,
  screen,
  waitFor,
  cleanup,
  renderHook,
} from "src/utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import CardProduct from ".";
import { useGetOneProductHook } from "src/mockHooks";
import { MainProvider as wrapper } from "src/contexts";
import { IProduct } from "src/interfaces";

const renderPage = (data: IProduct) => render(<CardProduct {...data} />);

afterEach(() => {
  cleanup();
});

it("Test card by query iphone Product", async () => {
  const { result } = renderHook(() => useGetOneProductHook(), { wrapper });
  await waitFor(() => expect(result.current.isSuccess).toBe(true));
  await waitFor(() => result.current.data);
  const dataProduct = result.current.data!;

  renderPage(dataProduct);

  expect(screen.getByAltText(dataProduct.title)).toBeInTheDocument();
  expect(screen.getByText(dataProduct.title)).toBeInTheDocument();

  await waitFor(() => {
    const element = screen.getByTestId("visible-city");
    expect(element).toHaveTextContent(dataProduct.city_name);
  });
});

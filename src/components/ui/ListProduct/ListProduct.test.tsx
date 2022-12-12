import "@testing-library/jest-dom/extend-expect";

import {
  render,
  screen,
  waitFor,
  cleanup,
  renderHook,
} from "src/utils/test-utils";
import ListProduct from ".";
import { useGetProductsHook } from "src/mockHooks";
import { MainProvider as wrapper } from "src/contexts";
import { IProduct } from "src/interfaces";

const renderPage = (data: IProduct[] = [], isLoading = false) =>
  render(<ListProduct data={data} isLoading={isLoading} />);

afterEach(() => {
  cleanup();
});

describe("Testing list Product", () => {
  it("Test render loading", async () => {
    renderPage([], true);
    expect(screen.getByTestId(/loading/i)).toBeInTheDocument();
  });

  it("Test by query iphone", async () => {
    const { result } = renderHook(() => useGetProductsHook(), { wrapper });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    renderPage(result.current.data?.items, false);

    await waitFor(() => {
      const elementList = screen.queryByTestId("product-list");
      expect(elementList?.childNodes).toHaveLength(4);
    });

    expect(screen.queryByTestId("no-result")).toBe(null);
  });

  it("Test by not results", async () => {
    renderPage();

    await waitFor(() => {
      const element = screen.getByTestId("no-result");
      expect(element).toHaveTextContent("No Results Found");
    });
  });
});

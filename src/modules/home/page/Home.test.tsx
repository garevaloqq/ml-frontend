import { render, screen } from "src/utils/test-utils";
import HomePage from ".";

describe("Testing Home page rendered", () => {
  it("Test render search placeholder", async () => {
    render(<HomePage />);
    expect(
      screen.getByText(/Welcome to Mercado libre/i)
    ).toBeInTheDocument();
  });
});

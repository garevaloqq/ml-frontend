import { render, screen, waitFor } from "src/utils/test-utils";
import App from "./App";

test("Render home Page", async () => {
  render(<App />);
  await waitFor(() => {
    const title = screen.getByText(/Welcome to Mercado libre/i);
    expect(title).toBeInTheDocument();
  });
});

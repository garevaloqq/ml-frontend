import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { MainProvider } from "src/contexts";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "src/components";

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <HelmetProvider>
      <MainProvider>
        <Layout>{children}</Layout>
      </MainProvider>
    </HelmetProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };

export const goTo = (route: string) =>
  window.history.pushState({}, "Test page", route);

import React from "react";
import { render } from "@testing-library/react";
import Index from "../pages/index";

test("Index Renders Hello", () => {
  const { queryByText } = render(<Index />);
  const helloElement = queryByText("Hello");

  expect(helloElement).toBeInTheDocument();
});

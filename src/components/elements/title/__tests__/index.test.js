import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "../";

test("shows the title", () => {
  render(
    <Title>
      <div>Test Post</div>
    </Title>
  );

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(screen.getByText("Test Post")).toBeInTheDocument();
});

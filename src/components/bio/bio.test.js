import React from "react";
import { render } from "@testing-library/react";

import Bio from "./bio";

const bio = [
  {
    style: "normal",
    _key: "block1",
    _type: "block",
    markDefs: [],
    children: [
      {
        marks: [],
        text: "test text",
        _key: "mock1",
        _type: "span"
      },
      {
        marks: ["strong"],
        text: "test bold",
        _key: "mock2",
        _type: "span"
      },
      {
        marks: ["em"],
        text: "test italic",
        _key: "mock3",
        _type: "span"
      }
    ]
  }
];

describe("Bio", () => {
  test("renders to matchsnaphot", () => {
    const { container } = render(<Bio bio={bio} />);

    expect(container).toMatchSnapshot();
  });
});

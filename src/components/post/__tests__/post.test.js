import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { render, screen } from "@testing-library/react";
import Post from "../post";

const blocks = [
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

const imageData = {
  aspectRatio: 1.5,
  src: "test_image.jpg",
  srcSet: "some srcSet",
  srcSetWebp: "some srcSetWebp",
  sizes: "(max-width: 600px) 100vw, 600px",
  base64: "string_of_base64"
};

const defaultProps = {
  title: "Test Post",
  description: "some description",
  imageData: imageData,
  body: blocks
};

test("shows the title", () => {
  render(<Post {...defaultProps} />);

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(screen.getByText("Test Post")).toBeInTheDocument();
});

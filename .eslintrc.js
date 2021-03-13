module.exports = {
  plugins: ["@typescript-eslint"],
  extends: ["airbnb-typescript", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "no-underscore-dangle": 0,
    "react/jsx-props-no-spreading": 0,
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
};

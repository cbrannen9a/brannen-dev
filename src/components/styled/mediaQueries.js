const customMediaMaxQuery = maxWidth => `@media (max-width: ${maxWidth}px)`;
const customeMediaMinQuery = minWidth => `@media (min-width: ${minWidth}px)`;

export const media = {
  minSmall: customeMediaMinQuery(450),
  maxSmall: customMediaMaxQuery(449),
  minMedium: customeMediaMinQuery(675),
  minLarge: customeMediaMinQuery(900)
};

export default media;

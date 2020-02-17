const customMediaMaxQuery = maxWidth => `@media (max-width: ${maxWidth}px)`;
const customMediaMinQuery = minWidth => `@media (min-width: ${minWidth}px)`;

export const media = {
  minSmall: customMediaMinQuery(450),
  maxSmall: customMediaMaxQuery(449),
  minMedium: customMediaMinQuery(675),
  minLarge: customMediaMinQuery(900)
};

export default media;

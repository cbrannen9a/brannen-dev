import styled from "styled-components";
import media from "./mediaQueries";

const baseUnit = 17;

const calculateFontSize = (num, dem) => `calc(${num}/${dem} * 1rem)`;
const calculateLineHeight = (num, dem) => `calc(${num}/${dem})`;

export const font = {
  microSize: calculateFontSize(8, baseUnit),
  microLineHeight: calculateLineHeight(1, 1),
  smallSize: calculateFontSize(14, baseUnit),
  smallLineHeight: calculateLineHeight(18, 14),
  baseSize: `calc(${baseUnit}/16 * 100%)`,
  baseLineHeight: calculateLineHeight(22, baseUnit),
  largeSize: calculateFontSize(19, baseUnit),
  largeLineHeight: calculateLineHeight(24, 19),

  title1Size: calculateFontSize(44, baseUnit),
  title1LineHeight: calculateLineHeight(56, 44),
  title2Size: calculateFontSize(32, baseUnit),
  title2LineHeight: calculateLineHeight(36, 32),
  title3Size: calculateFontSize(24, baseUnit),
  title3LineHeight: calculateLineHeight(28, 24)
};

export const Title1 = styled.h1`
  font-size: ${font.title1Size};
  line-height: ${font.title1LineHeight};
`;

export const Title2 = styled.h2`
  font-size: ${font.title2Size};
  line-height: ${font.title2LineHeight};
`;

export const Title3 = styled.h3`
  font-size: ${font.title3Size};
  line-height: ${font.title3LineHeight};
`;

export const Large = styled.div`
  font-size: ${font.largeSize};
  line-height: ${font.largeLineHeight};
`;

export const Base = styled.h3`
  font-size: inherit;
  line-height: inherit;
`;

export const Small = styled.div`
  font-size: ${font.smallSize};
  line-height: ${font.smallLineHeight};
`;

export const Micro = styled.div`
  font-size: ${font.microSize};
  line-height: ${font.microLineHeight};
  text-transform: uppercase;
`;

export const Paragraph = styled.p`
  font-size: ${font.baseSize};
  line-height: ${font.baseLineHeight};
  margin: 0.5rem 0 1rem 0;

  ${media.minSmall} {
    font-size: ${font.baseSize};
    line-height: ${font.baseLineHeight};
  }

  ${media.minMedium} {
    font-size: ${font.largeSize};
    line-height: ${font.largeLineHeight};
  }
`;

export const BlockQuote = styled.blockquote`
  background: #eee;
`;

export const ResponsiveTitle1 = styled.h1`
  font-weight: 600;
  font-size: ${font.title3Size};
  line-height: ${font.title3LineHeight};
  margin: 1rem 0 2rem;

  ${media.minSmall} {
    font-size: ${font.title2Size};
    line-height: ${font.title2LineHeight};
  }

  ${media.minMedium} {
    font-size: ${font.title1Size};
    line-height: ${font.title1LineHeight};
  }
`;

export const ResponsiveTitle2 = styled.h2`
  font-weight: 900;
  font-size: ${font.largeSize};
  line-height: ${font.largeLineHeight};
  margin: 1.5rem 0 0.5rem;

  ${media.minSmall} {
    font-size: ${font.title3Size};
    line-height: ${font.title3LineHeight};
  }

  ${media.minMedium} {
    font-size: ${font.title2Size};
    line-height: ${font.title2LineHeight};
  }
`;

export const ResponsiveTitle3 = styled.h3`
  font-weight: 900;
  font-size: ${font.largeSize};
  line-height: ${font.largeLineHeight};
  margin: 1rem 0 0.5rem;

  ${media.minSmall} {
    font-size: ${font.largeSize};
    line-height: ${font.largeLineHeight};
  }

  ${media.minMedium} {
    font-size: ${font.title3Size};
    line-height: ${font.title3LineHeight};
  }
`;

export const ResponsiveTitle4 = styled.h4`
  font-size: ${font.baseSize};
  line-height: ${font.baseLineHeight};
  margin: 1rem 0 0.5rem;

  ${media.minSmall} {
    font-size: ${font.baseSize};
    line-height: ${font.baseLineHeight};
  }

  ${media.minMedium} {
    font-size: ${font.largeSize};
    line-height: ${font.largeLineHeight};
  }
`;

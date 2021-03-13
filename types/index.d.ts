export type CTA = {
  title: string;
  link: string;
  type?: "primary" | "secondary";
};

export type CardType = {
  _key: string;
  title: string;
  text: string;
  cta: CTA;
  enabled: boolean;
};

export type Color = {
  color: string;
  hue: string;
};

export interface BaseContent {
  _key: string;
}

export interface HeroContent extends BaseContent {
  _type: "hero";
  ctas: CTA[];
  heading: string;
  subHeading: string;
  label: string;
  tagline: SanityBlockContent;
  image: {
    alt: string;
    asset: {
      url: string;
      creditLine: string;
      description: string;
    };
  };
}

export interface CardsContent extends BaseContent {
  _type: "cards";
  cards: CardType[];
}

export interface BannerContent extends BaseContent {
  _type: "banner";
  ctas: CTA[];
  heading: string;
  subHeading: string;
}

export type Content = HeroContent | CardsContent | BannerContent;

export type SanityBlockContent = BlockContent[];

type BlockContent = {
  _key: string;
  _type: string;
  children: BlockContentChildren[];
  markDefs: [];
  style: string;
};

type BlockContentChildren = {
  _key: string;
  _type: string;
  marks: [];
  text: string;
};

import React, { FC } from "react";
import BlockContent from "@sanity/block-content-to-react";
import { CardType } from "@/types";

const fromColors = [
  "from-blue-700",
  "from-yellow-700",
  "from-pink-700",
  "from-green-700",
  "from-purple-700",
  "from-red-700",
];
const toColors = [
  "to-blue-500",
  "to-yellow-500",
  "to-pink-500",
  "to-green-500",
  "to-purple-500",
  "to-red-500",
];

const Card: FC<Props> = ({ title, text, cta, colorIndex, enabled }) => (
  <div className="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
    <a className="w-full flex" href={cta.link}>
      <div
        className={`w-full flex md:flex-col bg-gradient-to-br ${
          !enabled
            ? `from-gray-700 to-gray-500`
            : `${fromColors[colorIndex % fromColors.length]} ${
                toColors[colorIndex % toColors.length]
              }`
        } `}
      >
        <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
          <h2 className="text-xl font-semibold mb-2 text-shadow">{title}</h2>
          <div className="font-medium text-violet-100 text-shadow mb-4">
            <BlockContent blocks={text} />
          </div>
          <p className="mt-auto">{cta.title}</p>
        </div>
      </div>
    </a>
  </div>
);

interface Props extends CardType {
  colorIndex: number;
}

export default Card;

import { CardType } from "@/types";
import React, { FC } from "react";
import Card from "./Card";

const Cards: FC<Props> = ({ cards }) => (
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 p-1 sm:p-4">
    {cards.map((card, idx) => {
      return <Card key={card._key} {...card} colorIndex={idx} />;
    })}
  </div>
);

interface Props {
  cards: CardType[];
}

export default Cards;

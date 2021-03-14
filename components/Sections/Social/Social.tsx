import React, { FC } from "react";
import { SocialLink } from "@/types";
import Icon from "components/Icon";
import Link from "next/link";

const Social: FC<Props> = ({ social }) =>
  social ? (
    <ul className="flex flex-row flex-wrap justify-evenly md:mb-4 md:px-10 md:max-w-2xl lg:mb-5 list-none max-w-7xl relative bg-white overflow-hidden">
      {social.map((item) => (
        <li key={item._key}>
          <Link href={item.link}>
            <a className="py-2 px-4 sm:py-3 sm:px-6 flex flex-row m-2 rounded-full text-white hover:border-blue-700 border-2 bg-blue-500 hover:bg-blue-700 focus-visible:ring-rose-500">
              <Icon className="m-1" icon={item.title} />
              {item.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  ) : null;

interface Props {
  social: SocialLink[];
}

export default Social;

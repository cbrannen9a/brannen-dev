import { FC } from "react";
import Link from "next/link";
import { SITE_TITLE } from "lib/client/constants";

const Header: FC<Props> = ({ title = SITE_TITLE }) => (
  <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    <Link href="/">
      <a className="hover:underline">{title}</a>
    </Link>
    .
  </h2>
);

interface Props {
  title: string;
}

export default Header;

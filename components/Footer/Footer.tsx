import { FC } from "react";
import Content from "components/Content";
import { EXAMPLE_PATH, SITE_TITLE } from "@/lib/client";

const Footer: FC<Props> = ({ title = SITE_TITLE }) => (
  <footer className="bg-accent-1 border-t border-accent-2">
    <Content>
      <div className="py-28 flex flex-col lg:flex-row items-center">
        <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          {title}
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <a
            href="https://nextjs.org/docs/basic-features/pages"
            className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
          >
            Read Documentation
          </a>
          <a
            href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
            className="mx-3 font-bold hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </Content>
  </footer>
);

interface Props {
  title: string;
}

export default Footer;

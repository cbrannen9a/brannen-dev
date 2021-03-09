import { FC } from "react";
import markdownStyles from "./markdown-styles.module.css";
import BlockContent from "@sanity/block-content-to-react";
import CodeBlock from "./CodeBlock";
import Figure from "./Figure";
import sanityClient from "lib/client/sanityClient";

const serializers = {
  types: {
    code: (props: { node: { code: any; language: string } }) => {
      const {
        node: { code, language },
      } = props;
      return <CodeBlock language={language}>{code}</CodeBlock>;
    },
    figure: (props) => {
      return <Figure {...props} />;
    },
  },
};

const PostBody: FC<Props> = ({ content }) => {
  console.log(content);
  return (
    <div className="max-w-2xl mx-auto">
      <BlockContent
        blocks={content}
        className={markdownStyles.markdown}
        serializers={serializers}
        imageOptions={{ w: 320, h: 240, fit: "max" }}
        {...sanityClient.config()}
      />
    </div>
  );
};

interface Props {
  content: [];
}

export default PostBody;

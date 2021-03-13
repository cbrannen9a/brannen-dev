import { FC } from "react";
import { sanityClient } from "@/lib/client";
import BlockContent from "@sanity/block-content-to-react";
import markdownStyles from "./markdown-styles.module.css";
import CodeBlock from "./CodeBlock";
import Figure from "./Figure";

const serializers = {
  types: {
    code: (props: { node: { code: any; language: string } }) => {
      const {
        node: { code, language },
      } = props;
      return <CodeBlock language={language}>{code}</CodeBlock>;
    },
    figure: (props) => <Figure {...props} />,
  },
};

const PostBody: FC<Props> = ({ content }) => (
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

interface Props {
  content: [];
}

export default PostBody;

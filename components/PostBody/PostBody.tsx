import { FC } from "react";
import markdownStyles from "./markdown-styles.module.css";
import BlockContent from "@sanity/block-content-to-react";

const PostBody: FC<Props> = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <BlockContent blocks={content} className={markdownStyles.markdown} />
    </div>
  );
};

interface Props {
  content: [];
}

export default PostBody;

import { FC } from "react";

import Date from "../Date";
import CoverImage from "../CoverImage";
import PostTitle from "../PostTitle";

const PostHeader: FC<Props> = ({ title, coverImage, date }) => (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} image={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );

interface Props {
  title: string;
  coverImage: any;
  date: string;
}

export default PostHeader;

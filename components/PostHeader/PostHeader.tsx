import { FC } from "react";
import Avatar from "../Avatar";
import Date from "../Date";
import CoverImage from "../CoverImage";
import PostTitle from "../PostTitle";

const PostHeader: FC<Props> = ({ title, coverImage, date, author }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} image={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
};

interface Props {
  title: string;
  coverImage: any;
  date: string;
  author: { name: string; picture: any };
}

export default PostHeader;

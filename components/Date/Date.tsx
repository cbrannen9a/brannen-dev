import { FC } from "react";
import { parseISO, format } from "date-fns";

const Date: FC<Props> = ({ dateString }) => {
  if (!dateString) {
    return null;
  }
  const date = format(parseISO(dateString), "do MMM yyyy");
  return <div className="text-sm text-gray-500">{date}</div>;
};

interface Props {
  dateString: string;
}

export default Date;

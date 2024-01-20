interface Manager {
  date: string;
}
import { format, parseISO } from "date-fns";

const FormattedDate = ({ date }: any) => {
  const formatDate = (dateString: string) => {
    const parsedDate = parseISO(dateString);
    return format(parsedDate, "MMM d yyyy | h:mmaaa");
  };

  return <span>{formatDate(date)}</span>;
};
export default FormattedDate;

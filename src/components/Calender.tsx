import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  add,
  differenceInDays,
  endOfMonth,
  format,
  setDate,
  startOfMonth,
  sub,
} from "date-fns";
import Cell from "./Cell";

const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type Props = {
  value?: Date;
  onChange: (date: Date) => void;
};

const Calendar: React.FC<Props> = ({ value = new Date(), onChange }) => {
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const numDays = differenceInDays(endDate, startDate) + 1;
  const prevMonthEndDate = sub(startOfMonth(value), { days: 1 }).getDate();

  const prefixDays = startDate.getDay();

  const suffixDays = 6 - endDate.getDay();

  const prevMonth = () => onChange(sub(value, { months: 1 }));

  const nextMonth = () => onChange(add(value, { months: 1 }));
  //   const prevYear = () => onChange(sub(value, { years: 1 }));
  //   const nextYear = () => onChange(add(value, { years: 1 }));

  const handleClickDate = (index: number) => {
    const date = setDate(value, index);
    onChange(date);
  };

  return (
    <div className="w-[400px]  border-2 bg-white mt-5 p-1 rounded-lg ">
      <div className="flex justify-between w-full mb-5 mt-1">
        <ChevronLeftIcon
          className="flex-1 self-center font-bold text-[#378760] text-lg"
          onClick={prevMonth}
        />

        <Cell className="w-[75%] font-semibold">
          {format(value, "LLLL yyyy").toUpperCase()}
        </Cell>
        <ChevronRightIcon
          className="flex-1 self-center font-bold text-[#378760] text-lg"
          onClick={nextMonth}
        />
      </div>

      <div className="grid grid-cols-7 items-center justify-center text-center ">
        {weeks.map((week, index) => (
          <Cell
            key={index}
            className="text-base font-semibold  text-[#378760] "
          >
            {week}
          </Cell>
        ))}

        {Array.from({ length: prefixDays }).map((_, index) => {
          //this line first gets the prefixdays,and we subtract that from the index value added to 1 to get the last value   index value , and subtracting that from the prevMonthEndDate will order the dates in the right sequence (read-twice)
          const reversedIndex = prefixDays - (index + 1);
          return (
            <Cell className="text-gray-400" key={index}>
              {prevMonthEndDate - reversedIndex}
            </Cell>
          );
        })}

        {Array.from({ length: numDays }).map((_, index) => {
          const date = index + 1;
          const isCurrentDate = date === value.getDate();

          return (
            <Cell
              key={date}
              isActive={isCurrentDate}
              onClick={() => handleClickDate(date)}
            >
              {date > 9 ? date : `0${date}`}
            </Cell>
          );
        })}

        {Array.from({ length: suffixDays }).map((_, index) => {
          const date = index + 1;
          return (
            <Cell className="text-gray-400" key={index}>
              {date > 9 ? date : `0${date}`}
            </Cell>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;

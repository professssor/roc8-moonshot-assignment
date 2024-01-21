import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useContext, useState } from "react";
import clsx from "clsx";
import { DateContext } from "../context/DateContextProvider";
type SlotType = {
  slotTime: number;
  key?: number;
  endTime: string;
  startTime: string;
};
function IndividualSlots({ endTime, startTime, slotTime }: SlotType) {
  const {  setBookedSlot } = useContext(DateContext);

  const formattedStartTime = new Date(startTime).getUTCHours();
  const formattedEndTime = new Date(endTime).getUTCHours();
  const [confirmColor, setConfirmColor] = useState("");

  return (
    <div>
      <div
        onClick={() => {
          setConfirmColor((prev) => (prev === "" ? "#378760" : ""));
          setBookedSlot(`${formattedStartTime}-${formattedEndTime}`);
        }}
        className={clsx(
          " font-semibold  w-96  text-center mx-auto border rounded-xl border-[#378760] py-2 px-3 my-5 h-[50px] leading-tight  text-[#378760] hover:bg-[#378760]  transition-all ease-in-out duration-500  hover:text-white flex hover:justify-between hover:px-4 justify-center items-center",
          confirmColor !== "" && `bg-[${confirmColor}]`,
          confirmColor !== "" && `text-white`
        )}
      >
        {slotTime === 60 && (
          <>
            {formattedStartTime}
            {formattedStartTime >= 12 ? "PM" : "AM"} - {formattedEndTime}
            {formattedEndTime >= 12 ? "PM" : "AM"}
          </>
        )}
        {slotTime === 30 && (
          <>
            {formattedStartTime}:30
            {formattedStartTime >= 12 ? "PM" : "AM"} - {formattedEndTime}
            {formattedEndTime >= 12 ? "PM" : "AM"}
          </>
        )}
        <CheckCircleOutlineIcon className="ml-4  text-white " />
      </div>
    </div>
  );
}
export default IndividualSlots;

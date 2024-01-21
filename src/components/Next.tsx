import ChevronRight from "@mui/icons-material/ChevronRight";
import { useContext } from "react";
import { DateContext } from "../context/DateContextProvider";

function Next() {
  const { nextCLicked, setNextClicked } = useContext(DateContext);
  const { bookedSlot } = useContext(DateContext);
  return (
    <div className="flex justify-between p-5 rounded-b-2xl bg-[#378760] items-center  ">
      <h3 className="text-white">POWERED BY <span className="underline">APPOINTO</span> </h3>
      <div className=" border rounded-xl">
        <button
          disabled={bookedSlot === ""}
          onClick={() => setNextClicked(true)}
         className={`bg-white w-[150px]  ${bookedSlot !== "" && !nextCLicked &&"animate-pulse"} `}

        >
          Next
      <span className={`text-[#378760] ml-3 `}>

            <ChevronRight className="" />
          </span>
        </button>
      </div>
    </div>
  );
}
export default Next;

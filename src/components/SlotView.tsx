import { useContext, useEffect,  useState } from "react";
import { DateContext } from "../context/DateContextProvider";
import { add, format } from "date-fns";
import IndividualSlots from "./IndividualSlots";
import { MutatingDots } from "react-loader-spinner";

function SlotView() {
 
  const dateContext = useContext(DateContext);
  const [slots, setSlots] = useState<any>([]);
  const { value: currentDate ,slotTime, setSlotTime} = dateContext;

  // GET https://app.appointo.me/scripttag/mock_timeslots?start_date=2024-01-20&end_date=2024-01-30
  const formattedDate = format(currentDate, "yyyy-MM-dd");
  // add adds one day to give date
  const nextDate = add(currentDate, { days: 1 });
  const formattedNextDate = format(nextDate, "yyyy-MM-dd");

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const data = await fetch(
          `https://app.appointo.me/scripttag/mock_timeslots?start_date=${formattedDate}&end_date=${formattedNextDate}`
        );

        if (!data.ok) {
          throw new Error(`Failed to fetch slots. Status: ${data.status}`);
        }

        const res = await data.json();
        setSlots(res[0].slots);
      } catch (error) {
        const fetchError = error as Error;
        console.error("Error fetching slots:", fetchError.message);
      }
    };

    fetchSlots();
  }, [formattedDate]);

  const handleSlotChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSlotTime(Number(e.target.value));
  };

  return (
    <div className="bg-white w-full rounded-tr-2xl ">
      <p className=" uppercase text-sm font-semibold text-[#555770] text-center md:text-left md:ml-9 md:mt-12 leading-5">
        SELECT FROM VARIANTS
      </p>
      <section className="flex flex-col mb-2 items-center p-4 font-medium">
        {/* Variant of duration of call */}

        <div className="relative w-96 flex items-center">
          <select
            value={slotTime}
            onChange={handleSlotChange}
            className="  w-full  border rounded-[10px] border-gray-300 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-[#378760]"
            name=""
            id=""
          >
            <option value="60">60 min</option>
            <option value="30">30 min</option>
          </select>
        </div>
      </section>
      <hr className="w-96 mx-auto" />
      <p className="uppercase text-sm text-center md:text-left font-semibold mt-2 leading-5 text-[#555770] md:ml-9">
        {format(currentDate, "EEEE, MMM dd")} - AVAILABLE SLOTS
      </p>

      {slots.length == 0 && (
        <div className="flex justify-center my-10 ">
          <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}

      {slots
        .slice(0, 4)
        .map(
          (slot: { end_time: string; start_time: string }, index: number) => {
            return (
              <IndividualSlots
                slotTime={Number(slotTime)}
                key={index}
                startTime={slot.start_time}
                endTime={slot.end_time}
              />
            );
          }
        )}
    </div>
  );
}

export default SlotView;

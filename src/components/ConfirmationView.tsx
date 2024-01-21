import { useState, useEffect, useContext } from "react";
import { DateContext } from "../context/DateContextProvider";
import { MutatingDots } from "react-loader-spinner";


function ConfirmationView() {
  const { bookedSlot,  handleSubmit,slotTime, } = useContext(DateContext);
  const [loading, setLoading] = useState(true);
  const { setNextClicked } = useContext(DateContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
     
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-10">
      <div className="bg-green-100 h-[14rem] w-[28rem] border-1 border-gray-200 p-6 rounded-md shadow-md">
        {loading ? (
          <div className="flex justify-center items-center">
            <MutatingDots
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              secondaryColor="#4fa94d"
              radius="10"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <>
            <p className="text-center font-normal text-lg text-[#535577] mb-4">
              Your appointment is scheduled for
            </p>
            <div className="text-center flex w-full justify-center space-x-2 mb-4">
              <p className="text-[2rem] font-semibold">
                {slotTime===60?bookedSlot.split("-")[0]:`${bookedSlot.split("-")[0]}:30`} AM
              </p>
              <p className="text-[2rem] font-semibold">-</p>
              <p className="text-[2rem] font-semibold">
                 {slotTime===60?bookedSlot.split("-")[1]:`${bookedSlot.split("-")[1]}:30`} AM
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setNextClicked(false)}
                className="bg-[#378760] text-white text-sm rounded-md hover:bg-black px-4 py-2"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="bg-[#378760] text-white text-sm rounded-md hover:bg-black px-4 py-2"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ConfirmationView;

import { useContext, useEffect, useState } from "react";
import Calendar from "./components/Calender";
import SlotView from "./components/SlotView";
import Next from "./components/Next";
import { DateContext } from "./context/DateContextProvider";
import ConfirmationView from "./components/ConfirmationView";
import { Toaster, } from "react-hot-toast";
import Header from "./components/Header";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { setValue,handleSubmit } = useContext(DateContext);
  const { nextCLicked,} = useContext(DateContext);
  useEffect(() => {
    setValue(currentDate); 
  }, [currentDate,handleSubmit]);





  // Function to trigger a sample toast


  return (
    <>
     <Header/>
    <div className="p-10  lg:p-0 flex items-start md:mt-40 justify-center h-screen  ">
        
      <div>
        {/* Place the Toaster component at the top of your component hierarchy */}
        <Toaster position="top-center" reverseOrder={false} />
     
      </div>
      <div className=" rounded-2xl flex flex-col w-[58rem] mx-auto bg-[#EBEBF0]  border-2 border-gray-200 ">
        {nextCLicked && <ConfirmationView />}
        <div className="md:flex">
          <section className="flex-1 p-10 text-left">
            <h1 className="text-2xl font-medium">Test Service</h1>
            <h5>
              <span className="font-medium">Timezone</span> : Asia/Calcutta
            </h5>

            <div className="flex-1">
              <Calendar value={currentDate} onChange={setCurrentDate} />
            </div>
          </section>
          <SlotView />
        </div>

        <div className="">
          <Next />
    

         
        </div>
      </div>
    </div>
    </>
  );
};

export default App;

import  { createContext, useState, ReactNode } from "react";
import toast from "react-hot-toast";
export const DateContext = createContext<any>(null);


function DateContextProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState(new Date());
const [slotTime, setSlotTime] = useState<number>(60);
const [ nextCLicked , setNextClicked]= useState(false)

  const [bookedSlot, setBookedSlot] = useState("")
    const handleSubmit = () => {
     toast.success("Your appointment request  was successfully submitted, final status will be communicated soon Thanks!");
     setNextClicked(false)

     
    


  };

  return (
    <DateContext.Provider value={{ value, setValue ,bookedSlot,setBookedSlot,nextCLicked,setNextClicked,handleSubmit,slotTime, setSlotTime}}>
      {children}
    </DateContext.Provider>
  );
}

export default DateContextProvider;

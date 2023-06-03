import { IoIosAddCircleOutline } from "react-icons/io";
import { BsChevronDown,BsPerson } from "react-icons/bs";
import { RiVisaLine } from "react-icons/ri";
import { SiMastercard } from "react-icons/si"; 
import { LuImage } from "react-icons/lu"; 
import ProgressBarTab from "./ProgressBar/ProgressBarTab";

export default function TransactionSideBar() {
  return (
    <>
        
          
          <div className=" border border-1 bg-white rounded-lg p-4 mb-5">
            <p className=" text-gray-500 text-sm">Total Balance</p>
            <p className=" text-gray-500 font-bold text-lg">Ksh. 1,500,00.00</p>
          </div>

          <div>
            <div className=" flex justify-between">
              <p className=" flex items-center text-gray-500">Card <BsChevronDown /></p>                        
              <p className=" flex items-center text-gray-500"><IoIosAddCircleOutline /> <span className=" text-sm"> Add</span></p>
            </div>

            <div className=" relative">

              <div className=" w-full absolute border border-1 bg-cyan-50 rounded-xl p-4 mt-3 shadow-lg z-30 ">
                <p className=" text-gray-500 text-sm">Balance</p>
                <p className=" text-gray-500 font-bold text-lg py-2">Ksh. 50,000.00</p>

                <p className=" text-gray-500 text-sm py-2">4256 5419 1247 0023</p>
                <div className=" flex items-center text-gray-500 text-sm justify-between">
                  <div>
                    <p>VALID THRU</p>
                    <p className=" font-semibold">05/23</p>
                  </div>
                   
                  <RiVisaLine className=" w-16 h-16 text-gray-300 align-top" />
                </div>
                
              </div>

              <div className=" w-full top-48 absolute flex border border-1 rounded-xl p-4 bg-white justify-between items-center z-10">
                <p className=" text-gray-500 font-bold ">Ksh. 30,000.00</p>
                <div className=" text-gray-300 text-sm "> 
                  <SiMastercard className=" w-8 h-8" />
                  <p>**5526</p>
                </div>
              </div> 
              

              <div className=" w-full top-64 absolute flex border border-1 rounded-xl p-4 bg-white justify-between items-center z-0">
                <p className=" text-gray-500 font-bold ">Ksh. 30,000.00</p>
                <div className=" text-gray-300 text-sm">
                  <RiVisaLine className=" w-8 h-8" />
                  <p>**5526</p>
                </div>
              </div>
              



            </div>




          </div>

          <div className=" flex mt-[360px]">
            <div className=" flex -space-x-3 items-center pr-2">
              <p className=" flex border border-gray-300 bg-white rounded-full h-7 w-7 text-gray-600 font-semibold items-center justify-center z-10"><BsPerson /></p>
              <p className=" flex border border-gray-300 bg-white rounded-full h-7 w-7 text-gray-600 font-semibold items-center justify-center z-20"><BsPerson /></p>             
            </div>
            <p className=" text-sm text-gray-600">2 of your friends are enjoying attractive rewards. <span className=" font-semibold">Upgrade your card now!</span></p>       
          </div>











          <div className=" mt-8">
            <div className=" flex justify-between">
              <p className=" flex items-center text-gray-500">Goals <BsChevronDown /></p>                        
              <p className=" flex items-center text-gray-500"><IoIosAddCircleOutline /> <span className=" text-sm"> Add</span></p>
            </div>


            <div className=" pt-3">

              

              <div className=" border border-1 rounded-xl p-4 space-y-5 bg-white items-center">
                <div className=" flex gap-5 items-center">
                  <div className=" flex w-10 h-10 border border-1 rounded-full items-center justify-center text-gray-500">
                    <LuImage />
                  </div>
                  
                  
                  <div className=" text-gray-300 text-sm"> 
                    <div className=" flex justify-between">
                      <p className=" text-gray-500 font-semibold text-sm">New Car</p>
                      <p className=" text-gray-500 text-sm">30%</p>
                    </div>
                      <ProgressBarTab />
                    <p className=" text-gray-500 text-sm">Ksh. 30,000.00 of Ksh. 100,000.00</p>
                  </div>
                </div>

                <div className=" flex gap-5 items-center">
                  <div className=" flex w-10 h-10 border border-1 rounded-full items-center justify-center text-gray-500">
                    <LuImage />
                  </div>
                  
                  
                  <div className=" text-gray-300 text-sm"> 
                    <div className=" flex justify-between">
                      <p className=" text-gray-500 font-semibold text-sm">New Car</p>
                      <p className=" text-gray-500 text-sm">30%</p>
                    </div>
                      <ProgressBarTab />
                    <p className=" text-gray-500 text-sm">Ksh. 30,000.00 of Ksh. 100,000.00</p>
                  </div>
                </div>
                
              </div>

              <div className=" border border-1 rounded-xl p-4 bg-gray-500 justify-between items-center mt-6">
              <div className=" flex gap-5 items-center">
                  <div className=" flex w-10 h-10 border border-1 rounded-full items-center justify-center text-white">
                    <LuImage />
                  </div>
                  
                  
                  <div> 
                    <p className=" text-white font-semibold">ERGO Health Insuarance</p> 
                  </div>
                </div>                 
                <p className=" text-white text-sm mt-3">
                    HDFC ERGO has secured over #1.3 Crore+
                    customers with a wide range of health
                    insuarance plans.<br/>
                    <span className=" font-semibold">Know More</span>

                  </p> 
              </div> 



            </div>

            <div className=" flex mt-4">
              <div className=" flex -space-x-3 items-center pr-2">
                <p className=" flex border border-gray-300 bg-white rounded-full h-7 w-7 text-gray-600 font-semibold items-center justify-center z-10"><BsPerson /></p>
                <p className=" flex border border-gray-300 bg-white rounded-full h-7 w-7 text-gray-600 font-semibold items-center justify-center z-20"><BsPerson /></p>             
              </div>
              <p className=" text-sm text-gray-600">10 of your friends have opted for this family health insuarance plan. <span className=" font-semibold">Get your quotes now!</span></p>
            </div>
          </div> 
    </>
  )
}

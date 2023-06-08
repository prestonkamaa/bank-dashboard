"use client";
import { CiBellOn, CiSearch } from "react-icons/ci";
import { BsChevronDown,BsPerson } from "react-icons/bs";
import TransactionBar from "../Components/TransactionSideBar";
import AllTransactions from "../Components/AllTransactions";


export const Homepage = () => {
  return (
    <div className="p-5 ">
        <div className=" flex items-center ">
          <p className=" text-2xl mr-auto text-gray-500 mb-5">
            Hi George
          </p> 


          <div className=" flex gap-2 mr-10"> 
                <CiSearch className=" w-6 h-6 text-gray-600" />
                <CiBellOn className=" w-6 h-6 text-gray-600" />
            </div>

            <div className="flex -space-x-3 items-center">
              <p className=" flex border border-gray-300 bg-white rounded-full h-7 w-7 text-gray-600 font-semibold items-center justify-center z-10"><BsPerson /></p>
              <p className=" flex border border-gray-300 bg-white rounded-full h-7 w-7 text-gray-600 font-semibold items-center justify-center z-20"><BsPerson /></p>
              <div className=" flex bg-gray-400 rounded-full h-9 w-9 text-white font-semibold items-center justify-center z-30">G</div>                
              
            </div>
            <BsChevronDown />
          </div>

 
        <div>

        <div className=" flex lg:flex-nowrap flex-wrap lg:divide-x ">
          <div className="lg:w-1/3 w-full lg:pr-5 ">
            <TransactionBar />
          </div>
          
          <div className="lg:w-2/3 w-full lg:pl-5">
            <AllTransactions />
          </div>
        </div>


        </div>

        
    </div>
  )
}

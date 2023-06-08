import { LuImage } from "react-icons/lu"; 
import { BsChevronDown,BsChevronRight} from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import LineChart from "./Charts/LineChart";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale); 

export default function AllTransactions() {
  return (
    <>

        <div className=" border border-1 rounded-xl p-4 bg-white mb-6">
            <div className=" flex lg:flex-nowrap flex-wrap justify-between text-gray-500 items-center mb-7">
              <p className=" flex items-center">Overview of <span className=" font-semibold">****4265</span> <BsChevronDown /></p>
            <p className=" flex text-sm text-gray-500 gap-3 ">
                Day <span className=" font-semibold underline">Week</span> Month Year  
            </p>  
            </div>
            

            <div className=" flex lg:text-sm text-xs lg:gap-12 gap-3 text-gray-500">
                <div>
                    Balance <br/>
                    <p className=" lg:text-base text-xs font-semibold">Ksh. 50,000.00</p>
                </div>
                <div>
                    Income <br/>
                    <p className=" lg:text-base text-xs font-semibold">Ksh. 30,000.00</p>
                </div>
                <div>
                    Expenses <br/>
                    <p className=" lg:text-base text-xs font-semibold">Ksh. 24,000.00</p>
                </div>
            </div>

            <div className=" py-6">
                <LineChart />
            </div>




        </div>

        <div>
            <div className=" flex justify-between mb-3">             
              <p className=" flex items-center text-gray-500">All Transations <BsChevronDown /></p>                        
              <p className=" flex items-center text-gray-500"><IoIosAddCircleOutline /> <span className=" text-sm"> Add</span></p>
            </div>

            <div className=" border border-1 rounded-xl p-4 bg-white items-center">


                <div className="flex flex-col">
                    <div className="overflow-x-auto">
                        <div className="p-1.5 w-full inline-block align-middle">
                            <div className="overflow-hidden">

                                <table className="min-w-full"> 

                                    <tbody>
                                        <tr>
                                            <td className=" pb-3 "> 
                                                <p className=" flex  w-7 h-7 border border-1 rounded-full items-center justify-center text-gray-500">
                                                    <LuImage />
                                                </p> 
                                            </td>
                                            <td className=" pb-3  text-sm font-semibold text-gray-500 whitespace-nowrap">
                                                Rakesh Sharma    
                                            </td>
                                            <td className=" pb-3  text-sm text-gray-500 whitespace-nowrap">
                                                24th June, 05:50 pm  
                                            </td>
                                            <td className=" pb-3  text-sm text-gray-500 whitespace-nowrap">
                                                Transfer  
                                            </td> 
                                            <td className=" pb-3  text-sm font-semibold text-gray-500 whitespace-nowrap text-right">
                                                + Ksh. 7,000  
                                            </td> 
                                        </tr>

                                        <tr>
                                            <td className=" pb-3 "> 
                                                <p className=" flex w-7 h-7 border border-1 rounded-full items-center justify-center text-gray-500">
                                                    <LuImage />
                                                </p> 
                                            </td>
                                            <td className=" pb-3  text-sm font-semibold text-gray-500 whitespace-nowrap">
                                                Zomato Order #122    
                                            </td>
                                            <td className=" pb-3  text-sm text-gray-500 whitespace-nowrap">
                                                24th June, 05:50 pm  
                                            </td>
                                            <td className=" pb-3  text-sm text-gray-500 whitespace-nowrap">
                                                Transfer  
                                            </td> 
                                            <td className=" pb-3  text-sm font-semibold text-gray-500 whitespace-nowrap text-right">
                                                - Ksh. 640  
                                            </td> 
                                        </tr>


                                        <tr>
                                            <td className=" pb-3 "> 
                                                <p className=" flex w-7 h-7 border border-1 rounded-full items-center justify-center text-gray-500">
                                                    <LuImage />
                                                </p> 
                                            </td>
                                            <td className=" pb-3  text-sm font-semibold text-gray-500 whitespace-nowrap">
                                                Netflix    
                                            </td>
                                            <td className=" pb-3  text-sm text-gray-500 whitespace-nowrap">
                                                24th June, 05:50 pm  
                                            </td>
                                            <td className=" pb-3  text-sm text-gray-500 whitespace-nowrap">
                                                Transfer  
                                            </td> 
                                            <td className=" pb-3  text-sm font-semibold text-gray-500 whitespace-nowrap text-right">
                                                - Ksh. 820  
                                            </td> 
                                        </tr>


                                        <tr>
                                            <td className=" pb-3 "> 
                                                <p className=" flex w-7 h-7 border border-1 rounded-full items-center justify-center text-gray-500">
                                                    <LuImage />
                                                </p> 
                                            </td>
                                            <td className=" pb-3  text-sm font-semibold text-gray-500 whitespace-nowrap">
                                                Kamah Sharma    
                                            </td>
                                            <td className=" pb-3  text-sm text-gray-500 whitespace-nowrap">
                                                01th June, 05:50 pm  
                                            </td>
                                            <td className=" pb-3  text-sm text-gray-500 whitespace-nowrap">
                                                Transfer  
                                            </td> 
                                            <td className=" pb-3  text-sm font-semibold text-gray-500 whitespace-nowrap text-right">
                                                + Ksh. 500  
                                            </td> 
                                        </tr>

                                        
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div> 

                <p className=" flex text-sm text-gray-500 items-center justify-center"> Show More <BsChevronDown /> </p>

            </div>
        </div>



        <div >
            <div className=" flex justify-between mt-6 mb-3">             
              <p className=" flex items-center text-gray-500">My Favorites <BsChevronDown /></p>                        
              <p className=" flex items-center text-gray-500"><IoIosAddCircleOutline /> <span className=" text-sm"> Add New</span></p>
            </div>

            <div className=" border border-1 rounded-xl p-4 bg-white items-center">


                <div className="flex flex-col">
                    <div className="overflow-x-auto">
                        <div className="p-1.5 w-full inline-block align-middle">
                            <div className="overflow-hidden">

                                <table className="min-w-full"> 

                                    <tbody>
                                        <tr>
                                            <td className=" pb-3 "> 
                                                <p className=" flex w-7 h-7 border border-1 rounded-full items-center justify-center text-gray-500">
                                                    <LuImage />
                                                </p> 
                                            </td>
                                            <td className=" pb-3  text-sm font-semibold text-gray-500 whitespace-nowrap">
                                                Rakesh Sharma    
                                            </td>
                                            <td className=" pb-3  text-sm text-gray-500 whitespace-nowrap">
                                                KCB Bank  
                                            </td>
                                            <td className=" pb-3  text-sm text-gray-500 whitespace-nowrap">
                                                Current  
                                            </td> 
                                            <td className=" pb-3  text-sm font-semibold text-gray-500 whitespace-nowrap text-right">
                                                <BsChevronRight />  
                                            </td> 
                                        </tr>

                                        <tr>
                                            <td className=" pb-3 "> 
                                                <p className=" flex w-7 h-7 border border-1 rounded-full items-center justify-center text-gray-500">
                                                    <LuImage />
                                                </p> 
                                            </td>
                                            <td className=" pb-3  text-sm font-semibold text-gray-500 whitespace-nowrap">
                                                Nairobi Store    
                                            </td>
                                            <td className=" pb-3  text-sm text-gray-500 whitespace-nowrap">
                                                Co-op Bank   
                                            </td>
                                            <td className=" pb-3  text-sm text-gray-500 whitespace-nowrap">
                                                Current  
                                            </td> 
                                            <td className=" pb-3  text-sm font-semibold text-gray-500 whitespace-nowrap text-right">
                                                <BsChevronRight /> 
                                            </td> 
                                        </tr>


                                        <tr>
                                            <td className=" pb-3 "> 
                                                <p className=" flex w-7 h-7 border border-1 rounded-full items-center justify-center text-gray-500">
                                                    <LuImage />
                                                </p> 
                                            </td>
                                            <td className=" pb-3  text-sm font-semibold text-gray-500 whitespace-nowrap">
                                                Netflix    
                                            </td>
                                            <td className=" pb-3  text-sm text-gray-500 whitespace-nowrap">
                                                FS Sacco  
                                            </td>
                                            <td className=" pb-3  text-sm text-gray-500 whitespace-nowrap">
                                                Savings 
                                            </td> 
                                            <td className=" pb-3  text-sm font-semibold text-gray-500 whitespace-nowrap text-right">
                                                <BsChevronRight />  
                                            </td> 
                                        </tr>


                                        
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div> 
                
            </div>
        </div>



    </>
  )
}

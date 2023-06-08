import { IoPeopleCircleOutline } from "react-icons/io5";
import { BsChevronRight} from "react-icons/bs";
import { RxHamburgerMenu} from "react-icons/rx";




export default function SidebarMenu() {
  return (
    <div className=" flex flex-col mt-10 ">
        <p className=" text-center text-white text-3xl mb-5">
            <span className=" font-bold">ABC</span> Bank
        </p>

        <RxHamburgerMenu className=" text-white lg:hidden " />

        <nav className=" lg:block hidden text-white mx-auto space-y-5 cursor-pointer">
            <p className=" flex items-center bg-slate-300 hover:bg-slate-200 px-5 py-2 rounded-xl"> 
              <IoPeopleCircleOutline className=" w-6 h-6 mr-1" />Dashboard 
            </p> 
            <p className=" flex ml-5 hover:text-gray-200">
              <IoPeopleCircleOutline className=" w-6 h-6 mr-1" />Payments </p>
            <p className=" flex ml-5 hover:text-gray-200">
              <IoPeopleCircleOutline className=" w-6 h-6 mr-1" />Wallet  </p>
            <p className=" flex ml-5 hover:text-gray-200">
              <IoPeopleCircleOutline className=" w-6 h-6 mr-1" />History </p> 
            <p className=" flex ml-5 hover:text-gray-200">
              <IoPeopleCircleOutline className=" w-6 h-6 mr-1" />Statistics </p> 
            <p className=" flex ml-5 hover:text-gray-200">
              <IoPeopleCircleOutline className=" w-6 h-6 mr-1" />Goals </p> 
            <p className=" flex ml-5 hover:text-gray-200">
              <IoPeopleCircleOutline className=" w-6 h-6 mr-1" />Settings </p>            
                       
        </nav> 

        <a href="https://google.com/" target="_blank"><p className=" flex mx-auto w-60 mt-32 items-center bg-slate-300 hover:bg-slate-200 px-5 py-2 text-white rounded-xl lg:block hidden">
          Link to image design <BsChevronRight className=" w-4 h-4 mr-1" />
        </p></a> 
    </div>
  )
}

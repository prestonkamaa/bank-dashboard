import SidebarMenu from "./Components/Sidebar/SidebarMenu"
import { Homepage } from "./Pages/HomePage"

export default function index() {
  return (
    <div className=" flex lg:flex-nowrap flex-wrap h-screen">
      <div className="lg:w-1/5 w-full bg-gray-400">
        <SidebarMenu />
      </div>
      <div className="lg:w-4/5 w-full  bg-gray-100 overflow-y-auto ">
        <Homepage />
      </div>

      
    </div>
  )
}

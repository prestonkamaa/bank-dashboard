import SidebarMenu from "./Components/Sidebar/SidebarMenu"
import { Homepage } from "./Pages/HomePage"

export default function index() {
  return (
    <div className=" flex h-screen">
      <div className="w-1/5 bg-gray-400">
        <SidebarMenu />
      </div>
      <div className="w-4/5  bg-gray-100 overflow-y-auto ">
        <Homepage />
      </div>

      
    </div>
  )
}

import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
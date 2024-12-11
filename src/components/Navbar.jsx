import { useState } from "react";
import Image from "./Image";
import { NavLink } from "react-router";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 items-center flex justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <Image src="/logo.png" alt="Logo" h={32} w={32} />
        <span className="">Lamalog</span>
      </div>
      {/* Mobile menu */}
      <div className="flex md:hidden">
        <div
          className="text-2xl cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? "X" : "m"}
        </div>
        {/* Mobile link list */}
        <div
          className={`w-full h-screen flex flex-col justify-center items-center absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          menu
        </div>
      </div>
      {/* desktop menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/">Trending</NavLink>
        <NavLink to="/">Mos Popular</NavLink>
        <NavLink to="/">About</NavLink>
        <SignedOut>
          <NavLink to="/login">
            <button className="py-2 px-4 bg-blue-800 rounded-3xl text-white">
              Login
            </button>
          </NavLink>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

"use client";

import { links } from "@/contants";
import Link from "next/link";
import React, { useState } from "react";
import NavLinks from "./navLinks/NavLinks";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  
  return (
    <header className="bg-slate-900 text-slate-100 ">
      <nav className="bg-slate-900 text-slate-100 flex justify-between items-center h-16 max-w-5xl px-4 mx-auto z-30 shadow-xl transition-all duration-500">
        <div className="flex items-end">
          <Image
            src="/Images/logo-white.png"
            alt="forests"
            width={30}
            height={30}
            className="md:w-12  md:h-12"
          />

          <h2 className="text-2xl font-bold leading-tight md:pb-1  ">
            nuzha<span className="text-primary">kashmir</span>
          </h2>
        </div>
        <div className="lg:hidden">
          <div onClick={handleClick}>{toggle ? <ImCross /> : <FaBars />}</div>
        </div>
       
          <div
            className={`max-lg:bg-slate-900 flex flex-col justify-start items-center py-16 absolute ${
              toggle ? "top-16" : "-top-full"
            } left-0 w-full h-screen lg:static lg:flex-row lg:py-0 lg:justify-end lg:space-x-8 lg:px-8 `}
          >
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className=" flex my-4 font-bold text-lg relative group transition-all duration-500  hover:translate-x-1"
              >
                {link.title}
                <span className="absolute inline-block h-[3px] w-0 bg-primary -bottom-2 transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        
        
      </nav>
    </header>
  );
};

export default Navbar;

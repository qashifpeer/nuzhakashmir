import { links } from "@/constants";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <div className="">
      {links.map((link, index) => (
        <Link href={link.path} key={index} className="font-bold text-lg">
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;

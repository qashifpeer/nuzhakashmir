import { links } from "@/contants";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <div className="flex gap-4">
      {links.map((link, index) => (
        <Link href={link.path} key={index}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;

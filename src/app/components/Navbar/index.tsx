import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";

export default function Navbar() {
  return (
    <header
      id="navbar"
      className="bg-primary  md:border md:rounded-b-md md:border-primary md:mx-10  my-0  fixed left-0 right-0 top-0 "
    >
      <div className="p-2 flex justify-between items-center ">
        <Link href="/" className="font-bold text-2xl mx-start mx-auto ">
          <FaBlog color="white" size="35px" />
        </Link>
        <Link href="/user">
          <div className="flex flex-col justify-center items-center  mr-2">
            <FaUserCircle color="white" size="25px" />
            <h1 className="font-bold text-sm">User</h1>
          </div>
        </Link>
      </div>
    </header>
  );
}

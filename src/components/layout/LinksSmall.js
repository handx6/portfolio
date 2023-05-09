import React from "react";
import Link from "next/link";

export default function LinksSmall({ showMenu }) {
  return (
    <>
      {showMenu && (
        <div
          className={
            showMenu
              ? "z-10 block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none w-full font-light bg-white "
              : "hidden"
          }
        >
          <Link
            href="/projects"
            className="block text-left text-lg text-[#0D2438]  hover:text-[#102D44]  sm:mx-4 pb-2 sm:py-2 border-b-2 pt-3 border-[#F7F8FC]"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="block text-left text-lg text-[#0D2438]  hover:text-[#102D44]  sm:mx-4 pb-2 sm:py-2 border-b-2 pt-3 sm:pt-2 border-[#F7F8FC]"
          >
            About Me
          </Link>
          <Link
            href="/contact"
            className="block text-left text-lg text-[#0D2438]  hover:text-[#102D44]  sm:mx-4 mb-2 sm:py-2 border-b-2 pt-3 sm:pt-2 border-[#F7F8FC]"
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
}

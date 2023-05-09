import React from 'react'
import  Link  from "next/link";

export default function LinksLarge() {
  return (
    <div className="font-normal hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
      <Link
        href="/projects"
        className="block text-lg text-[#0D2438] hover:text-[#102D44]   sm:mx-4 mb-2 sm:py-2"
      >
        Projects
      </Link>
      <Link
        href="/about"
        className="block text-left text-lg text-[#0D2438] hover:text-[#102D44]  sm:mx-4 mb-2 sm:py-2"
      >
        About Me
      </Link>
      <Link
        href="/contact"
        className="block text-left text-lg text-[#0D2438] hover:text-[#102D44]  sm:mx-4 mb-2 sm:py-2"
      >
        Contact
      </Link>
    </div>
  );
}

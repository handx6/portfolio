import React from 'react'

export default function FooterCopyright() {
  return (
    <div className="font-normal flex justify-center items-center text-center">
      <div className="text-lg text-[#1E3851]">
        &copy; {new Date().getFullYear()}
        <a
          href="https://github.com/realstoman/react-tailwindcss-portfolio"
          target="__blank"
          className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          React & Tailwind CSS Portfolio
        </a>
        .
        <a
          href="https://stoman.me"
          target="__blank"
          className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          Stoman
        </a>
      </div>
    </div>
  );
}


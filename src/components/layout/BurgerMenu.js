import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
export default function BurgerMenu({showMenu, setShowMenu}) {
  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }
  return (
    <>
      <div className="sm:hidden">
        <button
          onClick={() => toggleMenu()}
          type="button"
          className="focus:outline-none"
          aria-label="Hamburger Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-current text-[#102D44]"
          >
            {showMenu ? (
              <FiX className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </svg>
        </button>
      </div>
    </>
  );
}

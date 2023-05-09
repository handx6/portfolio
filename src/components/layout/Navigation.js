import React from "react";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import LinksSmall from "./LinksSmall";
import LinksLarge from "./LinksLarge";

export default function Navigation() {
    const [showMenu, setShowMenu] = useState(false)
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-white">
      <nav className="p-4 sm:p-8 lg:px-20 xl:px-24 2xl:px-32 sm:mx-auto bg-white">
        <div className="z-10 max-w-screen-lg xl:max-w-screen-xl  flex justify-between sm:items-center py-2">
            <div>
              <p className="text-3xl text-black">Martin Nicolas</p>
            </div>
            <BurgerMenu showMenu={showMenu} setShowMenu={setShowMenu} />
            {/* links on large screens */}
            <LinksLarge />
        </div>
        {/* links when menuburger is developped */}
        <LinksSmall showMenu={showMenu} />
      </nav>
    </div>
  );
}

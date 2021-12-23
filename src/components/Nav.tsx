import Image from "next/image";
import React, { useState } from "react";
interface ButtonInterface {
  toggle: () => void;
}

const Button = ({ toggle }: ButtonInterface) => {
  return (
    <button
      onClick={toggle}
      className="hidden mobile:block mobile:fixed mobile:border-none mobile:z-50 mobile:top-8 mobile:right-8"
    >
      <Image
        src={"/assets/shared/icon-hamburger.svg"}
        alt="hamburger"
        height={24}
        width={24}
        layout="fixed"
        className="fill-white"
      />
      <span className="sr-only">Menu</span>
    </button>
  );
};

const Nav = () => {
  // Const for toggling display of mobile dropdown menu. "mobile:" is need as mobile:${menu} doesn't compile.
  const [menu, setMenu] = useState("mobile:hidden");

  return (
    <>
      <Button
        toggle={() => {
          menu === "mobile:hidden"
            ? setMenu("mobile:block")
            : setMenu("mobile:hidden");
        }}
      />
      <nav
        className={`bg-black/5 backdrop-blur-3xl font-sans text-lg p-4 ${menu} mobile:fixed mobile:top-0 mobile:right-0 mobile:w-3/4 mobile:h-screen mobile:z-30 tablet:p-4 desktop:py-4 desktop:px-20`}
      >
        <ul className="mobile:my-32 mobile:mx-4 tablet:flex tablet:gap-4 desktop:gap-8">
          <li className="mobile:p-4">
            <a href="/" className="text-white flex gap-2">
              <span
                aria-hidden="true"
                className="font-bold tablet:hidden desktop:block"
              >
                00
              </span>{" "}
              HOME
            </a>
          </li>
          <li className="mobile:p-4">
            <a href="/destination" className="text-white flex gap-2">
              <span aria-hidden="true" className="font-bold">
                01
              </span>{" "}
              DESTINATION
            </a>
          </li>
          <li className="mobile:p-4">
            <a href="crew" className="text-white flex gap-2">
              <span aria-hidden="true" className="font-bold">
                02
              </span>{" "}
              CREW
            </a>
          </li>
          <li className="mobile:p-4">
            <a href="#" className="text-white flex gap-2">
              <span aria-hidden="true" className="font-bold">
                03
              </span>{" "}
              TECHNOLOGIES
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

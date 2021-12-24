import React from "react";
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex justify-between items-center relative p-8 tablet:pl-8 desktop:py-8 desktop:pl-8 z-10">
      <Image src="/assets/shared/logo.svg" alt="Logo" width="48" height="48" />
      <hr className="hidden desktop:block opacity-10 z-20 absolute text-white w-1/3 translate-x-1/4" />
      <Nav />
    </header>
  );
};

export default Header;

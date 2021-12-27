import React from "react";
import Image from "next/image";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center relative p-8 tablet:py-0 tablet:px-0 tablet:pl-8 desktop:py-8 desktop:pl-8 z-10">
      <Link href="/" passHref>
        <Image
          src="/assets/shared/logo.svg"
          alt="Logo"
          width="48"
          height="48"
          className="cursor-pointer"
        />
      </Link>
      <hr className="hidden desktop:block opacity-10 z-20 absolute text-white w-1/3 translate-x-1/4" />
      <Nav />
    </header>
  );
};

export default Header;

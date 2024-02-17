import React from "react";
import Image from "next/image";
import Navigation from "./navigation";
import Link from "next/link";

interface IProps {
  children: React.ReactNode;
}

const Header = ({ children }: IProps) => {
  return (
    <header className="flex justify-between items-center relative p-8 tablet:py-0 tablet:px-0 tablet:pl-8 desktop:py-8 desktop:pl-8 z-10">
      <Link href="/">
        <Image
          src="/assets/shared/logo.svg"
          alt="Logo"
          width="48"
          height="48"
          className="cursor-pointer"
        />
      </Link>
      <hr className="hidden desktop:block opacity-10 z-20 absolute text-white w-1/3 translate-x-1/4" />
      {children}
    </header>
  );
};

export default Header;

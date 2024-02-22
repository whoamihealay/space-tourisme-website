import React from "react";
import Image from "next/image";
import Navigation from "./navigation";
import Link from "next/link";

interface IProps {
  children: React.ReactNode;
}

const Header = ({ children }: IProps) => {
  return (
    <header className="relative z-10 flex items-center justify-between p-8 tablet:px-0 tablet:py-0 tablet:pl-8 desktop:py-8 desktop:pl-8">
      <Link href="/">
        <Image
          src="/assets/shared/logo.svg"
          alt="Logo"
          width="48"
          height="48"
          className="cursor-pointer"
        />
      </Link>
      <hr className="absolute z-20 hidden w-1/3 translate-x-1/4 text-white opacity-10 desktop:block" />
      {children}
    </header>
  );
};

export default Header;

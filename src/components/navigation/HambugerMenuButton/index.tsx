import React from "react";
import Image from "next/image";

interface IHamburgerMenuButton {
  toggle: () => void;
}

const HamburgerMenuButton = ({ toggle }: IHamburgerMenuButton) => {
  return (
    <button
      onClick={toggle}
      className="mobile:right-8 mobile:top-8 mobile:z-50 mobile:border-none tablet:hidden"
    >
      <Image
        src={"/assets/shared/icon-hamburger.svg"}
        alt="hamburger"
        height={24}
        width={24}
        className="fill-white"
      />
      <span className="sr-only">Menu</span>
    </button>
  );
};

export default HamburgerMenuButton;

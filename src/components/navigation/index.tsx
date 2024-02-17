import React, { useState } from "react";
import NavigationLink from "./NavigationLink";
import { NavigationLinkType } from "@/types/index";
import HamburgerMenuButton from "./HambugerMenuButton";

interface INavigation {
  menu?: NavigationLinkType[];
}

const Navigation = ({ menu }: INavigation) => {
  // "mobile:" is needed as mobile:${menu} doesn't compile for tailwind.
  const [showMenu, setShowMenu] = useState("mobile:hidden");

  return (
    <>
      <HamburgerMenuButton
        toggle={() => {
          showMenu === "mobile:hidden"
            ? setShowMenu("mobile:block")
            : setShowMenu("mobile:hidden");
        }}
      />
      <nav
        className={`bg-white/5 backdrop-blur-3xl font-sans text-lg p-4 ${showMenu} mobile:fixed mobile:top-0 mobile:right-0 mobile:w-3/4 mobile:h-screen mobile:z-30 tablet:px-8 tablet:py-0 desktop:py-0 desktop:px-20`}
      >
        <ul className="mobile:my-32 mobile:mx-4 tablet:flex tablet:gap-12 desktop:gap-8 items-center">
          {menu?.map((item) => (
            <NavigationLink
              key={item.name}
              name={item.name}
              prefix={item.prefix}
              link={item.link}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;

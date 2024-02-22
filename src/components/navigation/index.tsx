"use client";

import React, { useState } from "react";
import NavigationLink from "./NavigationLink";
import { NavigationLinkType } from "@/types/index";
import HamburgerMenuButton from "./HambugerMenuButton";

interface INavigation {
  menu?: NavigationLinkType[];
}

export default function Index({ menu }: INavigation) {
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
        className={`bg-white/5 p-4 font-sans text-lg backdrop-blur-3xl ${showMenu} mobile:fixed mobile:right-0 mobile:top-0 mobile:z-30 mobile:h-screen mobile:w-3/4 tablet:px-8 tablet:py-0 desktop:px-20 desktop:py-0`}
      >
        <ul className="items-center mobile:mx-4 mobile:my-32 tablet:flex tablet:gap-12 desktop:gap-8">
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
}

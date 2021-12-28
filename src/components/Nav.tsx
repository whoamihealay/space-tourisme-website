import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
interface ButtonInterface {
  toggle: () => void;
}

const Button = ({ toggle }: ButtonInterface) => {
  return (
    <button
      onClick={toggle}
      className="tablet:hidden mobile:border-none mobile:z-50 mobile:top-8 mobile:right-8"
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
  const [activeHome, setActiveHome] = useState("");
  const [activeDest, setActiveDest] = useState("");
  const [activeCrew, setActiveCrew] = useState("");
  const [activeTech, setActiveTech] = useState("");

  const activeRouter = useRouter();
  useEffect(() => {
    switch (activeRouter.route) {
      case "/":
        setActiveHome("border-white mobile:border-l-4 tablet:border-b-4");
        break;
      case "/destination":
        setActiveDest("border-white mobile:border-l-4 tablet:border-b-4");
        break;
      case "/crew":
        setActiveCrew("border-white mobile:border-l-4 tablet:border-b-4");
        break;
      case "/technologies":
        setActiveTech("border-white mobile:border-l-4 tablet:border-b-4");
        break;
      default:
        break;
    }
  }, [activeRouter]);

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
        className={`bg-white/5 backdrop-blur-3xl font-sans text-lg p-4 ${menu} mobile:fixed mobile:top-0 mobile:right-0 mobile:w-3/4 mobile:h-screen mobile:z-30 tablet:px-8 tablet:py-0 desktop:py-0 desktop:px-20`}
      >
        <ul className="mobile:my-32 mobile:mx-4 tablet:flex tablet:gap-12 desktop:gap-8 items-center">
          <li
            className={`mobile:p-4 hover:mobile:border-l-4 hover:tablet:border-b-4 hover:border-white/30 border-solid py-4 ${activeHome}`}
          >
            <Link href="/">
              <a className="text-white flex gap-2">
                <span
                  aria-hidden="true"
                  className="font-bold tablet:hidden desktop:block"
                >
                  00
                </span>{" "}
                HOME
              </a>
            </Link>
          </li>
          <li
            className={`mobile:p-4 hover:mobile:border-l-4 hover:tablet:border-b-4 hover:border-white/30 border-solid py-4 ${activeDest}`}
          >
            <Link href="/destination">
              <a className="text-white flex gap-2">
                <span
                  aria-hidden="true"
                  className="font-bold tablet:hidden desktop:block"
                >
                  01
                </span>{" "}
                DESTINATION
              </a>
            </Link>
          </li>
          <li
            className={`mobile:p-4 hover:mobile:border-l-4 hover:tablet:border-b-4 hover:border-white/30 border-solid py-4 ${activeCrew}`}
          >
            <Link href="crew">
              <a className="text-white flex gap-2">
                <span
                  aria-hidden="true"
                  className="font-bold tablet:hidden desktop:block"
                >
                  02
                </span>{" "}
                CREW
              </a>
            </Link>
          </li>
          <li
            className={`mobile:p-4 hover:mobile:border-l-4 hover:tablet:border-b-4 hover:border-white/30 border-solid py-4 ${activeTech}`}
          >
            <Link href="/technologies">
              <a className="text-white flex gap-2">
                <span
                  aria-hidden="true"
                  className="font-bold tablet:hidden desktop:block"
                >
                  03
                </span>{" "}
                TECHNOLOGIES
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

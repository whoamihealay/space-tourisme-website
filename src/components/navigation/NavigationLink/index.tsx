import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface INavigationLink {
  prefix?: string;
  name: string;
  link: string;
}

export default function Index({ prefix, name, link }: INavigationLink) {
  const pathname = usePathname();
  const activeStyles =
    pathname === link ? "border-white mobile:border-l-4 tablet:border-b-4" : "";

  return (
    <li
      className={`mobile:p-4 hover:mobile:border-l-4 hover:tablet:border-b-4 hover:border-white/30 border-solid py-4 ${activeStyles}`}
    >
      <Link href={link} className="text-white flex gap-2">
        {prefix && (
          <span
            aria-hidden="true"
            className="font-bold tablet:hidden desktop:block"
          >
            {prefix}
          </span>
        )}
        {name.toUpperCase()}
      </Link>
    </li>
  );
}

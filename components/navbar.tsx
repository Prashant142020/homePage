"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./darkMode";

// Todo: add card component of share link

function NavBar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="z-20 border-b bg-white dark:bg-black md:shadow-none ">
      {/* DESKTOP */}
      <div className="hidden p-2 lg:block mx-16">
        <div className="mx-4 flex items-center justify-between md:mx-auto">
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-semibold">Manu K. Gupta</span>
            </Link>
          </div>
          <div className="flex items-center gap-[20px] text-[16px] xl:gap-[30px]">
            <Link
              href="  publications"
              className="text-lg font-medium hover:underline"
              prefetch={false}
            >
              Publications
            </Link>
            <Link
              href="talks"
              className="text-lg font-medium hover:underline"
              prefetch={false}
            >
              Talks
            </Link>
            <Link
              href="teaching"
              className="text-lg font-medium hover:underline"
              prefetch={false}
            >
              Teaching
            </Link>
            <Link
              href=" team"
              className="text-lg font-medium hover:underline"
              prefetch={false}
            >
              Team
            </Link>
            <Link
              href="bio"
              className="text-lg font-medium hover:underline"
              prefetch={false}
            >
              Bio
            </Link>
            <Link
              href="projects"
              className="text-lg font-medium hover:underline"
              prefetch={false}
            >
              Projects/Misc.
            </Link>
            <Link
              href="diversions"
              className="text-lg font-medium hover:underline"
              prefetch={false}
            >
              Diversions
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={`w-full py-2 shadow-sm lg:hidden ${
          menu ? "bg-white py-2 dark:bg-black" : ""
        } `}
      >
        <div className="mx-4 flex justify-between">
          <div className="flex select-none items-center gap-[50px] text-[16px]">
            <Link href="/">
              <span className="text-xl font-semibold">Manu K. Gupta</span>
            </Link>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="t cursor-pointer text-black animate-in fade-in zoom-in dark:text-white"
                onClick={toggleMenu}
              />
            ) : (
              // <img
              //   src="/menu.svg"
              //   alt="logo"
              //   className="cursor-pointer dark:invert"
              //   onClick={toggleMenu}
              // />
              <div className="flex items-center gap-2">
                <ModeToggle />
                <Menu
                  className="text-black dark:text-white"
                  onClick={toggleMenu}
                />
              </div>
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="mx-4 mt-8 flex flex-col gap-8">
              <Link
                onClick={toggleMenu}
                href="  publications"
                className="text-lg font-medium hover:underline"
                prefetch={false}
              >
                Publications
              </Link>
              <Link
                onClick={toggleMenu}
                href="talks"
                className="text-lg font-medium hover:underline"
                prefetch={false}
              >
                Talks
              </Link>
              <Link
                onClick={toggleMenu}
                href="teaching"
                className="text-lg font-medium hover:underline"
                prefetch={false}
              >
                Teaching
              </Link>
              <Link
                onClick={toggleMenu}
                href=" team"
                className="text-lg font-medium hover:underline"
                prefetch={false}
              >
                Team
              </Link>
              <Link
                onClick={toggleMenu}
                href="bio"
                className="text-lg font-medium hover:underline"
                prefetch={false}
              >
                Bio
              </Link>
              <Link
                onClick={toggleMenu}
                href="projects"
                className="text-lg font-medium hover:underline"
                prefetch={false}
              >
                Projects/Misc.
              </Link>
              <Link
                onClick={toggleMenu}
                href="diversions"
                className="text-lg font-medium hover:underline"
                prefetch={false}
              >
                Diversions
              </Link>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default NavBar;

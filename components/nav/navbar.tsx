"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../common/darkMode";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function NavBar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="z-20 border-b bg-white dark:bg-black md:shadow-none">
      {/* DESKTOP */}
      <div className="mx-16 hidden p-2 lg:block">
        <div className="mx-4 flex items-center justify-between md:mx-auto">
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-semibold">Home</span>
            </Link>
          </div>
          <div className="flex items-center gap-[20px] text-[16px] xl:gap-[30px]">
            <Link
              href="/publications"
              className="text-lg font-medium hover:underline"
            >
              Publications
            </Link>
            <Link href="/talks" className="text-lg font-medium hover:underline">
              Talks
            </Link>
            <p className="text-lg">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-lg">
                      Teaching
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="">
                      <div className="h-24 w-[100px] gap-2 p-3">
                        <p className="hover:bg-gray-100 dark:hover:bg-zinc-800">
                          {" "}
                          <Link href="/teaching">At IITR</Link>
                        </p>

                        <p className="hover:bg-gray-100 dark:hover:bg-zinc-800">
                          {" "}
                          <Link href="/teaching/training">Training</Link>
                        </p>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </p>
            <Link href="/team" className="text-lg font-medium hover:underline">
              Team
            </Link>
            <Link href="/bio" className="text-lg font-medium hover:underline">
              Bio
            </Link>
            <Link
              href="/projects"
              className="text-lg font-medium hover:underline"
            >
              Projects/Misc.
            </Link>
            <Link
              href="/diversions"
              className="text-lg font-medium hover:underline"
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
              <span className="text-xl font-semibold">Home</span>
            </Link>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="t cursor-pointer text-black animate-in fade-in zoom-in dark:text-white"
                onClick={toggleMenu}
              />
            ) : (
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
                href="/publications"
                className="text-lg font-medium hover:underline"
              >
                Publications
              </Link>
              <Link
                onClick={toggleMenu}
                href="/talks"
                className="text-lg font-medium hover:underline"
              >
                Talks
              </Link>
              <div className="text-lg">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger> Teaching </AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-1 space-y-1 text-base font-medium">
                        <p>
                          {" "}
                          <Link onClick={toggleMenu} href="/teaching">
                            At IITR
                          </Link>
                        </p>
                        <div>
                          <Link onClick={toggleMenu} href="/teaching/training">
                            Training
                          </Link>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <Link
                onClick={toggleMenu}
                href="/team"
                className="text-lg font-medium hover:underline"
              >
                Team
              </Link>
              <Link
                onClick={toggleMenu}
                href="/bio"
                className="text-lg font-medium hover:underline"
              >
                Bio
              </Link>
              <Link
                onClick={toggleMenu}
                href="/projects"
                className="text-lg font-medium hover:underline"
              >
                Projects/Misc.
              </Link>
              <Link
                onClick={toggleMenu}
                href="/diversions"
                className="text-lg font-medium hover:underline"
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

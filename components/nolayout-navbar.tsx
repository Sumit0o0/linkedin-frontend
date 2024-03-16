"use client";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { ThemeSwitch } from "@/components/theme-switch";

export default function Navbar() {
  return (
    <header className="border-b-2 px-2">
      <div className="containerAuto py-2 flex justify-between">
        <div className="">
          <a href="/">
            <p className="font-extrabold text-inherit text-5xl pb-1">INTACT</p>
          </a>
        </div>
        <div className="flex items-center">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}

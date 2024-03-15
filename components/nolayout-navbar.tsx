"use client";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function Navbar() {
  return (
    <header className="border-b-2">
      <div className="containerAuto py-2">
        <div className="">
          <a href="/">
            <p className="font-extrabold text-inherit text-5xl pb-1">INTACT</p>
          </a>
        </div>
      </div>
    </header>
  );
}

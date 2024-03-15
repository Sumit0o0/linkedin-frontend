"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import Link from "next/link";
import { Link as NextLink } from "@nextui-org/link";
import { HiMiniHome } from "react-icons/hi2";
import { IoMdPeople } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa6";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { Button } from "@nextui-org/button";
import { usePathname } from "next/navigation";

export default function NavTab() {
  const pathname = usePathname().split("/")[1];
  return (
    <div className="flex justify-between gap-4 py-1 bg-zinc-100 dark:bg-zinc-800">
      <div className="containerAuto block md:flex justify-between">
        <div className="flex items-center justify-center">
          <Tabs
            variant="underlined"
            aria-label="Tabs variants"
            selectedKey={pathname || "feed"}>
            <Tab
              key="feed"
              className="p-0"
              title={
                <Link
                  className="flex px-1 py-2 md:px-2 gap-1 items-center justify-center"
                  href="/feed">
                  <HiMiniHome size={20} />
                  <span className="font-semibold">Home</span>
                </Link>
              }
            />
            <Tab
              key="jobs"
              className="p-0"
              title={
                <Link
                  className="flex px-1 py-2 md:px-2 gap-1 items-center justify-center"
                  href="/jobs">
                  <FaBriefcase size={18} />
                  <span className="font-semibold">Jobs</span>
                </Link>
              }
            />
            <Tab
              key="network"
              className="p-0"
              title={
                <Link
                  className="flex px-1 py-2 md:px-2 gap-1 items-center justify-center"
                  href="/network">
                  <IoMdPeople size={22} />
                  <span className="font-semibold">Network</span>
                </Link>
              }
            />
            <Tab
              key="message"
              className="p-0"
              title={
                <Link
                  className="flex px-1 py-2 md:px-2 gap-1 items-center justify-center"
                  href="/message">
                  <HiChatBubbleLeftRight size={20} />
                  <span className="font-semibold">Messaging</span>
                </Link>
              }
            />
          </Tabs>
        </div>
        <div className="flex justify-center items-center px-3">
          <Button variant="light">
            <NextLink className="font-semibold" href="#">
              Try premium for free
            </NextLink>
          </Button>
        </div>
      </div>
    </div>
  );
}

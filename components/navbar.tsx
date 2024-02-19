"use client";
import React from "react";
import { Avatar } from "@nextui-org/avatar";

import { Input } from "@nextui-org/input";

import { Link } from "@nextui-org/link";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { SearchIcon } from "@/components/icons";

import { Logo } from "@/components/icons";
import { Button } from "@nextui-org/button";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "rounded-md border py-0 w-full md:w-96",
        input: "text-sm rounded-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar
      maxWidth="xl"
      className="shadow-sm shadow-default-200"
      position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <a href="/">
            <p className="font-extrabold text-inherit text-5xl pb-1">IN</p>
          </a>
        </NavbarBrand>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/4 sm:basis-full"
        justify="end">
        <NavbarItem className="hidden sm:block gap-2 group">
          <Link href="#" className="block text-current">
            <IoIosNotificationsOutline
              className="mx-auto group-hover:animate-bell group-hover:text-primary-400"
              size={22}
            />
            <p>Notifications</p>
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:block gap-2 group">
          <Link href="#" className="block text-current">
            <TbGridDots
              className="mx-auto group-hover:text-primary-400"
              size={22}
            />
            <p>Workspace</p>
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:block gap-2 group">
          <Dropdown className="rounded-md" placement="bottom-end">
            <DropdownTrigger>
              <div className="cursor-pointer">
                <Avatar
                  isBordered
                  as="button"
                  className="w-6 h-6 transition-transform mx-auto"
                  src="https://i.pravatar.cc/300"
                />
                <p>Profile</p>
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem className="rounded-md text-lg">
                Profile
              </DropdownItem>
              <DropdownItem className="rounded-md text-lg">
                Accounts
              </DropdownItem>
              <DropdownItem className="rounded-md text-lg">
                Billing
              </DropdownItem>
              <DropdownItem className="rounded-md text-lg">
                Company
              </DropdownItem>
              <DropdownItem className="rounded-md text-lg">
                <Button className="w-full bg-danger-100 rounded-md">
                  Logout
                </Button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

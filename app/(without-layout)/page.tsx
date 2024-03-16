"use client";
import React from "react";
import { bowlbyOneSc } from "@/config/fonts";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import Form from "@/components/ui/signup/form";
import Link from "next/link";
export default function Home() {
  return (
    <section className="">
      <section className="containerAuto my-6 p-3 md:p-0">
        <div className="grid grid-cols-12 mb-12">
          <div className="col-span-12 md:col-span-6 order-2 md:order-1">
            <h1
              className={`${bowlbyOneSc.className} text-5xl text-primary-500`}>
              Discover and Expand your Network
            </h1>
            <div className="max-w-sm mt-6">
              <Form />
              <p className="text-primary-500 text-center mt-3">
                <Link href="/signin">Have an account? Sign in</Link>
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 order-1 md:order-2">
            <Image src="/home_illustration.png" alt="image" />
          </div>
        </div>
        <div className="mb-12">
          <h1
            className={`${bowlbyOneSc.className} text-2xl text-primary-500 text-center`}>
            Explore the world and Intact with people
          </h1>
          <div className="gap-6 grid grid-cols-12 grid-rows-2 mt-4">
            <Card className="w-full h-[300px] col-span-12 sm:col-span-7 bg-gradient-to-br from-primary-500 to-primary-300">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-current uppercase font-bold">
                  Your day your way
                </p>
                <h4 className="text-current font-medium text-xl">
                  Your checklist for better sleep
                </h4>
              </CardHeader>
            </Card>
            <Card className="w-full h-[300px] col-span-12 sm:col-span-5 bg-gradient-to-br from-primary-500 to-primary-300">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-current uppercase font-bold">
                  New
                </p>
                <h4 className="text-current font-medium text-2xl">
                  Acme camera
                </h4>
              </CardHeader>
            </Card>
            <Card className="w-full h-[300px] col-span-12 sm:col-span-5 bg-gradient-to-br from-primary-500 to-primary-300">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-current uppercase font-bold">
                  New
                </p>
                <h4 className="text-current font-medium text-2xl">
                  Acme camera
                </h4>
              </CardHeader>
            </Card>
            <Card className="w-full h-[300px] col-span-12 sm:col-span-7 bg-gradient-to-br from-primary-500 to-primary-300">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-current uppercase font-bold">
                  Your day your way
                </p>
                <h4 className="text-current font-medium text-xl">
                  Your checklist for better sleep
                </h4>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </section>
  );
}

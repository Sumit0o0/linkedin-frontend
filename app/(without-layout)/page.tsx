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
const illustraion = "/home_illustration.png";
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
            <Image src="images/home_illustration.png" alt="image" isBlurred />
          </div>
        </div>
        <div className="mb-12">
          <h1
            className={`${bowlbyOneSc.className} text-2xl text-primary-500 text-center`}>
            Explore the world and Intact with people
          </h1>
          <div className="gap-6 grid grid-cols-12 grid-rows-2 mt-4">
            <Card className="w-full h-[300px] col-span-12 sm:col-span-7 bg-gradient-to-br from-foreground-50 to-foreground-100">
              <CardBody className="flex justify-center items-center">
                <p className={`${bowlbyOneSc.className} text-3xl`}>
                  Search and Post Jobs
                </p>
              </CardBody>
            </Card>
            <Card className="w-full h-[300px] col-span-12 sm:col-span-5 bg-gradient-to-br from-foreground-50 to-foreground-100">
              <CardBody className="flex justify-center items-center">
                <p className={`${bowlbyOneSc.className} text-3xl`}>
                  Intact with People
                </p>
              </CardBody>
            </Card>
            <Card className="w-full h-[300px] col-span-12 sm:col-span-5 bg-gradient-to-br from-foreground-50 to-foreground-100">
              <CardBody className="flex justify-center items-center">
                <p className={`${bowlbyOneSc.className} text-3xl`}>
                  Show your talent
                </p>
              </CardBody>
            </Card>
            <Card className="w-full h-[300px] col-span-12 sm:col-span-7 bg-gradient-to-br from-foreground-50 to-foreground-100">
              <CardBody className="flex justify-center items-center">
                <p className={`${bowlbyOneSc.className} text-3xl`}>
                  Professional Carrier with Intact
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
        <div>
          <h1
            className={`${bowlbyOneSc.className} text-2xl text-primary-500 text-center`}></h1>
        </div>
      </section>
    </section>
  );
}

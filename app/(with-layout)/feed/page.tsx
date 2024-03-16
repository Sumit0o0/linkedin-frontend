"use client";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { IoMdPhotos } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { BsPlayBtnFill } from "react-icons/bs";
import { IoCalendarNumber } from "react-icons/io5";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { RiPagesFill } from "react-icons/ri";
import Link from "next/link";
import React from "react";
import Post from "@/components/ui/home/Post";
import post from "@/utils/feed.json";
import Footer from "@/components/Footer";

export default function Feed() {
  const [isSM, setIsSM] = React.useState<boolean>(false);
  const handleShowMore = () => {
    setIsSM(!isSM);
  };

  return (
    <section className="">
      <section className="containerAuto my-6">
        <div className="grid grid-cols-12 gap-6 px-2">
          <div className="md:order-last hidden md:block col-span-12 md:col-span-3 border rounded-md h-fit p-4">
            <h2 className="font-bold text-xl">Following</h2>
            <div className="py-6">
              <Button className="rounded-md w-full mb-3">People</Button>
              <Button className="rounded-md w-full mb-3">Groups</Button>
              <Button className="rounded-md w-full mb-3">Events</Button>
            </div>
            <Divider className="my-2" />
            <Footer />
          </div>
          <div className="order-1 md:order-2 col-span-12 md:col-span-6">
            <div className=" flex gap-2 my-4 md:my-0">
              <div className="profile-photo">
                <Link href="#">
                  <Avatar isBordered src="https://i.pravatar.cc/300" />
                </Link>
              </div>
              <div className="w-full">
                <div className="flex w-full">
                  <Button
                    className="rounded-md w-full justify-start py-2 md:py-3 lg:py-4"
                    variant="bordered">
                    Start a post
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap justify-between my-2">
              <Button
                className="rounded-md w-1/5.5 px-1 hover:border-red-500"
                variant="bordered"
                aria-label="photos"
                startContent={<IoMdPhotos />}>
                Photos
              </Button>
              <Button
                className="rounded-md w-1/5.5 px-1 hover:border-red-500"
                variant="bordered"
                aria-label="videos"
                startContent={<BsPlayBtnFill />}>
                Videos
              </Button>
              <Button
                className="rounded-md w-1/5.5 px-1 hover:border-red-500"
                variant="bordered"
                aria-label="event"
                startContent={<IoCalendarNumber />}>
                Event
              </Button>
              <Button
                className="rounded-md w-1/5.5   px-1 hover:border-red-500"
                variant="bordered"
                aria-label="article"
                startContent={<RiPagesFill />}>
                Article
              </Button>
            </div>
            <section className="my-6">
              <Divider className="my-2 " />
              <div>
                {post.map((post, index) => (
                  <Post
                    key={index}
                    id={post.id + index}
                    avatar={post.avatar}
                    name={post.name}
                    title={post.title}
                    context={post.context}
                    likes={post.likes}
                    dislikes={post.dislikes}
                    comments={post.comments}
                    image={post.image}
                    date={post.date}
                  />
                ))}
              </div>
            </section>
          </div>
          <div className="md:order-1 col-span-12 md:col-span-3">
            <div className="border rounded-md">
              <div className="relative">
                <div className="w-full h-40 rounded-md">
                  <img
                    src="https://i.pravatar.cc/300"
                    className="w-full h-full rounded-md object-cover"
                  />
                </div>
                <Link href="#">
                  <Avatar
                    className="absolute -bottom-8 left-10 border-3 border-white w-16 h-16"
                    src="https://i.pravatar.cc/300"
                  />
                </Link>
              </div>
              <div
                className={`mx-2 md:mx-5 lg:mx-8 ${
                  isSM ? "block" : "hidden"
                } md:block`}>
                <div className="mt-10">
                  <Link href="#">
                    <h2 className="font-bold text-lg hover:underline">
                      Fanklin Chen
                    </h2>
                  </Link>
                  <p className="text-gray-600">Software Engineer & Developer</p>
                </div>
                <Divider className="my-5" />
                <div>
                  <div className="flex mb-2 justify-between">
                    Who viewed your profile{" "}
                    <Link className="text-blue-500" href="#">
                      64
                    </Link>
                  </div>
                  <div className="flex mb-2 justify-between">
                    Impressions{" "}
                    <Link className="text-blue-500" href="#">
                      128
                    </Link>
                  </div>
                  <Button
                    className="w-full my-5 rounded-md font-bold dark:text-white border"
                    color="warning">
                    Try Premium for free
                  </Button>
                  <div>
                    <Link
                      className="flex justify-center items-center w-fit hover:text-blue-500 transition-colors"
                      href="#">
                      <CiBookmark size={20} />
                      <span className="ml-2">Bookmark</span>
                    </Link>
                  </div>
                </div>
                <Divider className="my-5" />
                <div>
                  <h2 className="font-bold text-xl">Explore</h2>
                  <div className="my-4">
                    <h5 className="font-bold mb-2">Recent</h5>
                    <ul className="text-default-500">
                      <li className="py-1">
                        <span className="mr-2 font-semibold tag">#</span>
                        <Link className="hover:underline" href="#">
                          UI/UX Design
                        </Link>
                      </li>
                      <li className="py-1">
                        <span className="mr-2 font-semibold tag">#</span>
                        <Link className="hover:underline" href="#">
                          Web Development
                        </Link>
                      </li>
                      <li className="py-1">
                        <span className="mr-2 font-semibold tag">#</span>
                        <Link className="hover:underline" href="#">
                          Jobs for Freelancers
                        </Link>
                      </li>
                      <li className="py-1">
                        <span className="mr-2 font-semibold tag">#</span>
                        <Link className="hover:underline" href="#">
                          Designer & Developer
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="my-4">
                    <h5 className="font-bold mb-2">Groups</h5>
                    <ul className="text-default-500">
                      <li className="py-1">
                        <span className="mr-2 font-semibold tag">#</span>
                        <Link className="hover:underline" href="#">
                          Desinger Talk: UI/UX Design
                        </Link>
                      </li>
                      <li className="py-1">
                        <span className="mr-2 font-semibold tag">#</span>
                        <Link className="hover:underline" href="#">
                          UI/UX Inspiration
                        </Link>
                      </li>
                      <li className="py-1">
                        <span className="mr-2 font-semibold tag">#</span>
                        <Link className="hover:underline" href="#">
                          User Experience Design
                        </Link>
                      </li>
                    </ul>
                    <Button
                      className="w-full mt-2 rounded-md font-bold bg-opacity-25 border"
                      variant="light">
                      <Link href="#">View all</Link>
                    </Button>
                  </div>
                  <div className="my-4">
                    <h5 className="font-bold mb-2">Followed Hashtags</h5>
                    <ul className="text-default-500">
                      <li className="py-1">
                        <span className="mr-2 font-semibold tag">#</span>
                        <Link className="hover:underline" href="#">
                          Dribble Inspiration
                        </Link>
                      </li>
                      <li className="py-1">
                        <span className="mr-2 font-semibold tag">#</span>
                        <Link className="hover:underline" href="#">
                          UI/UX Inspiration
                        </Link>
                      </li>
                      <li className="py-1">
                        <span className="mr-2 font-semibold tag">#</span>
                        <Link className="hover:underline" href="#">
                          Web Design Inspiration
                        </Link>
                      </li>
                    </ul>
                    <Button
                      className="w-full mt-2 rounded-md font-bold bg-opacity-25 border"
                      variant="light">
                      <Link href="#">View all</Link>
                    </Button>
                  </div>
                </div>
              </div>
              <Button
                onClick={handleShowMore}
                className={`col-span-12 rounded-md w-full mt-10 block md:hidden rounded-t-none bg-gray-100 dark:bg-zinc-900`}
                variant="solid">
                <span className="flex gap-1 w-fit justify-center items-center mx-auto">
                  {isSM ? (
                    <FaAngleUp className="mt-1" />
                  ) : (
                    <FaAngleDown className="mt-1" />
                  )}
                  Show more
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

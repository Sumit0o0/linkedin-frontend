"use client";
import React, { Suspense, useEffect } from "react";
import { Avatar } from "@nextui-org/avatar";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
import { GoThumbsup, GoThumbsdown } from "react-icons/go";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaShare } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Button } from "@nextui-org/button";
import { Image, Skeleton } from "@nextui-org/react";

type Props = {
  id: number;
  avatar: string;
  name: string;
  title: string;
  context?: string;
  likes: number;
  dislikes: number;
  comments: number;
  image?: string;
  date?: string;
};

export default function Post({
  id,
  avatar,
  name,
  title,
  context,
  likes,
  dislikes,
  comments,
  image,
  date,
}: Props) {
  return (
    <>
      <div className="my-6">
        <div className="flex gap-3">
          <Link href="#">
            <Avatar src={avatar} />
          </Link>
          <div>
            <Link href="#" className="text-current font-medium text-lg">
              {name}
            </Link>
            <span className="block">{title}</span>
            <span className="block text-sm text-foreground-500">{date}</span>
          </div>
        </div>
        <div className="context my-4">
          <Link className="text-current" href={`/feed/${id}`}>
            {context}
          </Link>
        </div>
        <div className="media bg-foreground-100">
          <Link href={`/feed/${id}`} className="w-full">
            <Image
              src={image}
              loading="lazy"
              radius="lg"
              isBlurred
              className="rounded-none"
              classNames={{
                img: "",
                wrapper: "flex max-h-[450px] mx-auto bg-foreground-500",
              }}
              alt={title}
            />
          </Link>
        </div>
        <div className="flex justify-between mt-3 p-1">
          <div className="">
            <Button variant="light" startContent={<GoThumbsup size={20} />}>
              {likes || 0}
            </Button>
            <Button variant="light" startContent={<GoThumbsdown size={20} />}>
              {dislikes || 0}
            </Button>
            <Button
              variant="light"
              startContent={<IoChatbubblesOutline size={20} />}>
              {comments || 0}
            </Button>
          </div>
          <div>
            <Button variant="light" startContent={<FaShare size={20} />} />
            <Button variant="light" startContent={<FiSend size={20} />} />
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}

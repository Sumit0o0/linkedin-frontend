"use client";
import { Avatar } from "@nextui-org/avatar";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
import { GoThumbsup, GoThumbsdown } from "react-icons/go";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaShare } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Button } from "@nextui-org/button";
import { Image, Skeleton } from "@nextui-org/react";
import { Suspense } from "react";

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
    <section>
      <div className="p-4">
        <Link href={`/post/${id}`} className="block text-current">
          <div className="flex gap-3">
            <Link className="mt-0 mb-auto" href="#">
              <Avatar src={avatar} alt="photo" />
            </Link>
            <div>
              <Link className="font-bold text-current" href="#">
                {name}
              </Link>
              <p className="text-zinc-500">{title}</p>
              <p className="text-sm">{date}</p>
            </div>
          </div>
          <div className="context my-4">{context}</div>
          <div className="media  rounded-md">
            <Suspense
              fallback={
                <Skeleton className="rounded-lg">
                  <div className="w-[400px] h-[400px] rounded-lg bg-default-300"></div>
                </Skeleton>
              }>
              <Image
                src={image}
                isBlurred
                loading="lazy"
                radius="lg"
                width={600}
                height={400}
                className="bg-red-100 object-cover overflow-hidden "
                alt={title}
              />
            </Suspense>
          </div>
          <div className="post-actions my-2">
            <div className="flex justify-between">
              <div className="">
                <Button variant="light" startContent={<GoThumbsup size={20} />}>
                  {likes || 0}
                </Button>
                <Button
                  variant="light"
                  startContent={<GoThumbsdown size={20} />}>
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
        </Link>
      </div>
      <Divider className="my-4" />
    </section>
  );
}

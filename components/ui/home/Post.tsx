import { Avatar } from "@nextui-org/avatar";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
import { GoThumbsup, GoThumbsdown } from "react-icons/go";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaShare } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Button } from "@nextui-org/button";

export default function Post() {
  return (
    <section>
      <div className="p-4">
        <div className="flex gap-3">
          <Link className="mt-0 mb-auto" href="#">
            <Avatar src="https://i.pravatar.cc/300" />
          </Link>
          <div>
            <Link className="font-bold text-current" href="#">
              John Doe
            </Link>
            <p className="text-zinc-500">Senior Frontend Developer</p>
            <p className="text-sm">2 hours ago</p>
          </div>
        </div>
        <div className="context my-4">
          Hey there, fellow digital adventurers!
          <br />
          <br />
          I'm John and I'm a senior frontend developer. and Here is my new app
          that I am working on. I'm John and I'm a senior frontend developer.
          and Here is my new app that I am working on.
          <br />
          <br />
          Dribble:{" "}
          <a target="_blank" className="text-blue-500" href="#">
            https://dribble.com/johndoe
          </a>
          <br />
        </div>
        <div className="media max-w-full rounded-md">
          <img
            className="w-full h-auto"
            src="https://cdn.dribbble.com/userupload/13081416/file/original-af7d46897c86fdd56bc4686d75d208e6.png?resize=1504x1128"
            alt="Post Media"
          />
        </div>
        <div className="post-actions my-2">
          <div className="flex justify-between">
            <div className="">
              <Button variant="light" startContent={<GoThumbsup size={20} />}>
                121
              </Button>
              <Button variant="light" startContent={<GoThumbsdown size={20} />}>
                121
              </Button>
              <Button
                variant="light"
                startContent={<IoChatbubblesOutline size={20} />}>
                18
              </Button>
            </div>
            <div>
              <Button variant="light" startContent={<FaShare size={20} />} />
              <Button variant="light" startContent={<FiSend size={20} />} />
            </div>
          </div>
        </div>
      </div>
      <Divider className="my-4" />
    </section>
  );
}

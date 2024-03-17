import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { FaLocationArrow } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { Image, Tooltip } from "@nextui-org/react";
import { IoPersonAdd, IoAdd } from "react-icons/io5";
export default function Profile() {
  return (
    <section>
      <div className="containerAuto my-6">
        <div className="grid grid-cols-12 gap-6 px-2">
          <div className="order-last lg:order-first col-span-12 lg:col-span-9 p-4 border rounded-lg h-fit">
            <div>
              <div className="relative w-full h-48  mb-16 rounded-lg">
                <Image
                  className="w-full h-full object-cover rounded-lg"
                  src="https://i.pravatar.cc/300"
                />
                <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2">
                  <Avatar
                    className="h-32 w-32 border-4 border-content1"
                    src="https://i.pravatar.cc/300"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold">Fanklin Chen</h1>
                  <p className="text-zinc-400">Software Engineer & Developer</p>
                  <div>
                    <p className="flex items-center gap-1">
                      <FaLocationArrow className="mt-1" size={14} />
                      <span> Jakarta, Indonesia</span>
                    </p>
                    <div></div>
                    <Link className="mt-2 text-sm font-bold" href="/">
                      542 Intacts
                    </Link>
                  </div>
                </div>
                <div>
                  <Tooltip content="Edit Profile">
                    <Button className="min-w-fit rounded-md" variant="light">
                      <MdEdit size={18} />
                    </Button>
                  </Tooltip>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant="bordered"
                  className="rounded-md"
                  startContent={<IoPersonAdd />}>
                  Intact
                </Button>
                <Button size="sm" variant="bordered" className="rounded-md">
                  Message
                </Button>
                <Button
                  size="sm"
                  variant="bordered"
                  className="rounded-md"
                  startContent={<IoAdd />}>
                  Follow
                </Button>
              </div>
            </div>
          </div>
          <div className="order-first lg:order-last col-span-12 lg:col-span-3 p-4 border rounded-md h-fit">
            <div className="mt-4"></div>
            <div className="mt-4">
              <h1 className="text-xl font-bold">About</h1>
              <p className="text-zinc-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, corrupti! Dolores dignissimos tempora ea dicta
                molestias quod a cum optio?
              </p>
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-bold">Contacts</h1>
              <div className="mt-2">
                <p className="mb-1">Email: thatsall@example.com</p>
                <p className="mb-1">Phone: +6281234567890</p>
                <p className="mb-1">Website: https://fanklinchen.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

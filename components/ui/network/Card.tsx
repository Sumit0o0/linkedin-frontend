import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { IoMdPersonAdd } from "react-icons/io";
import Link from "next/link";
import { Image } from "@nextui-org/react";

export default function Card() {
  return (
    <section className="min-w-[275px] lg:min-w-[215px]  max-w-sm border rounded-lg p-4">
      <div className="mx-auto text-center mb-4">
        <div className="relative mb-14">
          <div className="h-24">
            <Avatar
              className="w-full h-full object-cover rounded-lg"
              src="https://i.pravatar.cc/300"
              alt="profile"
            />
          </div>
          <Link
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 "
            href="#">
            <Avatar
              className="mx-auto w-24 h-24 border-4"
              src="https://i.pravatar.cc/300"
            />
          </Link>
        </div>
        <div className="">
          <Link href="#">
            <h4 className="font-semibold">John Doe</h4>
            <p className="text-zinc-500">Software Developer</p>
          </Link>
        </div>
      </div>
      <div className="px-2 py-1">
        <Button
          className="rounded-lg font-semibold w-full"
          variant="bordered"
          startContent={<IoMdPersonAdd size={16} />}>
          Intact
        </Button>
      </div>
    </section>
  );
}

import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";

export default function User() {
  return (
    <li>
      <Link
        className="flex gap-2 dark:hover:bg-zinc-900 p-2 hover:bg-gray-100 active:bg-gray-200"
        href="#">
        <Avatar src="https://i.pravatar.cc/300" />
        <div>
          <div className="flex justify-between">
            <p className="font-bold truncate ">Sumit Singh</p>
            <span className="text-xs font-bold">Feb 20</span>
          </div>
          <p className="truncate text-sm max-w-xxs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            delectus.
          </p>
        </div>
      </Link>
    </li>
  );
}

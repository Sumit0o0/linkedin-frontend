import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { LuSettings2 } from "react-icons/lu";
import { BsSendPlusFill } from "react-icons/bs";
import User from "@/components/ui/message/User";
import ChatBox from "@/components/ui/message/ChatBox";

export default function Message() {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "rounded-md border py-0 w-full md:w-80",
        input: "text-sm rounded-sm",
      }}
      size="sm"
      labelPlacement="outside"
      placeholder="Search..."
      type="search"
    />
  );
  return (
    <section className="px-2">
      <div className="containerAuto my-6 border rounded-lg">
        <div className="">
          <div className="flex justify-between items-center border-b p-2">
            <div className="flex gap-x-2 items-center">
              <h2 className="text-lg font-bold">Messaging</h2>
              {searchInput}
            </div>
            <div>
              <Button className="px-0" variant="light" size="sm">
                <LuSettings2 size={18} />
              </Button>
              <Button className="px-0" variant="light" size="sm">
                <BsSendPlusFill size={18} />
              </Button>
            </div>
          </div>
          <div className="flex gap-x-3  items-center border-b py-1 px-2">
            <Button
              variant="faded"
              className="rounded-md font-semibold"
              size="sm">
              Unread
            </Button>
            <Button
              variant="faded"
              className="rounded-md font-semibold"
              size="sm">
              Starred
            </Button>
            <Button
              variant="faded"
              className="rounded-md font-semibold"
              size="sm">
              Spam
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-12 h-[450px]">
          <div className="col-span-12 lg:col-span-3 p-2">
            <div>
              <ul className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <User key={i} />
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-9 bg-gray-50 dark:bg-zinc-900 relative">
            <div className="absolute bottom-0 right-0 left-0">
              <ChatBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

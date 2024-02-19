"use client";
import { Button } from "@nextui-org/button";
import { Textarea, Input } from "@nextui-org/input";
import React from "react";
import { FiPaperclip } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { GrEmoji } from "react-icons/gr";

export default function ChatBox() {
  const chatFile = React.useRef<HTMLInputElement>(null);

  const handleFile = () => {
    if (!chatFile.current) return;
    chatFile.current.click();
  };
  return (
    <div className="flex gap-1 border dark:border-zinc-800 p-1 rounded-b-lg">
      <Button
        onClick={handleFile}
        className="rounded min-w-fit px-4 py-5"
        variant="light"
        size="sm">
        <FiPaperclip size={18} />
        <input name="file" ref={chatFile} type="file" className="hidden" />
      </Button>
      <div className="">
        <Button
          className="rounded min-w-fit px-4 py-5"
          variant="light"
          size="sm">
          <GrEmoji size={18} />
        </Button>
      </div>
      <Textarea
        aria-label="Message"
        placeholder="Message"
        classNames={{
          inputWrapper: "w-full rounded bg-transparent",
          input: "w-full ",
        }}
        variant="flat"
        maxRows={3}
        minRows={1}
      />
      <Button className="rounded min-w-fit px-4 py-5" variant="light" size="sm">
        <IoIosSend size={18} />
      </Button>
    </div>
  );
}

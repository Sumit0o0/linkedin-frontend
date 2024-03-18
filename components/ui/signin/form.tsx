"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@nextui-org/input";
import { PasswordRegex, emailRegex } from "@/types/form";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { signInWithEmail, google, github } from "@/firebase/auth";
import { useRouter } from "next/navigation";

type Inputs = {
  email: string;
  password: string;
};

export default function Form({ className }: { className?: string }) {
  const router = useRouter();
  const [show, setShow] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => router.push("/feed");

  function handleShow() {
    setShow(!show);
  }

  return (
    <section className={className}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <Input
            size="sm"
            label="Email"
            classNames={{
              inputWrapper: `border-2 rounded-md ${
                errors.email ? "border-red-500 border-s-4" : "border-s-2"
              }`,
              input: "font-semibold",
            }}
            variant="bordered"
            {...register("email", {
              required: true,
              pattern: emailRegex,
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm font-semibold">Invalid email</p>
          )}
        </div>
        <div className="mb-3">
          <div className="relative">
            <Input
              size="sm"
              label="Password"
              classNames={{
                inputWrapper: `border-2 rounded-md ${
                  errors.password ? "border-red-500 border-s-4" : "border-s-2"
                }`,
                input: "pe-12 font-semibold",
              }}
              variant="bordered"
              {...register("password", {
                required: true,
              })}
              type={show ? "password" : "text"}
            />
            <Button
              className="min-w-fit absolute rounded-full p-3 right-2 top-1/2 transform -translate-y-1/2"
              variant="light"
              onClick={handleShow}>
              {show ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
            </Button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm font-semibold">
              Password is required
            </p>
          )}
        </div>
        <div>
          <Button className="w-full rounded-md" variant="shadow" type="submit">
            Sign In
          </Button>
        </div>
      </form>
      <Divider className="my-8" />
      <div className="mb-3">
        <Button
          className="rounded-md w-full"
          color="primary"
          variant="bordered"
          onClick={() => router.push("/feed")}
          startContent={<FaGoogle size={20} />}>
          Countinue with Google
        </Button>
      </div>
      <div>
        <Button
          className="rounded-md w-full"
          color="default"
          variant="bordered"
          onClick={() => router.push("/feed")}
          startContent={<FaGithub size={20} />}>
          Countinue with Github
        </Button>
      </div>
    </section>
  );
}

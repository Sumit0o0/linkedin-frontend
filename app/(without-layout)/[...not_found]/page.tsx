import Link from "next/link";
import { bowlbyOneSc } from "@/config/fonts";
import { TbBrandGoogleHome } from "react-icons/tb";

export default function NotFound() {
  return (
    <div
      className={`flex flex-col items-center justify-center my-auto h-[75vh] text-center ${bowlbyOneSc.className}`}>
      <section>
        <h2 className="text-8xl">Page Not Found</h2>
        <p className="my-4">Could not find requested resource ( 404 )</p>
        <Link className="text-blue-500 hover:text-current underline" href="/">
          <span className="flex items-center justify-center gap-2">
            <TbBrandGoogleHome />
            Return Home
          </span>
        </Link>
      </section>
    </div>
  );
}

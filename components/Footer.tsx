import Link from "next/link";
import { Divider } from "@nextui-org/divider";
export default function Footer() {
  return (
    <footer className="py-2">
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="#">About</Link>
        <Link href="#">Help</Link>
        <Link href="#">Press</Link>
        <Link href="#">API</Link>
        <Link href="#">Jobs</Link>
        <Link href="#">Privacy</Link>
        <Link href="#">Terms</Link>
        <Link href="#">Locations</Link>
        <Link href="#">Top Accounts</Link>
        <Link href="#">Hashtags</Link>
        <Link href="#">Language</Link>
        <Link href="#">Ads</Link>
        <Link href="#">Business services</Link>
        <Link href="#">Developers</Link>
      </div>
      <Divider className="my-2" />
      <div className="mt-6 text-center">
        <span className="font-bold pe-1 me-1 border-e-2 border-current">
          INTACT
        </span>
        Intact Corporation © {new Date().getFullYear()}
      </div>
    </footer>
  );
}

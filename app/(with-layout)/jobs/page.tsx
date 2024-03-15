"use client";
import Footer from "@/components/Footer";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { FaBriefcase } from "react-icons/fa6";

export default function Jobs() {
  return (
    <section className="my-6">
      <div className="containerAuto grid grid-cols-12 gap-6 px-2">
        <div className="col-span-12 md:col-span-3">
          <div className="border rounded-md p-4 mb-4">
            <Link
              className="block py-1 mb-2 text-current font-semibold hover:text-blue-400 transtiion-all"
              href="#">
              My Jobs
            </Link>
            <Link
              className="block py-1 mb-2 text-current font-semibold hover:text-blue-400 transtiion-all"
              href="#">
              Preferences
            </Link>
            <Link
              className="block py-1 mb-2 text-current font-semibold hover:text-blue-400 transtiion-all"
              href="#">
              Applied
            </Link>
            <Link
              className="block py-1 mb-2 text-current font-semibold hover:text-blue-400 transtiion-all"
              href="#">
              Application Setting
            </Link>
          </div>
          <Button className="rounded-md w-full" variant="bordered">
            <Link href="#">Post a Job</Link>
          </Button>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="border rounded-md p-6 mb-4">
            <div>
              <h2 className="font-bold text-lg">Recommended Jobs For You</h2>
              <p className="text-zinc-500">
                Based on your profile, preferences and Search History
              </p>
            </div>
            <p className="text-center mt-3 font-semibold text-zinc-600">
              No jobs found!
            </p>
            <div className="border rounded-md p-4 flex justify-center items-center mt-4">
              <div>
                <FaBriefcase
                  className="mx-auto text-orange-400 mb-3"
                  size={52}
                />
                <p className="mb-3">Click the button below to search</p>
                <Button
                  className="rounded-md font-semibold mb-3 flex mx-auto"
                  color="primary">
                  Search jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <div className="border rounded-md p-4 mb-4">
            <h2 className="font-bold text-xl">Recent Jobs</h2>
            <div className="my-4">
              <Link className="py-1 mb-1 text-current " href="#">
                Software Developer
              </Link>
              <Link className="py-1 mb-1 text-current " href="#">
                Frontend Engineer
              </Link>
              <Link className="py-1 mb-1 text-current " href="#">
                Full Stack Developer
              </Link>
              <Link className="py-1 mb-1 text-current " href="#">
                Backend Developer
              </Link>
            </div>
          </div>
          <div className="px-4">
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
}

import Card from "@/components/ui/network/Card";
import { Button } from "@nextui-org/button";

export default function Network() {
  return (
    <section>
      <div className="containerAuto my-6 grid grid-cols-12 gap-6 px-2">
        <div className="col-span-12 lg:col-span-3 p-4 border rounded-md h-fit">
          <h1 className="text-xl font-bold">My Networks</h1>
        </div>
        <div className="col-span-12 lg:col-span-9 rounded-md">
          <div className="border rounded-md p-3 mb-4">
            <div className="flex justify-between items-center">
              <p className="font-semibold">No Pending Requests</p>
              <Button
                className="rounded font-semibold"
                size="sm"
                variant="light">
                Manage
              </Button>
            </div>
          </div>
          <div className=" border rounded-md p-3 mb-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <section key={i} className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <p>People you may know in your area</p>
                  <Button
                    className="rounded font-semibold"
                    size="sm"
                    variant="light">
                    See All
                  </Button>
                </div>
                <div className="flex flex-wrap  gap-4 justify-evenly">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <Card key={index} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

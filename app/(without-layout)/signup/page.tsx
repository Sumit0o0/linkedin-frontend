import Form from "@/components/ui/signup/form";

export default function SignUp() {
  return (
    <section className="containerAuto my-6 p-2">
      <div className="max-w-sm mx-auto">
        <h1 className="text-3xl mb-4">Lets get started</h1>
        <div className=" flex rounded-lg border px-4 py-8">
          <Form className="w-full" />
        </div>
      </div>
    </section>
  );
}

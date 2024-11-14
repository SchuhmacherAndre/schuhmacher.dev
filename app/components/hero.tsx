import { Badge } from "@/app/components/ui/badge";
import { Separator } from "@/app/components/ui/separator";

export default function Hero() {
  return (

    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-3xl px-6 text-center md:px-8"
    >
      <div className="flex justify-start">
        <Badge variant="secondary" className="mb-3">
          Full-stack Software Engineer
        </Badge>
      </div>

      <div className="flex justify-start">
        <h1 className="text-black text-balance text-3xl font-bold leading-none tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Hey, I&apos;m André 👋
        </h1>
      </div>

      <div className="flex justify-start mt-5 text-left">
        <h2 className="text-xl text-gray-500 text-medium">
          I&apos;m a <span className="font-bold">junior full-stack developer</span>{" "}
          with{" "}
          <span className="font-bold">
            several years of hands-on experience
          </span>{" "}
          across a range of projects.
          <br />
          <br />
          From building scalable <span className="font-bold">
            web apps
          </span> to <span className="font-bold">kernel</span> development,{" "}
          <span className="font-bold">windows internals</span>,{" "}
          <span className="font-bold">embedded</span> systems,{" "}
          <span className="font-bold">desktop</span> applications, and a touch
          of <span className="font-bold">mobile development</span>.
        </h2>
      </div>

      <Separator className="mt-6"></Separator>
    </section>
    
  );
}

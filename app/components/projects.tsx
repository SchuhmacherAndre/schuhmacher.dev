import { ProjectsShowcase } from "@/app/components/ui/projects-showcase";
import { Separator } from "@/app/components/ui/separator";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-3xl px-6 text-center md:px-8"
    >
      <div className="flex justify-start">
        <h1 className="text-black mt-5 text-balance text-xl font-bold leading-none tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
          Some of my work ☘
        </h1>
      </div>

      <div className="mt-5 flex justify-start">
        <ProjectsShowcase />
      </div>

      <Separator className="mt-6"></Separator>
    </section>
  );
}

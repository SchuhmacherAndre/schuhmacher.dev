import { Separator } from "@/app/components/ui/separator";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-3xl px-6 text-center md:px-8"
    >
      <div className="flex justify-start">
        <h1 className="text-black mt-5 text-balance text-xl font-bold leading-none tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
          My work experience 💼
        </h1>
      </div>

      <div className="flex flex-col space-y-8 mt-5 text-left mb-5">
        {/* Schuhmacher Projektservice */}
        <div className="flex items-start space-x-4 justify-between">
          <div className="flex space-x-4">
            <Avatar>
              <AvatarImage
                className="rounded-xl"
                src="/img/pss.png"
                alt="@pss"
              />
              <AvatarFallback>PSS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-bold">
                Schuhmacher Projektservice s.r.o. (Internship)
              </span>
              <p className="text-sm italic">Network Specialist and IT Admin</p>
              <ul className="list-disc pl-5 text-sm">
                <li>
                  Supported in planning, setting up, and testing network
                  communication between fully automatic painting robots and the
                  production network of a paint shop at Škoda Auto a.s.
                </li>
                <li>
                  Maintenance of the internal data network, using a Windows
                  server domain controller. Managing Windows and Debian clients
                  as well as SQL databases for ERP system and document
                  provision.
                </li>
                <li>
                  Completely overhauled the email server, cybersecurity setup.
                  Planned and implemented internal network infrastructure using
                  PFSense, developed and upkept the company website using
                  NextJS, Typescript.
                </li>
              </ul>

              <p className="text-sm mt-3">
                <strong>2020 &mdash; 2024</strong>
                <br />
                Mladá Boleslav, Czech Republic
              </p>
            </div>
          </div>
        </div>

        {/* Škoda Auto */}
        <div className="flex items-start space-x-4 justify-between">
          <div className="flex space-x-4">
            <Avatar>
              <AvatarImage
                className="rounded-xl"
                src="/img/skoda.jpg"
                alt="@skoda"
              />
              <AvatarFallback>ŠKODA</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-bold">Škoda Auto a.s. (Internship)</span>
              <p className="text-sm italic">Maintenance Systems Specialist</p>
              <ul className="list-disc pl-5 text-sm">
                <li>
                  Worked with a team in the maintenance department, ensuring
                  smooth operation and upkeep of factory machinery and
                  production lines.
                </li>
                <li>
                  Gained hands-on experience, learning about the production
                  processes, quality control, and maintenance of high-precision
                  equipment used in manufacturing.
                </li>
              </ul>
              <p className="text-sm mt-3">
                <strong>09/2022 - 08/2023</strong>
                <br />
                Mladá Boleslav, Czech Republic
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator></Separator>
    </section>
  );
}

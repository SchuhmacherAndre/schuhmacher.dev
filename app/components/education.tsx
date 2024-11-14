import { Separator } from "@/app/components/ui/separator";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";

export default function Education() {
  return (
    <section
      id="education"
      className="relative mx-auto max-w-3xl px-6 text-center md:px-8"
    >
      <div className="flex justify-start">
        <h1 className="text-black mt-5 text-balance text-xl font-bold leading-none tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
          My education 🎓
        </h1>
      </div>

      <div className="flex flex-col space-y-8 mt-5 text-left mb-5">
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
              <span className="font-bold">
                Škoda Auto Secondary Professional School of Engineering
              </span>
              <p className="text-sm italic">
                IT Technician for production systems
              </p>
              <ul className="list-disc pl-5 text-sm">
                <li>
                  Studied networking, system administration, and operating
                  systems, gaining hands-on experience with both Windows and
                  Linux environments.
                </li>
                <li>
                  Explored electrotechnics, hardware/software integration, and
                  PLC programming for industrial automation and control systems.
                </li>
                <li>
                  Developed skills in programming, hardware optimization, and
                  working with PC systems, CNC machines, and embedded devices.
                </li>
                <li>
                  Obtained certification under Czech regulation 250/2021 Sb.,
                  specializing in electrical systems and safety standards.
                </li>
              </ul>
              <p className="text-sm mt-3">
                <strong>09/2020 - 09/2024</strong>
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

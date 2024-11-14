import { BentoCard, BentoGrid } from "@/app/components/ui/bento-grid";
import Image from "next/image";
import { Video } from "@/app/components/ui/video";


let notifications = [
  {
    name: "Payment received",
    description: "Nyxb UI",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Nyxb UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Nyxb UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Nyxb UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();


const features = [
  {
    Icon: null,
    name: "Northstar",
    description: "Manually mapped unsigned driver, highly secure and entirely written in C. (custom KMUM comm. protocol)",
    href: "/docs",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image
        src="/img/northstar.png"
        width={444} // Adjust size as needed
        height={250} // Adjust size as needed
        alt="Northstar Image"
        className="absolute right-2 top-5 origin-top rounded-xl border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_50%)] group-hover:scale-105"
      />
    ),
  },
  {
    Icon: null,
    name: "Rust Addon",
    description: "Improves your aim, by automating recoil control.",
    href: "/docs",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Video>

      </Video>
    ),
  },
  {
    Icon: null,
    name: "Neural Dart Vision",
    description: "Predict how many points a dart is worth, using a single camera.",
    href: "/docs",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Image
        src="/img/darts.jpg"
        width={444} // Adjust size as needed
        height={250} // Adjust size as needed
        alt="Northstar Image"
        className="absolute left-2 top-5 origin-top rounded-xl border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_50%)] group-hover:translate-x-10"
      />
    ),
  },
  {
    Icon: null,
    name: "Shadowplate",
    description: "License plate concealer with an IOS companion app for easy controls.",
    className: "col-span-3 lg:col-span-2",
    href: "/docs",
    cta: "Learn more",
    background: (
      <Image
        src="/img/shadowplate.png"
        width={444} // Adjust size as needed
        height={250} // Adjust size as needed
        alt="Northstar Image"
        className="absolute right-2 top-5 origin-top rounded-xl border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_50%)] group-hover:scale-105"
      />
    ),
  },
];

export function ProjectsShowcase() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}

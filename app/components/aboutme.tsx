import { Separator } from "@/app/components/ui/separator";

export default function AboutMe() {
  return (
    <section
      id="aboutme"
      className="mt-5 relative mx-auto max-w-3xl px-6 text-center md:px-8"
    >
      <div className="flex justify-start">
        <h1 className="text-black text-balance text-xl font-bold leading-none tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
          A bit about myself 💬
        </h1>
      </div>

      <div className="flex justify-start mt-5 text-left mb-5">
        <h2 className="text-xl text-gray-500 text-medium">
          Hey, I&apos;m André - a software developer based just outside of Prague. My
          interest in tech started when I was six, messing around with computers
          and exploring how they work. By 14, I was coding, and at 16, I really
          dug deep into software development, learning by building almost
          everything from scratch and diving into many different languages and
          frameworks.
          <br />
          <br />
          These days, my focus is on web apps, especially using TypeScript, and
          frontend tools. I&apos;ve also worked with forum software, desktop
          applications, and spent a lot of time understanding Windows internals
          - especially the kernel, and setting up Linux servers. Alongside
          development, I handle pretty much everything tech-related, like
          setting up network infrastructure - maintaing it, cybersecurity, and
          even a bit of pentesting here and there.
          <br />
          <br />
          My favorite language that&apos;ll always have a place in my heart has to be
          C++. I&apos;ve spent countless hours on it, &quot;wasted&quot; in the best way, haha.
          TypeScript is a very close second, though - it&apos;s tough to beat for web
          stuff.
          <br />
          <br />
          I&apos;m passionate about creating efficient, clean software, whether it&apos;s
          for the web, backend, or desktop. I&apos;m always experimenting with new
          tools, improving my skills, and exploring different areas of tech to
          stay sharp. My goal is to build stuff that actually makes an impact
          and helps people get things done.
        </h2>
      </div>

      <Separator />
    </section>
  );
}

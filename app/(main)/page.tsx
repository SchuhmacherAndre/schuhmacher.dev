import Hero from "@/app/components/hero";
import Projects from "@/app/components/projects";
import AboutMe from "@/app/components/aboutme"
import Experience from "@/app/components/experience"
import Education from "@/app/components/education"
import Contact from "@/app/components/contact"

export default function Home() {
  return (
    <div>
      <div className="top-0" id="home"></div>
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <AboutMe />
      <Contact />
    </div>
  );
}

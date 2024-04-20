
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
export default function Home() {
  return <main className="flex flex-col items-center px-4"> 
  
  <Intro/>
  <SectionDivider/>
  <About /><Skills/>
  <Projects/>
  <Contact/>
  
  </main>;
  
}

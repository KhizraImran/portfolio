import Navbar from "../component/navbar";
import AboutSection from  "../component/aboutsection"
import ProjectsSection from "../component/projectsection";
import Footer from "../component/footer";
import SkillsSection from "../component/skillsection";

export default function About() {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <main className="pt-20">
        <AboutSection />
        <SkillsSection/>
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

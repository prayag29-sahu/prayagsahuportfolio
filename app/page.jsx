
"use client"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSections"
import EducationSection from "@/components/sections/Education"
import EducationSection2 from "@/components/sections/Education2"
import SkillsSection from "@/components/sections/SkillCard"
import ProjectsSection from "@/components/sections/ProjectCard"
import AchievementsSection from "@/components/sections/AchievementCard"
import ContactSection from "@/components/sections/ContactSection"
import CTA from "@/components/sections/CTA"

export default function Portfolio() {

  return (
    <>
      {/* <HeroSection /> */}
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <AchievementsSection />
      {/* Currently working on this CTA section  */}
      {/* <CTA /> */}
      <EducationSection2 />
      <SkillsSection />
      <ContactSection />
    </>
  );
}





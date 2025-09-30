import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import WorksSection from '@/components/WorksSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AchievementSection from '@/components/AchievmentSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <AchievementSection />
        <WorksSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

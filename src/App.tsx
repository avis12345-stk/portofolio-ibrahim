import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Book, 
  Award, 
  Mail, 
  Moon, 
  Sun, 
  ChevronRight, 
  Star, 
  MapPin, 
  Calendar,
  GraduationCap,
  Telescope,
  Globe,
  FlaskConical,
  Github,
  Linkedin,
  Instagram
} from 'lucide-react';

// --- Types ---
interface Achievement {
  title: string;
  date: string;
  description: string;
  category: 'Award' | 'Organization' | 'Project';
}

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

// --- Components ---

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-16 relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-block"
    >
      <h2 className="text-4xl md:text-5xl font-display text-sepia dark:text-gold mb-4 uppercase tracking-widest">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-4">
        <div className="h-[1px] w-12 bg-gold/50" />
        <Star className="w-4 h-4 text-gold" />
        <div className="h-[1px] w-12 bg-gold/50" />
      </div>
      {subtitle && (
        <p className="mt-4 font-accent italic text-lg text-science-green dark:text-dark-text/80">
          {subtitle}
        </p>
      )}
    </motion.div>
  </div>
);

const AchievementCard = ({ achievement }: { achievement: Achievement; key?: React.Key }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-parchment-dark/30 dark:bg-dark-surface/50 p-8 vintage-border border-gold/30 group transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-4">
      <span className="text-xs font-display text-gold uppercase tracking-tighter border-b border-gold/30 pb-1">
        {achievement.category}
      </span>
      <span className="text-sm font-accent italic text-sepia/60 dark:text-dark-text/40">
        {achievement.date}
      </span>
    </div>
    <h3 className="text-2xl font-display text-sepia dark:text-gold mb-3 group-hover:text-science-green dark:group-hover:text-white transition-colors">
      {achievement.title}
    </h3>
    <p className="text-ink/80 dark:text-dark-text/70 leading-relaxed font-serif italic">
      {achievement.description}
    </p>
    <div className="mt-6 flex justify-end">
      <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors">
        <ChevronRight className="w-4 h-4 text-gold" />
      </div>
    </div>
  </motion.div>
);

const SkillDiagram = ({ skill }: { skill: Skill; key?: React.Key }) => (
  <div className="mb-8">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-3">
        <div className="text-gold">{skill.icon}</div>
        <span className="font-display text-sepia dark:text-gold uppercase tracking-wider text-sm">
          {skill.name}
        </span>
      </div>
      <span className="font-accent italic text-gold text-sm">{skill.level}%</span>
    </div>
    <div className="h-2 w-full bg-sepia/10 dark:bg-white/5 rounded-full overflow-hidden relative">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-full bg-gold relative"
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:10px_10px]" />
      </motion.div>
    </div>
  </div>
);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements: Achievement[] = [
    {
      title: "Mahasiswa Berprestasi UNS",
      date: "2025",
      description: "Recognized for outstanding academic performance and active contribution to the university community.",
      category: "Award"
    },
    {
      title: "Scientific Research Lead",
      date: "2024 - Present",
      description: "Leading a student-led research project focusing on modern applications of classical scientific methods.",
      category: "Project"
    },
    {
      title: "Academic Excellence Society",
      date: "2023",
      description: "Elected member of the university's most prestigious academic organization.",
      category: "Organization"
    }
  ];

  const skills: Skill[] = [
    { name: "Scientific Analysis", level: 92, icon: <FlaskConical className="w-5 h-5" /> },
    { name: "Strategic Planning", level: 85, icon: <Compass className="w-5 h-5" /> },
    { name: "Academic Writing", level: 88, icon: <Book className="w-5 h-5" /> },
    { name: "Public Speaking", level: 80, icon: <Globe className="w-5 h-5" /> }
  ];

  return (
    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen selection:bg-gold selection:text-white`}>
      <div className="bg-parchment dark:bg-dark-bg text-ink dark:text-dark-text transition-colors duration-500 parchment-texture">
        
        {/* --- Navigation --- */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-parchment/80 dark:bg-dark-bg/80 backdrop-blur-md py-4 shadow-lg' : 'py-8'}`}>
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-display text-xl tracking-tighter text-sepia dark:text-gold"
            >
              I.Z.A. <span className="hidden sm:inline">AVICIENA</span>
            </motion.div>
            
            <div className="flex items-center gap-8">
              <div className="hidden md:flex gap-8 font-display text-xs uppercase tracking-widest">
                {['Hero', 'About', 'Achievements', 'Skills', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-gold transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full" />
                  </a>
                ))}
              </div>
              
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full border border-gold/20 hover:border-gold/50 transition-all text-gold"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* --- Hero Section --- */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 border border-gold rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 border border-gold rounded-full animate-[spin_90s_linear_infinite_reverse]" />
            <img 
              src="https://www.transparenttextures.com/patterns/constellation.png" 
              className="absolute inset-0 w-full h-full object-cover"
              alt="Constellations"
            />
          </div>

          <div className="max-w-5xl mx-auto px-6 text-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="font-accent italic text-gold text-xl md:text-2xl mb-4 block">
                The Pursuit of Knowledge
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-sepia dark:text-gold mb-8 leading-tight">
                Ibrahim Zaky <br />
                <span className="text-science-green dark:text-white">Aviciena</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl font-serif italic text-ink/70 dark:text-dark-text/70 mb-12 leading-relaxed">
                "Mahasiswa Berprestasi dengan Semangat Ilmiah dan Dedikasi Akademik"
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.a
                  href="#achievements"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-sepia dark:bg-gold text-parchment dark:text-dark-bg font-display uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(198,167,94,0.3)] transition-all"
                >
                  Lihat Portofolio
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border border-sepia dark:border-gold text-sepia dark:text-gold font-display uppercase tracking-widest text-sm hover:bg-sepia/5 dark:hover:bg-gold/5 transition-all"
                >
                  Hubungi Saya
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-display">Scroll</span>
            <div className="w-[1px] h-12 bg-gold/30 relative">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gold" />
            </div>
          </motion.div>
        </section>

        {/* --- About Section --- */}
        <section id="about" className="py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="vintage-border p-2">
                  <img 
                    src="https://picsum.photos/seed/aviciena/800/1000" 
                    alt="Ibrahim Zaky Aviciena"
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-parchment dark:bg-dark-surface p-4 vintage-border hidden md:block">
                  <div className="w-full h-full border border-gold/20 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-display text-gold">2008</span>
                    <span className="text-[10px] uppercase tracking-widest text-sepia dark:text-dark-text">Birth Year</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <SectionHeading title="Tentang Saya" subtitle="A Scholar's Journey" />
                <div className="space-y-6 text-lg leading-relaxed font-serif italic text-ink/80 dark:text-dark-text/80">
                  <p>
                    Lahir pada 1 Februari 2008 di kota pahlawan, Surabaya, perjalanan intelektual saya dimulai dengan rasa ingin tahu yang mendalam terhadap mekanisme dunia.
                  </p>
                  <p>
                    Saat ini, saya sedang menempuh pendidikan di Universitas Sebelas Maret (UNS), di mana saya mendedikasikan diri untuk mengeksplorasi batas-batas pengetahuan akademik dan pengembangan diri.
                  </p>
                  <p>
                    Sebagai seorang mahasiswa berprestasi, saya percaya bahwa pendidikan bukan sekadar mengumpulkan informasi, melainkan sebuah seni dalam memahami realitas melalui kacamata ilmiah yang kritis dan dedikasi yang tak tergoyahkan.
                  </p>
                </div>

                {/* Timeline */}
                <div className="mt-12 space-y-8">
                  {[
                    { year: '2023', event: 'Mulai Menempuh Pendidikan di UNS', icon: <GraduationCap className="w-4 h-4" /> },
                    { year: '2024', event: 'Aktif dalam Organisasi & Riset', icon: <Telescope className="w-4 h-4" /> },
                    { year: '2025', event: 'Penghargaan Mahasiswa Berprestasi', icon: <Award className="w-4 h-4" /> }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 items-start group">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-parchment transition-all">
                          {item.icon}
                        </div>
                        {idx !== 2 && <div className="w-[1px] h-12 bg-gold/30 mt-2" />}
                      </div>
                      <div>
                        <span className="font-display text-gold text-sm tracking-widest">{item.year}</span>
                        <h4 className="font-accent text-lg text-sepia dark:text-white">{item.event}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Achievements Section --- */}
        <section id="achievements" className="py-32 bg-sepia/[0.02] dark:bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading title="Prestasi & Aktivitas" subtitle="The Scientific Journal of Success" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, idx) => (
                <AchievementCard key={idx} achievement={achievement} />
              ))}
            </div>
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <SectionHeading title="Keahlian" subtitle="Scientific Competencies" />
                <div className="mt-12">
                  {skills.map((skill, idx) => (
                    <SkillDiagram key={idx} skill={skill} />
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="hidden lg:block relative"
              >
                <div className="aspect-square border border-gold/20 rounded-full flex items-center justify-center p-12 relative animate-[spin_120s_linear_infinite]">
                  <div className="absolute inset-0 border border-gold/10 rounded-full scale-110" />
                  <div className="absolute inset-0 border border-gold/10 rounded-full scale-125" />
                  <div className="w-full h-full border-2 border-dashed border-gold/30 rounded-full" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <FlaskConical className="w-16 h-16 text-gold mx-auto mb-4" />
                    <span className="font-display text-xs uppercase tracking-[0.5em] text-gold">Academic Core</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeading title="Hubungi Saya" subtitle="Send a Correspondence" />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-parchment-dark/30 dark:bg-dark-surface/50 p-10 md:p-16 vintage-border border-gold/30"
            >
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-display text-[10px] uppercase tracking-widest text-gold">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-gold/30 py-2 focus:border-gold outline-none transition-all font-serif italic"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-display text-[10px] uppercase tracking-widest text-gold">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-gold/30 py-2 focus:border-gold outline-none transition-all font-serif italic"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-display text-[10px] uppercase tracking-widest text-gold">Message Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-gold/30 py-2 focus:border-gold outline-none transition-all font-serif italic"
                    placeholder="Regarding..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-display text-[10px] uppercase tracking-widest text-gold">Your Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-gold/30 py-2 focus:border-gold outline-none transition-all font-serif italic resize-none"
                    placeholder="Write your message here..."
                  />
                </div>
                <button className="w-full py-4 bg-sepia dark:bg-gold text-parchment dark:text-dark-bg font-display uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(198,167,94,0.3)] transition-all flex items-center justify-center gap-3">
                  <Mail className="w-4 h-4" />
                  Kirim Pesan
                </button>
              </form>

              <div className="mt-16 pt-12 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex gap-6">
                  {[
                    { icon: <Github className="w-5 h-5" />, href: "#" },
                    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                    { icon: <Instagram className="w-5 h-5" />, href: "#" }
                  ].map((social, idx) => (
                    <a key={idx} href={social.href} className="text-gold hover:scale-110 transition-transform">
                      {social.icon}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col items-center md:items-end text-xs font-display text-gold/60 uppercase tracking-widest">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>Surakarta, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>Est. 2008</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="py-12 border-t border-gold/10 text-center">
          <p className="text-[10px] font-display uppercase tracking-[0.5em] text-gold/40">
            &copy; {new Date().getFullYear()} Ibrahim Zaky Aviciena. All Rights Reserved.
          </p>
        </footer>

      </div>
    </div>
  );
}

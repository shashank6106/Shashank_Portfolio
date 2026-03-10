import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Download, 
  Code2, 
  Database, 
  Layout, 
  Terminal, 
  Award, 
  GraduationCap, 
  FileCheck, 
  Moon, 
  Sun,
  ChevronRight,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

// --- Data ---
const projects: Project[] = [
  {
    title: "Air Quality Analysis Using Exploratory Data Techniques",
    description: "Performed exploratory data analysis on real-world air pollution datasets to analyze pollution trends and regional air quality patterns.",
    tech: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
    link: "https://github.com/shashank6106"
  },
  {
    title: "CPU Scheduling Simulator – OS Scheduling Visualizer",
    description: "Interactive web simulator demonstrating CPU scheduling algorithms like FCFS, SJF, Round Robin, and Priority Scheduling with Gantt chart visualization.",
    tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    link: "https://github.com/shashank6106"
  },
  {
    title: "TherapyNest – Mental Health Support Chatbot",
    description: "A mental health support platform with an AI chatbot providing wellness guidance and real-time conversational support.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/shashank6106"
  }
];

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "C++"],
    icon: <Code2 className="w-5 h-5" />
  },
  {
    title: "Libraries",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
    icon: <Database className="w-5 h-5" />
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS"],
    icon: <Layout className="w-5 h-5" />
  },
  {
    title: "Tools",
    skills: ["VS Code", "Jupyter Notebook", "GitHub"],
    icon: <Terminal className="w-5 h-5" />
  }
];

const certifications = [
  "NPTEL Certification in Cloud Computing",
  "Web Designing Certification from FreeCodeCamp",
  "Web-ka-Hackathon Certificate from BlockseBlocks"
];

// --- Components ---

const SectionHeading = ({ children, icon }: { children: React.ReactNode, icon?: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-8">
    {icon && <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">{icon}</div>}
    <h2 className="text-3xl font-bold tracking-tight">{children}</h2>
  </div>
);

const Card = ({ children, className = "", ...props }: { children: React.ReactNode, className?: string, [key: string]: any }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors duration-300 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            SG.
          </span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              <a href="#about" className="hover:text-emerald-500 transition-colors">About</a>
              <a href="#skills" className="hover:text-emerald-500 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-emerald-500 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a>
            </div>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 space-y-32">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-medium border border-emerald-500/20">
              Available for opportunities
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Shashank Gudla
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Computer Science Student passionate about <span className="text-emerald-500">Software Development</span>, <span className="text-teal-500">Data Analysis</span>, and Problem Solving.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            <a 
              href="#contact"
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-medium transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
            >
              Get in touch <ChevronRight className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com/shashank6106"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full font-medium transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHeading>About Me</SectionHeading>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I am a motivated Computer Science Engineering student at Lovely Professional University, skilled in Python, C++, and data analysis tools. I have a deep interest in building real-world projects and solving complex computational problems. 
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              My journey in tech is driven by curiosity and a strong work ethic, focusing on creating efficient solutions that make a difference.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex flex-col">
                <span className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Education</span>
                <span className="font-medium">B.Tech CSE, LPU</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Current CGPA</span>
                <span className="font-medium">6.84</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Location</span>
                <span className="font-medium">India</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 blur-2xl rounded-full" />
            <Card className="relative aspect-square flex items-center justify-center overflow-hidden">
               <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto text-emerald-500">
                    <GraduationCap className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold">Lovely Professional University</h3>
                  <p className="text-zinc-500">B.Tech in Computer Science Engineering</p>
               </div>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SectionHeading icon={<Code2 />}>Technical Skills</SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, idx) => (
              <Card key={idx} className="space-y-4">
                <div className="flex items-center gap-3 text-emerald-500">
                  {category.icon}
                  <h3 className="font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-md text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-4">
              {["Analytical Thinking", "Team Collaboration", "Strong Work Ethic"].map((skill, idx) => (
                <div key={idx} className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <SectionHeading icon={<Layout />}>Featured Projects</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="flex flex-col h-full">
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold leading-tight hover:text-emerald-500 transition-colors cursor-pointer">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold flex items-center gap-2 hover:text-emerald-500 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                  <Github className="w-5 h-5 text-zinc-400" />
                </div>
              </Card>
            ))}
          </div>
          
          {/* GitHub Stats Placeholder */}
          <div className="mt-16 p-8 bg-zinc-100 dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">GitHub Activity</h3>
              <p className="text-zinc-500">Check out my latest contributions and repositories.</p>
            </div>
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500">10+</div>
                <div className="text-xs uppercase tracking-widest font-bold text-zinc-500">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500">50+</div>
                <div className="text-xs uppercase tracking-widest font-bold text-zinc-500">Contributions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements & Certifications */}
        <section className="grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading icon={<Award />}>Achievements</SectionHeading>
            <Card className="border-l-4 border-l-emerald-500">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Naukri Campus Young Turks</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Achieved <span className="text-emerald-500 font-bold text-lg">97.4 Percentile</span> among 10 lakh participants in the national level contest.
                </p>
              </div>
            </Card>
          </div>
          <div>
            <SectionHeading icon={<FileCheck />}>Certifications</SectionHeading>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Let's work together</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-emerald-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Email</p>
                  <p className="font-bold">gudlashashank333@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-emerald-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Phone</p>
                  <p className="font-bold">+91-8328613240</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://linkedin.com/shashank-gudla" className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-xl hover:text-emerald-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/shashank6106" className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-xl hover:text-emerald-500 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <Card>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                />
              </div>
              <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Shashank Gudla
            </span>
            <p className="text-sm text-zinc-500">© 2026 Shashank Gudla. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/shashank6106" className="text-zinc-500 hover:text-emerald-500 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/shashank-gudla" className="text-zinc-500 hover:text-emerald-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:gudlashashank333@gmail.com" className="text-zinc-500 hover:text-emerald-500 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

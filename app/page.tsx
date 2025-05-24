"use client";

import type React from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Mail,
  Menu,
  Monitor,
  Moon,
  Sun,
  X,
  Database,
  Brain,
  School,
  Award,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { useMotionValue } from "framer-motion";
export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressBar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const heroRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Track mouse position for hero section effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Calculate parallax effect for hero background
  const heroX = useTransform(
    mouseX,
    [0, typeof window !== "undefined" ? window.innerWidth : 1],
    [10, -10]
  );
  const heroY = useTransform(
    mouseY,
    [0, typeof window !== "undefined" ? window.innerHeight : 1],
    [10, -10]
  );

  useEffect(() => {
    // Check user preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-teal-500 to-purple-500 z-50 origin-left"
        style={{ scaleX: progressBar }}
      />

      {/* Animated background shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-purple-200/20 to-transparent dark:from-purple-900/10 blur-3xl" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-tl from-teal-200/20 to-transparent dark:from-teal-900/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-40 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-xl font-bold flex items-center gap-2"
            >
              <motion.div
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-purple-500 text-white"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                S
              </motion.div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-purple-600 font-extrabold">
                Kumara Swamy
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </nav>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-4">
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              <motion.button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-900 shadow-lg p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-8">
                <Link
                  href="/"
                  className="text-xl font-bold flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-purple-500 text-white">
                    S
                  </div>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-purple-600 font-extrabold">
                    Kumara Swamy
                  </span>
                </Link>
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </motion.button>
              </div>
              <nav className="flex flex-col gap-4">
                <MobileNavLink
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </MobileNavLink>
                <MobileNavLink
                  href="#skills"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </MobileNavLink>
                <MobileNavLink
                  href="#projects"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </MobileNavLink>
                <MobileNavLink
                  href="#education"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Education
                </MobileNavLink>
                <MobileNavLink
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </MobileNavLink>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center pt-16"
          ref={heroRef}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-0"
            style={{ x: heroX, y: heroY }}
            transition={{ type: "spring", damping: 25, stiffness: 50 }}
          >
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Decorative grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.02] pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-gradient-to-r from-teal-500/10 to-purple-500/10 text-teal-500 dark:text-teal-400 border border-teal-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Computer Science Student
                </motion.div>
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Hi, I'm{" "}
                  <span className="relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-purple-600">
                      Kumara Swamy
                    </span>
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-purple-600 rounded-full"
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    />
                  </span>
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  I'm a passionate developer and CS student with a focus on Full
                  Stack Web Development
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="#projects"
                      className="px-6 py-3 bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
                    >
                      View My Work <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="#contact"
                      className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      Contact Me <Mail size={16} />
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Tech stack icons */}
                <motion.div
                  className="flex flex-wrap gap-6 mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <TechIcon name="React" />
                  <TechIcon name="Node.js" />
                  <TechIcon name="Python" />
                  <TechIcon name="MongoDB" />
                  <TechIcon name="Tailwind" />
                </motion.div>
              </motion.div>

              <motion.div
                className="relative hidden lg:block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {/* 3D-like layered image effect */}
                <div className="relative w-full h-[500px]">
                  <motion.div
                    className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-white/20 dark:border-gray-800/50 shadow-2xl"
                    whileHover={{ y: -5, x: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Image
                      src="/aaa.jpg?height=600&width=600"
                      alt="Developer"
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -bottom-6 -right-6 w-64 h-64 rounded-full bg-gradient-to-br from-teal-500/20 to-purple-500/20 blur-2xl"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />

                  {/* Code snippet decoration */}
                  <motion.div
                    className="absolute -top-10 -left-10 w-40 h-40 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 font-mono text-xs overflow-hidden"
                    initial={{ opacity: 0, y: 20, rotate: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    whileHover={{ rotate: 0, scale: 1.05 }}
                  >
                    <div className="text-gray-400">// Portfolio.tsx</div>
                    <div className="mt-2">
                      <span className="text-purple-500">const</span>{" "}
                      <span className="text-teal-500">developer</span> ={" "}
                      <span className="text-purple-500">{"{"}</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-teal-400">name:</span>{" "}
                      <span className="text-amber-500">'Kumar'</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-teal-400">skills:</span>{" "}
                      <span className="text-amber-500">
                        ['React', 'Node.js', 'Python']
                      </span>
                      ,
                    </div>
                    <div className="text-purple-500">{"}"}</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Scroll Down
              </span>
              <motion.div
                className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-1"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <motion.div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <Section id="about" title="About Me" subtitle="My Introduction">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative h-80 md:h-full rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/image.png?height=600&width=600"
                  alt="Profile"
                  fill
                  className="object-cover"
                />

                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com/Kumar-s29"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      whileHover={{ y: -5 }}
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/kumara-swamy-swayamvarapu-381587270"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      whileHover={{ y: -5 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </motion.a>
                    <motion.a
                      href="https://leetcode.com/Kumar_s29"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      whileHover={{ y: -5 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Passionate Developer & CS Student
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I'm Swayamvarapu Kumara Swamy, a Computer Science and
                Engineering student at Vignan's Institute of Information
                Technology in Visakhapatnam, India. I'm passionate about web
                development, machine learning, and creating innovative solutions
                to real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                With experience in both frontend and backend technologies, I
                enjoy building full-stack applications that combine beautiful
                interfaces with powerful functionality. I'm constantly learning
                and expanding my skills in various programming languages and
                frameworks.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <Stat label="CodeChef Rating" value="1669" icon="🏆" />
                <Stat label="LeetCode Rating" value="1702" icon="⭐" />
                <Stat label="CGPA" value="9.1" icon="📚" />
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/KUMARA_SWAMY -3.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-purple-500/20"
                >
                  Download CV <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section
          id="skills"
          title="My Skills"
          subtitle="Technical Proficiency"
          className="bg-gray-50/50 dark:bg-gray-800/50"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="space-y-6">
                <SkillBar
                  skill="JavaScript / React / Node.js"
                  percentage={85}
                />
                <SkillBar skill="Python / Machine Learning" percentage={80} />
                <SkillBar skill="HTML / CSS / Tailwind" percentage={90} />
                <SkillBar
                  skill="MongoDB / MySQL / PostgreSQL"
                  percentage={75}
                />
                <SkillBar skill="C / C++" percentage={70} />
              </div>
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold mb-6">What I Offer</h3>
              <div className="grid gap-6">
                <ServiceCard
                  icon={<Monitor />}
                  title="Web Development"
                  description="I create responsive websites using React, Node.js, and modern CSS frameworks like Tailwind."
                />
                <ServiceCard
                  icon={<Database />}
                  title="Database Design"
                  description="I design and implement database solutions using MongoDB, MySQL, and PostgreSQL."
                />
                <ServiceCard
                  icon={<Brain />}
                  title="Machine Learning"
                  description="I develop ML models for various applications, including disease prediction systems."
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="My Projects" subtitle="Recent Work">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Wishdom Hub"
              description="A mentorship platform connecting aspiring individuals with retired professionals for guidance and advice."
              tags={["React", "Tailwind", "Node.js", "Express", "MongoDB"]}
              image="/wishdomhub.png?height=400&width=600"
              githubUrl="https://github.com/Kumar-s29/WISDOMHUB-V2"
            />
            <ProjectCard
              title="Student Learning Hub"
              description="A web platform providing educational resources to government school students with integrated modules for YouTube, Wikipedia, books, notes, and to-dos."
              tags={["HTML", "CSS", "Bootstrap", "Django"]}
              image="/Student.jpg?height=400&width=600"
              githubUrl="https://github.com/Kumar-s29/Mini_Project"
            />
            <ProjectCard
              title="AI Content Generator"
              description="An AI-powered content generator using OpenAI and Gemini to automate content creation for blogs and articles."
              tags={["OpenAI", "Gemini", "MERN Stack"]}
              image="/ai.png?height=400&width=600"
              githubUrl="https://github.com/Kumar-s29/AI_Content_Generator"
            />
            <ProjectCard
              title="mongo-express-init"
              description="An npm package that streamlines the process of setting up a MongoDB backend by installing essential dependencies and generating boilerplate code."
              tags={["NPM", "Node.js", "MongoDB", "Express"]}
              image="/Npm.png?height=400&width=600"
              githubUrl="https://github.com/Kumar-s29/mongo-backend-kit"
              demoUrl="https://www.npmjs.com/package/mongo-express-init"
            />
            <ProjectCard
              title="Disease Prediction System"
              description="An ML-based system that predicts whether an individual is diabetic, has heart disease, or is at risk for Parkinson's disease based on health inputs."
              tags={["Python", "Machine Learning", "Data Analysis"]}
              image="/DiseasPred.png?height=400&width=600"
              githubUrl="https://github.com/Kumar-s29/Prediction_Of_Disease_OutBreaks"
              demoUrl="https://dpbci9l6bfuk2rvbxjn2mb.streamlit.app/"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A responsive portfolio website showcasing my skills, projects, and achievements using modern web technologies."
              tags={["React", "Next.js", "Tailwind CSS", "Framer Motion"]}
              image="/portfolio.png?height=400&width=600"
              githubUrl="https://github.com/Kumar-s29/Kumar-s-Portfolio"
              demoUrl="https://myportfoliosks.netlify.app/"
            />
            <ProjectCard
              title="E-commerce Website"
              description="E-commerce application."
              tags={["HTML", "CSS", "JavaScript"]}
              image="/ecommerce.png?height=400&width=600"
              githubUrl=""
              demoUrl="https://e-commercewebsite7.netlify.app/"
            />
            <ProjectCard
              title="VIIT-E-notice Board"
              description="A web application for displaying college notices and announcements."
              tags={["React", "Firebase", "Tailwind CSS", "Framer Motion"]}
              image="/Eviit.png?height=400&width=600"
              githubUrl="https://github.com/Kumar-s29/Project---C"
              demoUrl="https://viit-enoticeboard.onrender.com"
            />
            {/* Weather app */}
            <ProjectCard
              title="Weather App"
              description="A web application that provides real-time weather information using OpenWeather API."
              tags={["HTML", "CSS", "JavaScript"]}
              image="/weather.png?height=400&width=600"
              githubUrl="https://github.com/Kumar-s29/Weather-App"
              demoUrl="https://weatherappsks.netlify.app/"
            />
          </div>
        </Section>

        {/* Education Section */}
        <Section
          id="education"
          title="Education & Achievements"
          subtitle="Academic Background"
          className="bg-gray-50/50 dark:bg-gray-800/50"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-teal-500 to-purple-600 text-white">
                    <School size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Bachelor of Technology
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Computer Science and Engineering
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                      Nov 2022 - May 2026
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">
                    Vignan's Institute of Information Technology
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Visakhapatnam, Andhra Pradesh, India
                  </p>
                  <div className="flex items-center gap-2 text-teal-500 dark:text-teal-400">
                    <span className="font-bold">CGPA: 9.1</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-12 mb-6">Certifications</h3>
              <div className="space-y-4">
                <CertificationCard
                  title="MERN Stack Web Development"
                  issuer="Udemy"
                />
                <CertificationCard
                  title="Relational Database Basics"
                  issuer="IBM - EdX"
                />
                <CertificationCard
                  title="JavaScript Essentials"
                  issuer="Cisco"
                />
                <CertificationCard title="Python Essentials" issuer="Cisco" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Experience</h3>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-teal-500 text-white">
                    <Brain size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">ML Intern</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      SAP, AICTE, India
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                      January 2025
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Developed a Disease Prediction System using Machine Learning,
                  which predicts whether an individual is diabetic, has heart
                  disease, or is at risk for Parkinson's disease based on
                  health-related inputs.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-6">Achievements</h3>
              <div className="space-y-4">
                <AchievementCard
                  icon={<Award />}
                  title="3-Star Coder on CodeChef"
                  description="Max Rating of 1669"
                />
                <AchievementCard
                  icon={<Award />}
                  title="Ranked 2nd in Code Rush Contest"
                  description="At VIIT"
                />
                <AchievementCard
                  icon={<Award />}
                  title="LeetCode Highest Rating"
                  description="1702"
                />
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Get In Touch" subtitle="Contact Me">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h3 className="text-2xl font-bold mb-4">Let's Talk</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I'm always open to discussing new projects, opportunities, or
                just chatting about technology. Feel free to reach out to me
                through any of the following channels.
              </p>
              <div className="space-y-6">
                <ContactInfoCard
                  icon={<Mail />}
                  title="Email Me"
                  value="swamykumar29603@gmail.com"
                  gradient="from-teal-500 to-teal-300"
                />
                <ContactInfoCard
                  icon={<Github />}
                  title="GitHub"
                  value="github.com/Kumar-s29"
                  gradient="from-purple-500 to-purple-300"
                />
                <ContactInfoCard
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  }
                  title="Phone"
                  value="+91 6305221719"
                  gradient="from-amber-500 to-amber-300"
                />
                <ContactInfoCard
                  icon={<FileText />}
                  title="Location"
                  value="Visakhapatnam, Andhra Pradesh"
                  gradient="from-green-500 to-green-300"
                />
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-teal-500/10 to-purple-500/10 rounded-full blur-3xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-purple-500/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-teal-500/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <Link
                href="/"
                className="text-xl font-bold flex items-center gap-2"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-purple-500 text-white">
                  S
                </div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-purple-600 font-extrabold">
                  Kumara Swamy
                </span>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-md">
                Computer Science student and developer passionate about creating
                innovative solutions with modern technologies.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex gap-4 mb-4">
                <SocialLink
                  href="https://github.com/Kumar-s29"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/kumara-swamy-swayamvarapu-381587270"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </SocialLink>
                <SocialLink
                  href="https://leetcode.com/Kumar_s29"
                  aria-label="LeetCode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </SocialLink>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Swayamvarapu Kumara Swamy. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-purple-500 to-teal-500" />
      </footer>
    </div>
  );
}

// Component for desktop navigation links
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
      <Link
        href={href}
        className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors relative group"
      >
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-purple-600 transition-all group-hover:w-full" />
      </Link>
    </motion.div>
  );
}

// Component for mobile navigation links
function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.div whileHover={{ x: 5 }} whileTap={{ x: 0 }}>
      <Link
        href={href}
        className="block py-3 text-lg hover:text-teal-500 dark:hover:text-teal-400 transition-colors border-b border-gray-100 dark:border-gray-800"
        onClick={onClick}
      >
        {children}
      </Link>
    </motion.div>
  );
}

// Section component with animations
function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id={id} className={`py-24 relative ${className}`} ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-teal-500/10 to-purple-500/10 text-teal-500 dark:text-teal-400 border border-teal-500/20">
              {subtitle}
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.div>
        {children}
      </div>
    </section>
  );
}

// Stat component
function Stat({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: string;
}) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 px-6 py-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-purple-600 flex items-center gap-2">
        {value} <span>{icon}</span>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
    </motion.div>
  );
}

// Skill bar component with animation
function SkillBar({
  skill,
  percentage,
}: {
  skill: string;
  percentage: number;
}) {
  const skillRef = useRef(null);
  const isInView = useInView(skillRef, { once: true });

  return (
    <motion.div
      ref={skillRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill}</span>
        <span className="font-medium text-teal-500">{percentage}%</span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-teal-500 to-purple-600 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

// Service card component
function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-teal-500 to-purple-600 transition-all duration-300 group-hover:w-full group-hover:opacity-10" />
      <div className="text-teal-500 mb-4 relative z-10">{icon}</div>
      <h3 className="text-xl font-bold mb-2 relative z-10">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 relative z-10">
        {description}
      </p>
    </motion.div>
  );
}

// Project card component
function ProjectCard({
  title,
  description,
  tags,
  image,
  githubUrl,
  demoUrl,
}: {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
}) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            className="px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg text-sm font-medium"
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
          >
            View Project
          </motion.div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-teal-500/10 to-purple-500/10 text-teal-600 dark:text-teal-400 text-xs rounded-full border border-teal-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {demoUrl && (
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link
                href={demoUrl}
                className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 flex items-center gap-1 text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <ExternalLink size={14} />
              </Link>
            </motion.div>
          )}
          <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
            <Link
              href={githubUrl || "#"}
              className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 flex items-center gap-1 text-sm font-medium"
              target={githubUrl ? "_blank" : undefined}
              rel={githubUrl ? "noopener noreferrer" : undefined}
            >
              Source Code <Github size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// Contact info card component
function ContactInfoCard({
  icon,
  title,
  value,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  gradient: string;
}) {
  return (
    <motion.div
      className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm"
      whileHover={{ x: 5 }}
    >
      <div
        className={`p-3 rounded-lg bg-gradient-to-br ${gradient} text-white`}
      >
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400">{value}</p>
      </div>
    </motion.div>
  );
}

// Social link component
function SocialLink({
  href,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <motion.div whileHover={{ y: -5 }} whileTap={{ y: 0 }}>
      <Link
        href={href}
        className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gradient-to-r hover:from-teal-500 hover:to-purple-600 hover:text-white transition-colors"
        {...props}
      >
        {children}
      </Link>
    </motion.div>
  );
}

// Tech stack icon component
function TechIcon({ name }: { name: string }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center mb-2">
        {name === "React" && (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-8 h-8 text-blue-500"
          >
            <path
              d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z"
              fill="currentColor"
            />
          </svg>
        )}
        {name === "Node.js" && (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-8 h-8 text-green-600"
          >
            <path
              d="M12 1.77L3.96 6.29v11.42l8.04 4.52 8.04-4.52V6.29L12 1.77zm0 2.31l6.12 3.44v8.5l-6.12 3.44-6.12-3.44v-8.5L12 4.08z"
              fill="currentColor"
            />
            <path
              d="M12 6.94l-3.89 2.19v4.38l3.89 2.19 3.89-2.19V9.13L12 6.94zm0 1.15l2.63 1.48v2.96L12 14.01l-2.63-1.48V9.57L12 8.09z"
              fill="currentColor"
            />
          </svg>
        )}
        {name === "Python" && (
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <path
              d="M11.751 2.253c-.55.002-1.074.056-1.535.143-1.358.26-1.604.804-1.604 2.175v1.593h3.219v.406H7.331c-1.371 0-2.571.823-2.946 2.389-.432 1.792-.451 2.91 0 4.783.334 1.399 1.133 2.389 2.504 2.389h1.62v-2.153c0-1.556 1.346-2.93 2.946-2.93h3.214c1.31 0 2.357-1.078 2.357-2.39V4.571c0-1.273-.957-2.232-2.357-2.446-.88-.136-1.793-.198-2.918-.193zm-1.752 1.278c.33 0 .599.273.599.609a.605.605 0 01-.599.61.605.605 0 01-.599-.61c0-.336.269-.609.599-.609z"
              fill="#3776AB"
            />
            <path
              d="M16.248 7.183v2.095c0 1.625-1.378 2.991-2.946 2.991h-3.214c-1.291 0-2.357 1.103-2.357 2.389v4.478c0 1.273.957 2.232 2.357 2.446 1.675.256 3.282.302 5.214 0 1.282-.2 2.357-1.19 2.357-2.446v-1.593h-3.214v-.406h5.571c1.371 0 1.882-1.19 2.357-2.389.493-1.239.472-2.429 0-4.783-.339-1.69-1.22-2.389-2.357-2.389h-1.768c.01.006 0 .406 0 .406zm-1.752 11.36c.33 0 .599.273.599.609a.605.605 0 01-.599.61.605.605 0 01-.599-.61c0-.336.269-.609.599-.609z"
              fill="#3776AB"
            />
          </svg>
        )}
        {name === "MongoDB" && (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-8 h-8 text-green-500"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
              fill="currentColor"
            />
            <path
              d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
              fill="currentColor"
            />
            <path
              d="M12 13C9.79 13 8 14.79 8 17H16C16 14.79 14.21 13 12 13Z"
              fill="currentColor"
            />
          </svg>
        )}
        {name === "Tailwind" && (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-8 h-8 text-teal-500"
          >
            <path
              d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
              fill="currentColor"
            />
          </svg>
        )}
      </div>
      <span className="text-xs font-medium">{name}</span>
    </motion.div>
  );
}

// Certification card component
function CertificationCard({
  title,
  issuer,
}: {
  title: string;
  issuer: string;
}) {
  return (
    <motion.div
      className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm"
      whileHover={{ x: 5 }}
    >
      <div className="p-3 rounded-lg bg-gradient-to-br from-teal-500 to-purple-600 text-white">
        <FileText size={20} />
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400">{issuer}</p>
      </div>
    </motion.div>
  );
}

// Achievement card component
function AchievementCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm"
      whileHover={{ x: 5 }}
    >
      <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-teal-500 text-white">
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}

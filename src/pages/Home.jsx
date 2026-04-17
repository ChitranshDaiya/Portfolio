import React, { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Mail, MapPin, GitBranch } from "lucide-react";

const HangingSpider = () => {
  const [isScared, setIsScared] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for fluid, non-glitchy movement
  const springX = useSpring(x, { stiffness: 60, damping: 15, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 60, damping: 15, mass: 0.5 });

  const handleMouse = (e) => {
    if (isScared) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Repel instead of attract
    x.set((centerX - clientX) * 0.4);
    y.set((centerY - clientY) * 0.4);
  };

  const handleLeave = () => {
    if (isScared) return;
    // Snap back to 0
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="hidden md:flex absolute top-0 right-10 lg:right-24 z-50 w-64 h-96 justify-center"
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      <motion.div
        animate={isScared ? { y: -800, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={isScared ? { duration: 1.5, ease: "easeIn" } : { duration: 0 }}
        className="w-full h-full flex justify-center z-50"
      >
        <motion.div
          style={{ x: springX, y: springY }}
          className="relative mt-32"
        >
          <div className="w-[1.5px] h-[2000px] bg-gray-400/60 absolute bottom-[80%] left-1/2 -translate-x-1/2 rounded-full"></div>
          <motion.span 
            onMouseOver={() => setIsScared(true)}
            className="text-[3rem] filter drop-shadow-md select-none leading-none block"
            animate={isScared ? { rotate: [-15, 15, -15, 15, 0] } : {}}
            transition={{ duration: 0.2, repeat: Infinity }}
          >
            🕷️
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const Section = ({ id, delay = 0, className = "", children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`p-8 md:p-12 mb-8 w-[90%] max-w-4xl mx-auto rounded-xl ${className}`}
    >
      {children}
    </motion.section>
  );
};


export default function Home() {
  return (
    <div className="bg-brand-bg text-[#222] min-h-screen scroll-smooth overflow-x-hidden relative font-work">
      <HangingSpider />

      <nav className="sticky top-0 z-40 bg-white/50 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl md:text-2xl font-playfair font-bold text-brand-blue italic tracking-wide">
            Chitransh
          </Link>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#intro" className="hover:text-brand-hover transition">Home</a>
            <Link to="/skills" className="hover:text-brand-hover transition">Skills</Link>
            <Link to="/projects" className="hover:text-brand-hover transition">Projects</Link>
            <Link to="/resume" className="hover:text-brand-hover transition">Resume</Link>
          </div>
        </div>
      </nav>

      <main className="py-12">
        {/* Intro */}
        <Section id="intro" className="relative group">
          <h1 className="font-playfair text-[clamp(2.2rem,5vw,4rem)] font-extrabold italic text-brand-blue leading-tight mb-4">
            Hi, I'm Chitransh.
          </h1>
          <p className="font-light italic text-gray-600 mb-6 text-lg">
            Creative by Curiosity · Logical by Nature · Forever a Learner
          </p>
          
          <img 
            src="/Chit Photo.jpg" 
            alt="Chitransh" 
            className="relative float-right ml-6 mb-4 w-48 h-auto border-4 border-[#525252] rounded-2xl grayscale transition-all duration-700 ease-in-out hover:grayscale-0 shadow-[5px_5px_rgba(84,84,84,0.2),_10px_10px_rgba(84,84,84,0.1)] hover:shadow-[5px_5px_rgba(100,100,0,0.4),_10px_10px_rgba(100,100,0,0.3),_15px_15px_rgba(100,100,0,0.2),_20px_20px_rgba(100,100,0,0.1)] hover:-translate-x-1 hover:-translate-y-1"
          />
          
          <p className="text-[1.3em] leading-relaxed">
            A student, aspiring frontend developer, passionate UI/UX designer, and a traveller finding my way through the maze of life.
            <br className="my-2" />
            In this little corner of the internet, you’ll find pieces of my journey — the interfaces I design, the projects I build, and the skills I grow.
            <br className="my-2" />
            So go ahead, click around. You might find something interesting. Or weird. Or both.
          </p>
          <div className="clear-both"></div>
        </Section>

        {/* Whats This */}
        <Section id="whats-this" className="bg-brand-bg-alt">
          <h2 className="font-playfair text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold italic text-brand-blue pl-4 border-l-[4px] border-[#525252] rounded-sm mb-4">
            What is this place?
          </h2>
          <p className="text-[1.3em] leading-relaxed">
            This site is my personal creative lab.
            It acts as a digital canvas for my frontend experiments, design mockups, and professional prototypes.
            <br className="my-2" />
            Everything here is designed and built by me, fueled by curiosity and way too much tea — or maybe coffee?
          </p>
        </Section>

        {/* Skills */}
        <Section id="skills">
          <h2 className="font-playfair text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold italic text-brand-blue pl-4 border-l-[4px] border-[#525252] rounded-sm mb-4">
            Skills I have learned
          </h2>
          <p className="text-[1.3em] leading-relaxed">
            In this game of survival in tech-era, I have learnt a few crucial skills along the way. Want to see them? Have a look.
          </p>
          <div className="flex items-center gap-2 font-caveat text-2xl text-gray-700 mt-4 ml-4">
            <span>click here</span>
            <motion.img 
              src="/arrow.png" 
              alt="Arrow pointing"
              className="w-16 h-auto"
              animate={{ x: [-2, 2, -2], y: [-2, 2, -2], rotate: [-15, -5, -15] }} 
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            />
          </div>
          <Link to="/skills">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 0 }}
              className="mt-6 inline-flex flex-col items-center justify-center p-8 bg-white border-[5px] border-gray-200 rounded-2xl shadow-sm rotate-[12deg] transition-all"
            >
              <Code2 size={64} strokeWidth={1.5} className="text-[#333] mb-3" />
              <span className="font-caveat text-2xl text-[#333]">Tech Toolkit</span>
            </motion.div>
          </Link>
        </Section>

        {/* Projects */}
        <Section id="projects" className="bg-brand-bg-alt">
          <h2 className="font-playfair text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold italic text-brand-blue pl-4 border-l-[4px] border-[#525252] rounded-sm mb-4">
            Projects I've poured my brain into
          </h2>
          <p className="text-[1.3em] leading-relaxed">
            Every adventure has its challenges, and this world is a choose-your-own-story. Have a look at the challenges I've completed. <i className="text-gray-500">(You are free to evaluate the scores)</i>
          </p>
          <div className="flex items-center gap-2 font-caveat text-2xl text-gray-700 mt-4 ml-4">
            <span>click here</span>
            <motion.img 
              src="/arrow.png" 
              alt="Arrow pointing"
              className="w-16 h-auto"
              animate={{ x: [-2, 2, -2], y: [-2, 2, -2], rotate: [-15, -5, -15] }} 
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            />
          </div>
          <Link to="/projects">
            <motion.img 
              src="/project.png"
              alt="The project"
              whileHover={{ scale: 1.1, rotate: 0 }}
              className="mt-4 max-w-[80%] max-h-[150px] border-[5px] border-gray-200 rounded-2xl shadow-sm rotate-[-8deg] transition-transform duration-300"
            />
          </Link>
        </Section>

        {/* Resume */}
        <Section id="resume">
          <h2 className="font-playfair text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold italic text-brand-blue pl-4 border-l-[4px] border-[#525252] rounded-sm mb-4">
            Something Professional
          </h2>
          <p className="text-[1.3em] leading-relaxed">
            Hey, looking for something professional? Don't worry, I've got you...
          </p>
          <div className="flex items-center gap-2 font-caveat text-2xl text-gray-700 mt-4 ml-4">
            <span>click here</span>
            <motion.img 
              src="/arrow.png" 
              alt="Arrow pointing"
              className="w-16 h-auto"
              animate={{ x: [-2, 2, -2], y: [-2, 2, -2], rotate: [-15, -5, -15] }} 
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            />
          </div>
          <Link to="/resume">
            <motion.img 
              src="/resume.png"
              alt="Resume"
              whileHover={{ scale: 1.1, rotate: 0 }}
              className="mt-4 max-w-[80%] max-h-[150px] border-[5px] border-gray-200 rounded-2xl shadow-sm rotate-[5deg] transition-transform duration-300"
            />
          </Link>
        </Section>

        {/* Contact */}
        <Section id="contact" className="mb-20 bg-brand-bg-alt">
          <h2 className="font-playfair text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold italic text-brand-blue pl-4 border-l-[4px] border-[#525252] rounded-sm mb-4">
            Need to talk?
          </h2>
          <p className="text-[1.3em] leading-relaxed mb-8">
            Need a suggestion? Maybe some news. Or just wanted to say hello - its all just a few steps away.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="space-y-4 text-lg bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-sm w-full md:w-auto">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="text-brand-blue w-5 h-5" /> 
                <a href="mailto:daichitransh@gmail.com" className="hover:underline">daichitransh@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <GitBranch className="text-brand-blue w-5 h-5" /> 
                <a href="https://github.com/ChitranshDaiya" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/ChitranshDaiya</a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="text-brand-blue w-5 h-5" /> 
                <span>Madhya Pradesh, India</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 font-caveat text-2xl text-gray-700">
                <span>Say hello!</span>
                <motion.img 
                  src="/arrow.png" 
                  alt="Arrow pointing"
                  className="w-12 h-auto"
                  animate={{ x: [-2, 2, -2], y: [-2, 2, -2], rotate: [-15, -5, -15] }} 
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                />
              </div>
              <a href="mailto:daichitransh@gmail.com" className="inline-block font-work bg-brand-yellow text-[#222] font-semibold px-8 py-3 rounded-xl shadow-[4px_4px_0_#222] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#222] transition-all duration-300">
                Email Me
              </a>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 border-t border-gray-200 bg-white/50">
        <p className="font-caveat text-xl sm:text-2xl px-4">
          Designed with <span className="font-work text-brand-blue font-bold italic mx-1">passion & logic</span> and fueled by caffeine.
        </p>
      </footer>
    </div>
  );
}

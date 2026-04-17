import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MoveLeft, ArrowRight } from 'lucide-react';

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const projectsData = [
    {
      title: "1. Chaos Sweeper",
      subtitle: "Interactive Browser-Based Story Game",
      tech: "HTML, CSS, JavaScript",
      details: [
        "Designed and developed a fully interactive decision-based text adventure game from scratch",
        "Built branching story logic where user choices impact future scenes and outcomes",
        "Managed game state dynamically using JavaScript condition handling",
        "Created immersive UI with custom dialogue presentation and scene transitions",
        "Structured gameplay for replayability with multiple paths and outcomes",
        "Optimized for smooth performance across browsers"
      ],
      shows: "Logic building, DOM skills, creativity, complete ownership"
    },
    {
      title: "2. Helping Society Platform",
      subtitle: "Community Support Web Platform (In Progress)",
      tech: "React, CSS, Tailwind CSS",
      details: [
        "Developing frontend for a real-world social/community support initiative",
        "Building reusable React components for scalable page structure",
        "Creating responsive layouts for mobile and desktop users",
        "Working on forms, content sections, and clean user flows",
        "Collaborating in practical development workflow with backend integration in progress",
        "Focused on usability, trust, and accessibility for real users"
      ],
      shows: "Real project exposure, React usage, teamwork"
    },
    {
      title: "3. Salon Booking Experience",
      subtitle: "Client UI/UX Design + Upcoming Frontend Build",
      tech: "Figma, React, Tailwind CSS",
      details: [
        "Designed booking-focused interface for a salon business use case",
        "Simplified user journey for appointments and service discovery",
        "Created reusable UI sections for services, pricing, booking, and contact",
        "Planned mobile-first responsive layout system",
        "Translating design concepts into frontend implementation"
      ],
      shows: "UI/UX thinking, client-oriented work, design-to-code skill"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-[#222] font-work p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-brand-blue transition font-caveat text-2xl">
          <MoveLeft size={24} />
          Back to town
        </Link>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="font-playfair text-4xl md:text-5xl font-extrabold italic text-brand-blue mb-4">The Lab: Projects</h1>
        <p className="text-xl leading-relaxed max-w-2xl text-gray-700 mb-12">
          An exploration of my recent experiments, freelance work, and interactive developments.
        </p>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-12 max-w-4xl"
        >
          {projectsData.map((project, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="bg-white border-[3px] border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-1">
                <h2 className="font-playfair text-3xl font-bold text-brand-blue mb-2">{project.title}</h2>
                <h3 className="text-xl font-medium text-gray-800 mb-3">{project.subtitle}</h3>
                
                <div className="inline-block px-4 py-1 bg-[#f9f2d7] border-2 border-brand-yellow rounded-full font-caveat text-xl text-gray-800 mb-6">
                  Tech Stack: {project.tech}
                </div>

                <ul className="space-y-3 mb-6">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex relative pl-6 text-gray-700">
                      <ArrowRight size={16} className="absolute left-0 top-[6px] text-brand-yellow" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* End of details */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      </div>
    </div>
  );
}

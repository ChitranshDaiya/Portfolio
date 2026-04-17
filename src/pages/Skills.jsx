import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MoveLeft, Monitor, PenTool, Terminal, Database, Zap } from 'lucide-react';

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const skillsData = [
    {
      title: "Core React & UI",
      icon: <Monitor className="w-8 h-8 text-brand-blue" />,
      skills: ["React Fundamentals", "Component-Based UI Development", "DOM Manipulation"]
    },
    {
      title: "Styling & Layouts",
      icon: <PenTool className="w-8 h-8 text-orange-500" />,
      skills: ["Tailwind CSS", "Responsive Design", "Rapid Prototyping", "Figma"]
    },
    {
      title: "Tools & Debugging",
      icon: <Terminal className="w-8 h-8 text-gray-700" />,
      skills: ["Frontend Debugging", "Git / GitHub", "Browser DevTools"]
    },
    {
      title: "Data & Logic",
      icon: <Database className="w-8 h-8 text-green-600" />,
      skills: ["Basic Database Handling", "State Management", "Form Handling"]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-[#222] font-work p-8 md:p-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-brand-blue transition font-caveat text-2xl relative z-10">
          <MoveLeft size={24} />
          Back to town
        </Link>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative z-10">
        <h1 className="font-playfair text-4xl md:text-5xl font-extrabold italic text-brand-blue mb-12">Tech Toolkit</h1>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-8 max-w-5xl"
        >
          {skillsData.map((category, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="bg-white border-[3px] border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col justify-start hover:-translate-y-1 hover:shadow-md transition-all relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 opacity-5 pointer-events-none transform scale-150">
                {category.icon}
              </div>
              
              <div className="flex items-center gap-4 mb-6 z-10">
                <div className="p-3 bg-[#f9f2d7]/50 rounded-xl">
                  {category.icon}
                </div>
                <h2 className="font-playfair text-2xl font-bold text-[#222]">{category.title}</h2>
              </div>
              
              <div className="flex flex-wrap gap-3 z-10">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-[#fdfaf6] border-2 border-gray-200 text-gray-800 rounded-lg text-sm font-semibold shadow-[2px_2px_0_#e5e7eb]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      </div>
    </div>
  );
}

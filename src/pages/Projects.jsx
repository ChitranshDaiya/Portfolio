import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MoveLeft, ArrowRight, ExternalLink, GitBranch, Image as ImageIcon, X } from 'lucide-react';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

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
      title: "1. The Helping Society Platform",
      subtitle: "Community Support Web Application",
      tech: "React, Tailwind CSS, Supabase",
      details: [
        "Developing a responsive frontend interface and reusable UI components for a real-world community platform.",
        "Building accessible user flows focused on trust and easy navigation for actual users.",
        "Working on integrating secure login and data handling with the backend."
      ],
      images: [
        "/projects/helping-1.png",
        "/projects/helping-2.png",
        "/projects/helping-3.png"
      ],
      demoLink: "coming-soon",
      repoLink: "coming-soon"
    },
    {
      title: "2. Salon Booking Experience",
      subtitle: "Client UI/UX Design & Frontend Implementation",
      tech: "Figma, React, Tailwind CSS",
      details: [
        "Designed a clean, booking-oriented interface tailored for a salon business use case.",
        "Simplified the user journey to make discovering services and booking appointments easy.",
        "Converting custom Figma designs into a fully responsive frontend layout."
      ],
      images: [
        "/projects/salon-1.png",
        "/projects/salon-2.png",
        "/projects/salon-3.png"
      ],
      demoLink: "coming-soon",
      repoLink: "coming-soon"
    },
    {
      title: "3. Chaos Sweeper",
      subtitle: "Interactive Browser-Based Story Engine",
      tech: "HTML, CSS, Vanilla JS",
      details: [
        "Built a fully interactive, browser-based story game using vanilla JavaScript and DOM manipulation.",
        "Wrote custom logic to handle branching dialog where user choices directly change the story.",
        "Created a clean, immersive UI with tailored scene transitions and responsive layouts."
      ],
      images: [
        "/projects/chaos-1.png",
        "/projects/chaos-2.png",
        "/projects/chaos-3.png"
      ],
      demoLink: "coming-soon",
      repoLink: "coming-soon"
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
              className="bg-white border-[3px] border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-8 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              {/* Images Column */}
              <div className="w-full md:w-2/5 flex flex-col gap-3">
                <div 
                  className="w-full aspect-video bg-[#fdfaf6] rounded-xl overflow-hidden border-2 border-gray-200 relative group flex items-center justify-center cursor-zoom-in"
                  onClick={() => setSelectedImage(project.images[0])}
                >
                  <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500" onError={(e) => e.target.style.opacity='0'} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 z-0">
                    <ImageIcon size={32} />
                    <span className="text-xs font-semibold uppercase tracking-widest mt-2 hidden group-hover:block transition-all">Visual Pending</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {project.images.slice(1).map((img, idx) => (
                    <div 
                      key={idx} 
                      className="w-full aspect-video bg-[#fdfaf6] rounded-lg overflow-hidden border-2 border-gray-200 relative flex items-center justify-center group cursor-zoom-in"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img src={img} alt="Gallery view" className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500" onError={(e) => e.target.style.opacity='0'} />
                      <div className="absolute inset-0 flex items-center justify-center text-gray-300 z-0">
                        <ImageIcon size={20} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text Column */}
              <div className="w-full md:w-3/5 flex flex-col">
                <h2 className="font-playfair text-3xl font-bold text-brand-blue mb-2">{project.title}</h2>
                <h3 className="text-xl font-medium text-gray-800 mb-3">{project.subtitle}</h3>
                
                <div className="inline-block px-4 py-1.5 bg-[#f9f2d7] border-[3px] border-brand-yellow/60 rounded-full font-caveat text-xl text-gray-800 mb-6 self-start transform -rotate-1">
                  Stack: {project.tech}
                </div>

                <ul className="space-y-4 mb-6 text-gray-700">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex relative pl-7 leading-relaxed">
                      <ArrowRight size={18} className="absolute left-0 top-[4px] text-brand-blue" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                {(project.demoLink !== "coming-soon" || project.repoLink !== "coming-soon") && (
                  <div className="mt-auto pt-6 flex flex-wrap gap-4 border-t-2 border-dashed border-gray-200">
                    {project.demoLink !== "coming-soon" && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 bg-brand-blue text-white rounded-lg shadow-[2px_2px_0_#222] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#222] transition-all font-semibold border-2 border-[#222] text-sm">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    {project.repoLink !== "coming-soon" && (
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 bg-white text-[#222] rounded-lg shadow-[2px_2px_0_#222] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#222] transition-all font-semibold border-2 border-[#222] text-sm">
                        <GitBranch size={16} /> GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-12 backdrop-blur-sm cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-yellow transition-colors bg-white/10 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

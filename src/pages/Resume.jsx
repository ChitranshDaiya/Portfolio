import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MoveLeft, FileText } from 'lucide-react';

export default function Resume() {
  return (
    <div className="min-h-screen bg-brand-bg text-[#222] font-work p-8 md:p-16">
      <Link to="/" className="inline-flex items-center gap-2 mb-12 text-gray-600 hover:text-brand-blue transition font-caveat text-2xl">
        <MoveLeft size={24} />
        Back to town
      </Link>
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row gap-12 items-center md:items-start max-w-5xl mx-auto">
        <div className="flex-1 w-full text-left">
          <h1 className="font-playfair text-4xl md:text-5xl font-extrabold italic text-brand-blue mb-6">Formal Resume</h1>
          <p className="text-xl leading-relaxed text-gray-700 mb-8 max-w-md">
            A comprehensive overview of my education, technical toolkit, and the digital experiences I've built.
          </p>

          <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue text-white font-bold rounded-xl shadow-[4px_4px_0_#222] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_#222] transition-all border-2 border-[#222] text-lg">
            <FileText size={20} />
            View / Download PDF
          </a>
        </div>
        
        <div className="flex-1 w-full relative group">
          <div className="absolute inset-0 bg-brand-yellow rounded-2xl transform translate-x-4 translate-y-4 shadow-sm"></div>
          <img src="/resume.png" alt="Resume Preview" className="relative z-10 w-full max-w-md mx-auto h-auto border-[3px] border-[#222] rounded-2xl bg-white shadow-md transition-transform duration-500 group-hover:-translate-y-1 group-hover:-translate-x-1" onError={(e) => e.target.style.display='none'} />
        </div>
      </motion.div>
    </div>
  );
}

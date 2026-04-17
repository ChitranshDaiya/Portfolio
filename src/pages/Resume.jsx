import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';

export default function Resume() {
  return (
    <div className="min-h-screen bg-brand-bg text-[#222] font-work p-8 md:p-16">
      <Link to="/" className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-brand-blue transition font-caveat text-2xl">
        <MoveLeft size={24} />
        Back to town
      </Link>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="font-playfair text-4xl md:text-5xl font-extrabold italic text-brand-blue mb-6">Something Professional</h1>
        <p className="text-xl leading-relaxed max-w-2xl text-gray-700 mb-8">
          Here is my formal resume detailing my background, education, and career experiences.
        </p>

        <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex px-8 py-4 bg-brand-yellow text-[#222] font-bold rounded-xl shadow-[4px_4px_0_#222] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#222] transition-all">
          View / Download PDF Resume
        </a>
      </motion.div>
    </div>
  );
}

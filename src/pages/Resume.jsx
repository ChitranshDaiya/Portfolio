import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MoveLeft,
  FileText,
  Palette,
  Code2,
  Layers3,
} from 'lucide-react';

export default function Resume() {
  const resumes = [
{
      title: "Frontend Resume",
      subtitle: "React Developer",
      description:
        "Focused on frontend development, React projects, and implementation skills.",
      icon: <Code2 className="w-8 h-8 text-green-600" />,
      file: "/Resume-Frontend.pdf",
      badge: "Development",
    },
    {
      title: "UI/UX Resume",
      subtitle: "Product & Experience Design",
      description:
        "Highlights visual design, storytelling, prototyping, and creative direction.",
      icon: <Palette className="w-8 h-8 text-orange-500" />,
      file: "/Resume-UIUX.pdf",
      badge: "Design",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-[#222] font-work p-8 md:p-16">
      <div className="max-w-5xl mx-auto">

        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-10 text-gray-600 hover:text-brand-blue transition font-caveat text-2xl"
        >
          <MoveLeft size={24} />
          Back to town
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h1 className="font-playfair text-4xl md:text-5xl font-extrabold italic text-brand-blue mb-5">
            Resume Vault
          </h1>

          <p className="text-xl leading-relaxed text-gray-700 max-w-2xl">
            Different opportunities call for different stories.
            Choose the version that best matches the role you're hiring for.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {resumes.map((resume, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              className="bg-white border-[3px] border-gray-200 rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-[#f9f2d7]/50 rounded-xl">
                  {resume.icon}
                </div>

                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#fdfaf6] border border-gray-200 text-gray-600">
                  {resume.badge}
                </span>
              </div>

              <h2 className="font-playfair text-2xl font-bold mb-2">
                {resume.title}
              </h2>

              <p className="font-semibold text-brand-blue mb-4">
                {resume.subtitle}
              </p>

              <p className="text-gray-700 leading-relaxed flex-grow">
                {resume.description}
              </p>

              <a
                href={resume.file}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-3 px-6 py-4 bg-brand-blue text-white font-bold rounded-xl shadow-[4px_4px_0_#222] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_#222] transition-all border-2 border-[#222]"
              >
                <FileText size={20} />
                View PDF
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
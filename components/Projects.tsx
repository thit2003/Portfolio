import React from 'react';
import { Project } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { ExternalLink, Github, MessageSquare, ScanFace, Database } from 'lucide-react';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "InfoNest",
      year: "2025",
      category: "Full-Stack Chatbot Website",
      description: "Built a responsive React chat UI with real-time messaging and secure auth (JWT/Google OAuth). Backend using Node.js/Express with Rasa NLU and Gemini API. Containerized with Docker and deployed on Render.",
      techStack: ["React", "Node.js", "Express", "Rasa NLU", "Gemini API", "Docker", "JWT"],
      link: "https://github.com/thit2003/InfoNest" // Placeholder link
    },
    {
      title: "AI Image Detection",
      year: "2024",
      category: "Computer Vision",
      description: "Built and trained a YOLOv11 object-detection pipeline in Python with data preprocessing and hyperparameter tuning. Optimized model performance and maintained codebase on GitHub.",
      techStack: ["Python", "YOLOv11", "OpenCV", "GitHub", "Data Preprocessing"],
      link: "https://github.com/thit2003/AI_Image_Detection"
    },
    {
      title: "Active Heaven",
      year: "2024",
      category: "Database Full Stack Website",
      description: "Developed responsive UI with HTML/CSS/JS. Implemented client-side logic and integrated back-end APIs. Focused on efficient database interaction.",
      techStack: ["HTML", "CSS", "JavaScript", "SQL", "REST API"],
      link: "https://github.com/thit2003/Data_Base_Project"
    }
  ];

  const getIcon = (title: string) => {
    if (title.includes("InfoNest")) return <MessageSquare className="w-6 h-6" />;
    if (title.includes("Image")) return <ScanFace className="w-6 h-6" />;
    return <Database className="w-6 h-6" />;
  };

  return (
    <section id="projects" className="py-24 px-6 relative z-10 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal width="100%">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                Featured Projects
              </span>
            </h2>
            <p className="text-slate-400 max-w-xl text-lg">
              A selection of recent work involving full-stack development, AI integration, and database management.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 200} width="100%">
              <div className="group relative h-full bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col">
                
                {/* Neon Glow Effect on Hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-colors">
                      {getIcon(project.title)}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-400 border border-white/5">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-purple-400 mb-4">{project.category}</p>
                  
                  <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <span key={tech} className="text-xs font-medium text-slate-500 px-2 py-1 rounded bg-slate-950 border border-slate-800">
                          #{tech}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={project.link} 
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-400 transition-colors mt-auto"
                    >
                      View Details <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { Code2, Globe, Cpu, Database, Layout, Brain } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { SkillCategory } from '../types';

const Skills: React.FC = () => {
  const skillsData: SkillCategory[] = [
    {
      title: "Core",
      icon: Code2,
      skills: ["Python", "Java", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Web & Tools",
      icon: Globe,
      skills: ["React", "Node.js", "Docker", "Figma", "GitHub", "MongoDB"]
    },
    {
      title: "Specialized",
      icon: Brain,
      skills: ["NLP", "Prompt Engineering", "Data Analytics", "Rasa NLU", "Gemini API"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal width="100%">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Technical Arsenal
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 150} width="100%">
              <div className="h-full bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-500 group hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 text-cyan-400 group-hover:text-white group-hover:from-cyan-500 group-hover:to-purple-600 transition-all duration-500">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
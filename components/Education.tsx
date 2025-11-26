import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal width="100%">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Education & Certifications
            </span>
          </h2>
        </ScrollReveal>

        <div className="space-y-8">
          {/* Degree */}
          <ScrollReveal width="100%">
            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-slate-900/60 to-slate-900/30 border border-white/10 backdrop-blur-lg hover:border-purple-500/30 transition-colors">
                <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-purple-900/30 items-center justify-center border border-purple-500/20 text-purple-400">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white">BSCS in Computer Science</h3>
                    <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 w-fit">
                      2023 - 2026
                    </span>
                  </div>
                  <h4 className="text-lg text-slate-300 mb-2">Assumption University of Thailand</h4>
                  <p className="text-slate-400 text-sm">
                    Focusing on advanced algorithms, software engineering principles, and artificial intelligence systems.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Certificates */}
          <ScrollReveal width="100%" delay={200}>
             <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-slate-900/60 to-slate-900/30 border border-white/10 backdrop-blur-lg hover:border-cyan-500/30 transition-colors">
                <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-cyan-900/30 items-center justify-center border border-cyan-500/20 text-cyan-400">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Certifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></div>
                      <p className="text-slate-300">
                        <span className="font-semibold text-white">Coursera Algorithmic Toolbox</span>
                        <br />
                        <span className="text-sm text-slate-500">University of California San Diego</span>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></div>
                      <p className="text-slate-300">
                        <span className="font-semibold text-white">HTML, CSS, and Javascript for Web Developers</span>
                        <br />
                        <span className="text-sm text-slate-500">Johns Hopkins University</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Computer Science Student | Full-Stack Developer | AI Enthusiast";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 50); // Speed of typing

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 px-6 overflow-hidden">
      
      {/* Background Blobs (Local to Hero for specific effect) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-4xl mx-auto text-center z-10 space-y-8">
        
        {/* Intro Tag */}
        <div className="inline-block animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
           <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-sm font-medium tracking-wide">
             Available for opportunities
           </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Thit Lwin Win Thant</span>
        </h1>

        {/* Typewriter Tagline */}
        <div className="h-8 md:h-10">
          <p className="text-xl md:text-2xl text-slate-400 font-mono">
            {text}
            <span className={`inline-block w-2 h-6 md:h-8 bg-cyan-400 ml-1 align-middle ${isTypingComplete ? 'animate-pulse' : ''}`}></span>
          </p>
        </div>

        {/* Bio */}
        <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed text-lg animate-fade-in-up opacity-0" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
          Motivated Computer Science student at Assumption University of Thailand (2023-2026). Experienced in full-stack development, UI/UX design, and database administration. Proficient in Python, Java, JavaScript, Docker, and Figma.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up opacity-0" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
          <button 
            onClick={scrollToProjects}
            className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation-name: fade-in-up;
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
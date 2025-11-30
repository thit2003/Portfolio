import React from 'react';
import { Mail, Phone, MapPin, Download, Linkedin, Github } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 relative z-10 border-t border-white/5 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal width="100%">
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
            
            {/* Decorative BG */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="space-y-6 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Let's Connect</h2>
                <p className="text-slate-400 max-w-sm">
                  I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start gap-4 text-slate-300 hover:text-cyan-400 transition-colors">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:tlwt2003@gmail.com">tlwt2003@gmail.com</a>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-4 text-slate-300">
                    <Phone className="w-5 h-5" />
                    <span>+669-611-25594</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-4 text-slate-300">
                    <MapPin className="w-5 h-5" />
                    <span>Bangkok, Thailand</span>
                  </div>
                </div>

                <div className="flex justify-center md:justify-start gap-4 pt-4">
                  <a href="https://github.com/thit2003" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/thit-lwin-win-thant-49b174383/" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6">
                 {/* Styled as a glass card roughly simulating a contact card */}
                 <div className="w-full md:w-64 p-6 bg-black/20 rounded-xl border border-white/5 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 mb-4 p-1">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-2xl font-bold text-white overflow-hidden">
                            <img
                              src="./images/My profile.png"
                              alt="TL"
                              className="w-full h-full object-cover rounded-full"
                              loading="lazy"
                            />
                        </div>
                    </div>
                    <h3 className="text-white font-bold mb-1">Thit Lwin Win Thant</h3>
                    <p className="text-xs text-slate-400 mb-6">Full Stack Developer</p>
                    
                    <a
                      href="./images/Professional Resume.pdf"
                      download
                      role="button"
                      className="w-full py-3 px-4 bg-white text-slate-900 rounded-lg font-bold hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download Resume
                    </a>
                 </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-slate-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Thit Lwin Win Thant. All rights reserved.</p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Contact;
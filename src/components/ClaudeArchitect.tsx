import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { claudeExam } from '../data/quiz';
import { courses, certs } from '../data/courses';
import { UserProgress } from '../types';

export default function ClaudeArchitect({ progress, updateProgress }: { progress: UserProgress, updateProgress: (p: UserProgress) => void }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const q = claudeExam[currentQ];
  const isComplete = currentQ >= claudeExam.length;

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    if (idx === q.answer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowResult(false);
    
    if (currentQ === claudeExam.length - 1) {
      updateProgress({ ...progress, claudeScore: score + (selected === q.answer ? 1 : 0) });
    }
    setCurrentQ(c => c + 1);
  };

  return (
    <div className="max-w-4xl mx-auto py-2">
      
      <div className="mt-2 p-6 bg-indigo-950/30 border border-indigo-900/50 rounded-2xl mb-8">
        <div className="flex items-center gap-3 mb-3">
           <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">★</div>
           <h2 className="text-xl font-bold text-amber-100">Claude Architect Track</h2>
        </div>
        <p className="text-sm leading-relaxed text-indigo-200/80 mb-5 max-w-2xl">
          While Anthropic does not currently offer an official certification natively, this track prepares you for the advanced architectural patterns required to orchestrate Claude 3 in enterprise environments. It covers Constitutional AI, token-optimized prompting via XML, and complex tool-use (MCP).
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://docs.anthropic.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-indigo-900/80 hover:bg-indigo-800 border border-indigo-700/50 px-4 py-2 rounded text-xs transition-colors text-indigo-100 font-medium">
            Official Claude Docs <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Practice Exam Section */}
        <section className="flex flex-col gap-4 bg-gray-900/50 p-5 rounded-2xl border border-gray-800">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Practice Exam</h3>
          
          {(isComplete || progress.claudeScore !== null) ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 bg-gray-800/80 rounded-xl border border-gray-700 text-center">
              <h4 className="font-medium text-sm text-gray-300 mb-2">Exam Result</h4>
              <p className="text-3xl font-bold text-emerald-400 mb-6">{progress.claudeScore ?? score} / {claudeExam.length}</p>
              <button 
                onClick={() => { setCurrentQ(0); setScore(0); updateProgress({ ...progress, claudeScore: null }); }} 
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-xs transition-colors text-white font-medium"
              >
                Retake Exam
              </button>
            </motion.div>
          ) : (
             <motion.div 
               key={q.id}
               initial={{ opacity: 0, x: 10 }}
               animate={{ opacity: 1, x: 0 }}
             >
               <p className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-3">Question {currentQ + 1} of {claudeExam.length}</p>
               <h4 className="text-sm text-gray-200 font-medium mb-5 leading-snug">{q.question}</h4>
               
               <div className="space-y-2">
                 {q.options.map((option, idx) => {
                   const isSelected = selected === idx;
                   const isCorrect = idx === q.answer;
                   const reveal = showResult;
                   
                   let btnClass = "w-full text-left p-3 rounded-lg border text-sm transition-all duration-200 ";
                   if (!reveal) {
                     btnClass += isSelected ? "border-amber-500/50 bg-amber-500/10 text-amber-100" : "border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600 hover:text-gray-300";
                   } else {
                     if (isCorrect) btnClass += "border-emerald-500 bg-emerald-900/20 text-emerald-200";
                     else if (isSelected) btnClass += "border-rose-500 bg-rose-900/20 text-rose-200";
                     else btnClass += "border-gray-800 bg-gray-800/20 text-gray-600";
                   }

                   return (
                     <button key={idx} onClick={() => handleSelect(idx)} disabled={showResult} className={btnClass}>
                       <span>{option}</span>
                     </button>
                   );
                 })}
               </div>

               {showResult && (
                 <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-5 pt-5 border-t border-gray-800 overflow-hidden">
                   <div className="mb-5">
                     <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">Explanation</span>
                     <p className="text-xs text-gray-400 leading-relaxed">{q.explanation}</p>
                   </div>
                   <button onClick={handleNext} className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition text-xs font-medium">
                     {currentQ === claudeExam.length - 1 ? 'Finish Exam' : 'Next Question'}
                   </button>
                 </motion.div>
               )}
             </motion.div>
          )}
        </section>

        {/* Other Certifications */}
        <section className="flex flex-col gap-4 bg-gray-900/50 p-5 rounded-2xl border border-gray-800">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Other Certifications</h3>
          <div className="space-y-3">
            {certs.filter(c => c.id !== 'cert1').map(cert => (
              <a 
                key={cert.id} 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group p-4 bg-gray-800/80 rounded-xl border border-gray-700 hover:border-indigo-500/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-sm text-gray-200 group-hover:text-indigo-300 transition">{cert.title}</h4>
                  <ExternalLink className="w-3 h-3 text-gray-600 group-hover:text-indigo-400 mt-1" />
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{cert.description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

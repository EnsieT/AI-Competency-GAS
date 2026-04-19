import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2, PlayCircle, BookOpen } from 'lucide-react';
import { copilotExam, copilotConcepts, copilotCourses } from '../data/specializations';
import { UserProgress } from '../types';

export default function CopilotStudio({ progress, updateProgress }: { progress: UserProgress, updateProgress: (p: UserProgress) => void }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const q = copilotExam[currentQ];
  const isComplete = currentQ >= copilotExam.length;

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
    
    if (currentQ === copilotExam.length - 1) {
      updateProgress({ ...progress, copilotScore: score + (selected === q.answer ? 1 : 0) });
    }
    setCurrentQ(c => c + 1);
  };

  const handleMarkConcept = (id: string) => {
    if (!progress.readConcepts.includes(id)) {
      updateProgress({ ...progress, readConcepts: [...progress.readConcepts, id] });
    }
  };

  const handleMarkCourse = (id: string) => {
    if (!progress.completedCourses.includes(id)) {
      updateProgress({ ...progress, completedCourses: [...progress.completedCourses, id] });
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-2">
      
      <div className="mt-2 p-6 bg-blue-950/30 border border-blue-900/50 rounded-2xl mb-8">
        <div className="flex items-center gap-3 mb-3">
           <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">🤖</div>
           <h2 className="text-xl font-bold text-blue-100">Create Agents in Copilot Studio</h2>
        </div>
        <p className="text-sm leading-relaxed text-blue-200/80 mb-5 max-w-2xl">
          Designed for developers building with the Microsoft applied skills credential. This track covers Topics, Triggers, Generative Answers, and Power Platform integrations essential for creating intelligent agents in Copilot Studio.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://learn.microsoft.com/en-us/credentials/applied-skills/create-agents-in-microsoft-copilot-studio/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-900/80 hover:bg-blue-800 border border-blue-700/50 px-4 py-2 rounded text-xs transition-colors text-blue-100 font-medium">
            Official Credential Details <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
         {/* Concepts Section */}
         <section className="flex flex-col gap-4">
           <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Core Concepts</h3>
           {copilotConcepts.map(concept => {
             const isRead = progress.readConcepts.includes(concept.id);
             return (
               <div key={concept.id} className="p-5 bg-gray-900/50 rounded-2xl border border-gray-800 group transition-all">
                 <div className="flex justify-between items-start mb-2">
                   <h4 className="font-medium text-sm text-gray-200 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                     <BookOpen className="w-4 h-4 text-blue-500/50" />
                     {concept.title}
                   </h4>
                   {isRead && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                 </div>
                 <p className="text-xs text-gray-400 leading-relaxed mb-4">{concept.description}</p>
                 {!isRead && (
                   <button onClick={() => handleMarkConcept(concept.id)} className="text-[10px] uppercase tracking-widest font-bold text-indigo-400 hover:text-indigo-300">
                     Mark as Understood
                   </button>
                 )}
               </div>
             );
           })}
         </section>

         {/* Learning Path Section */}
         <section className="flex flex-col gap-4">
           <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Learning Path</h3>
           {copilotCourses.map(course => {
             const isCompleted = progress.completedCourses.includes(course.id);
             return (
               <div key={course.id} className={`p-4 rounded-xl border ${isCompleted ? 'bg-emerald-900/10 border-emerald-900/30' : 'bg-gray-900/50 border-gray-800'}`}>
                 <div className="flex justify-between items-start mb-2">
                   <a href={course.url} target="_blank" rel="noopener noreferrer" className="font-medium text-sm text-indigo-300 hover:text-indigo-200 transition-colors">
                     {course.title}
                   </a>
                   {isCompleted ? <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> : <PlayCircle className="w-4 h-4 text-gray-600 flex-shrink-0" />}
                 </div>
                 <p className="text-xs text-gray-500 leading-relaxed mb-4">{course.description}</p>
                 {!isCompleted && (
                   <button onClick={() => handleMarkCourse(course.id)} className="text-[10px] uppercase font-bold tracking-widest text-indigo-400 hover:text-indigo-300">
                      Mark Completed
                   </button>
                 )}
               </div>
             );
           })}
         </section>
      </div>

      {/* Practice Exam Section */}
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 border-t border-gray-800 pt-8 mt-8">Practice Exam Module</h3>
      <section className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 max-w-2xl">
        {(isComplete || progress.copilotScore !== null) ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 bg-gray-800/80 rounded-xl border border-gray-700 text-center">
            <h4 className="font-medium text-sm text-gray-300 mb-2">Exam Result</h4>
            <p className="text-3xl font-bold text-emerald-400 mb-6">{progress.copilotScore ?? score} / {copilotExam.length}</p>
            <button 
              onClick={() => { setCurrentQ(0); setScore(0); updateProgress({ ...progress, copilotScore: null }); }} 
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
             <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-3">Question {currentQ + 1} of {copilotExam.length}</p>
             <h4 className="text-sm text-gray-200 font-medium mb-5 leading-snug">{q.question}</h4>
             
             <div className="space-y-2">
               {q.options.map((option, idx) => {
                 const isSelected = selected === idx;
                 const isCorrect = idx === q.answer;
                 const reveal = showResult;
                 
                 let btnClass = "w-full text-left p-3 rounded-lg border text-sm transition-all duration-200 ";
                 if (!reveal) {
                   btnClass += isSelected ? "border-blue-500/50 bg-blue-500/10 text-blue-100" : "border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600 hover:text-gray-300";
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
                 <button onClick={handleNext} className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition text-xs font-medium">
                   {currentQ === copilotExam.length - 1 ? 'Finish Exam' : 'Next Question'}
                 </button>
               </motion.div>
             )}
           </motion.div>
        )}
      </section>

    </div>
  );
}

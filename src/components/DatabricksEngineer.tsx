import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2, PlayCircle, BookOpen } from 'lucide-react';
import { databricksExam, databricksConcepts, databricksCourses } from '../data/specializations';
import { UserProgress } from '../types';

export default function DatabricksEngineer({ progress, updateProgress }: { progress: UserProgress, updateProgress: (p: UserProgress) => void }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const q = databricksExam[currentQ];
  const isComplete = currentQ >= databricksExam.length;

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
    
    if (currentQ === databricksExam.length - 1) {
      updateProgress({ ...progress, databricksScore: score + (selected === q.answer ? 1 : 0) });
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
      
      <div className="mt-2 p-6 bg-red-950/30 border border-red-900/50 rounded-2xl mb-8">
        <div className="flex items-center gap-3 mb-3">
           <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">🧱</div>
           <h2 className="text-xl font-bold text-red-100">Databricks Data Engineer Track</h2>
        </div>
        <p className="text-sm leading-relaxed text-red-200/80 mb-5 max-w-2xl">
          Designed for data professionals taking the Databricks Certified Data Engineer Associate exam. This track prepares you for building Medallion Architecture data pipelines using Delta Lake, Apache Spark, and Unity Catalog.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://credentials.databricks.com/data-engineer-associate" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-900/80 hover:bg-red-800 border border-red-700/50 px-4 py-2 rounded text-xs transition-colors text-red-100 font-medium">
            Official Exam Guide <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
         <section className="flex flex-col gap-4">
           <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Core Concepts</h3>
           {databricksConcepts.map(concept => {
             const isRead = progress.readConcepts.includes(concept.id);
             return (
               <div key={concept.id} className="p-5 bg-gray-900/50 rounded-2xl border border-gray-800 group transition-all">
                 <div className="flex justify-between items-start mb-2">
                   <h4 className="font-medium text-sm text-gray-200 group-hover:text-red-400 transition-colors flex items-center gap-2">
                     <BookOpen className="w-4 h-4 text-red-500/50" />
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

         <section className="flex flex-col gap-4">
           <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Learning Path</h3>
           {databricksCourses.map(course => {
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

      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 border-t border-gray-800 pt-8 mt-8">Practice Exam Module</h3>
      <section className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 max-w-2xl">
        {(isComplete || progress.databricksScore !== null && progress.databricksScore !== undefined) ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 bg-gray-800/80 rounded-xl border border-gray-700 text-center">
            <h4 className="font-medium text-sm text-gray-300 mb-2">Exam Result</h4>
            <p className="text-3xl font-bold text-emerald-400 mb-6">{progress.databricksScore ?? score} / {databricksExam.length}</p>
            <button 
              onClick={() => { setCurrentQ(0); setScore(0); updateProgress({ ...progress, databricksScore: null }); }} 
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
             <p className="text-[10px] uppercase tracking-widest text-red-400 font-bold mb-3">Question {currentQ + 1} of {databricksExam.length}</p>
             <h4 className="text-sm text-gray-200 font-medium mb-5 leading-snug">{q.question}</h4>
             
             <div className="space-y-2">
               {q.options.map((option, idx) => {
                 const isSelected = selected === idx;
                 const isCorrect = idx === q.answer;
                 const reveal = showResult;
                 
                 let btnClass = "w-full text-left p-3 rounded-lg border text-sm transition-all duration-200 ";
                 if (!reveal) {
                   btnClass += isSelected ? "border-red-500/50 bg-red-500/10 text-red-100" : "border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600 hover:text-gray-300";
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
                 <button onClick={handleNext} className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition text-xs font-medium">
                   {currentQ === databricksExam.length - 1 ? 'Finish Exam' : 'Next Question'}
                 </button>
               </motion.div>
             )}
           </motion.div>
        )}
      </section>

    </div>
  );
}

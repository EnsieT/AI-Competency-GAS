import { UserProgress } from '../types';
import { motion } from 'motion/react';
import { CheckSquare, BookOpen, Presentation, Star } from 'lucide-react';
import { concepts } from '../data/concepts';
import { courses } from '../data/courses';

export default function Dashboard({ progress, setTab }: { progress: UserProgress, setTab: (tab: string) => void }) {
  const conceptsReadCount = progress.readConcepts.length;
  const totalConcepts = concepts.length;
  const conceptsProgress = Math.round((conceptsReadCount / totalConcepts) * 100);

  const coursesDoneCount = progress.completedCourses.length;
  const totalCourses = courses.length;
  
  const testTaken = progress.competencyScore !== null;
  const claudeTestTaken = progress.claudeScore !== null;

  return (
    <div className="max-w-4xl mx-auto py-2">
      <header className="flex justify-between items-end border-b border-gray-800 pb-4 mb-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white mb-1">Overview Dashboard</h2>
          <p className="text-sm text-gray-500">Track your journey to becoming a certified AI Architect.</p>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Competency Card */}
        <section className="flex flex-col gap-4 bg-gray-900/50 p-5 rounded-2xl border border-gray-800 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Foundation Track</h2>
            
            <div className="p-4 bg-gray-800/80 rounded-xl border-l-4 border-indigo-500 mb-4 h-32 flex flex-col justify-center">
               <h3 className="font-medium text-sm text-white mb-1">General AI Competency</h3>
               {testTaken ? (
                 <p className="text-xs text-gray-400 mb-2">Score: <span className="text-indigo-400 font-bold">{progress.competencyScore} / 4</span></p>
               ) : (
                 <p className="text-xs text-gray-400 mb-2">Assess your knowledge across RAG, embeddings, and prompting.</p>
               )}
            </div>
            
            <button 
              onClick={() => setTab('test')} 
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded text-xs transition-colors text-white font-medium"
            >
              {testTaken ? 'Retake Assessment' : 'Start Assessment'}
            </button>
          </div>
        </section>

        {/* Claude Architect Card */}
        <section className="flex flex-col gap-4 bg-gray-900/50 p-5 rounded-2xl border border-gray-800 relative overflow-hidden">
             <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Specialization Track</h2>
             
             <div className="p-4 bg-indigo-950/30 border border-indigo-900/50 rounded-xl mb-4 h-32 flex flex-col justify-center">
                 <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500"><Star className="w-4 h-4" /></div>
                   <h3 className="text-sm font-bold text-amber-100">Claude Architect</h3>
                 </div>
                 {claudeTestTaken ? (
                    <p className="text-[11px] leading-relaxed text-indigo-200/70">Practice exam score: <span className="text-amber-400 font-bold">{progress.claudeScore} / 2</span></p>
                 ) : (
                    <p className="text-[11px] leading-relaxed text-indigo-200/70">Specialized track for high-tier agents and Constitutional AI design.</p>
                 )}
             </div>
            
            <button 
              onClick={() => setTab('claude')} 
              className="px-4 py-2 bg-indigo-900/80 hover:bg-indigo-800 border border-indigo-700/50 rounded text-xs transition-colors text-indigo-100 font-medium self-start"
            >
              View Track
            </button>
        </section>
      </div>

      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Progress Analytics</h3>
      <div className="grid md:grid-cols-2 gap-6">
        
        <div className="bg-gray-900/50 p-5 rounded-2xl border border-gray-800 flex items-start gap-4">
          <div className="w-10 h-10 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="flex-grow">
            <h4 className="font-medium text-sm text-gray-200 mb-1">Concepts Mastered</h4>
            <div className="flex justify-between text-xs text-gray-500 mb-3">
              <span>{conceptsReadCount} of {totalConcepts}</span>
              <span className="text-emerald-400 font-bold">{conceptsProgress}%</span>
            </div>
            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden border border-gray-700">
              <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full transition-all duration-1000" style={{ width: `${conceptsProgress}%` }} />
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 p-5 rounded-2xl border border-gray-800 flex items-start gap-4">
          <div className="w-10 h-10 rounded border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
            <Presentation className="w-5 h-5 text-indigo-400" />
          </div>
          <div className="flex-grow">
            <h4 className="font-medium text-sm text-gray-200 mb-1">Courses Completed</h4>
            <div className="flex justify-between text-xs text-gray-500 mb-3">
              <span>{coursesDoneCount} of {totalCourses}</span>
              <span className="text-indigo-400 font-bold">{Math.round((coursesDoneCount/totalCourses)*100 || 0)}%</span>
            </div>
            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden border border-gray-700">
              <div 
                className="h-full bg-gradient-to-r from-indigo-700 to-indigo-400 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.5)] transition-all duration-1000" 
                style={{ width: `${(coursesDoneCount/totalCourses)*100 || 0}%` }} 
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

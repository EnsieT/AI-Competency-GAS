import { UserProgress } from '../types';
import { motion } from 'motion/react';
import { CheckSquare, BookOpen, Presentation, Star, Terminal, GraduationCap } from 'lucide-react';
import { concepts } from '../data/concepts';
import { courses } from '../data/courses';
import { quizQuestions } from '../data/quiz';
import { projects } from '../data/projects';
import { claudeExam, copilotExam, databricksExam } from '../data/specializations';

export default function Dashboard({ progress, setTab }: { progress: UserProgress, setTab: (tab: string) => void }) {
  const conceptsReadCount = progress.readConcepts.length;
  const totalConcepts = concepts.length;
  const conceptsProgress = Math.round((conceptsReadCount / totalConcepts) * 100);

  const coursesDoneCount = progress.completedCourses.length;
  const totalCourses = courses.length;
  
  const projectsDoneCount = progress.completedProjects?.length || 0;
  const totalProjects = projects.length;
  
  const testTaken = progress.competencyScore !== null;
  const claudeTestTaken = progress.claudeScore !== null;

  const weakTopics = progress.topicScores ? Object.entries(progress.topicScores).filter(([_, stats]) => (stats.correct/stats.total) < 0.6).map(t => t[0]) : [];

  return (
    <div className="max-w-4xl mx-auto py-2">
      <header className="flex justify-between items-end border-b border-gray-800 pb-4 mb-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white mb-1">Overview Dashboard</h2>
          <p className="text-sm text-gray-500">Track your journey to becoming a certified AI Architect.</p>
        </div>
      </header>

      {testTaken && weakTopics.length > 0 && (
         <div className="mb-8 p-4 bg-amber-950/20 border border-amber-900/50 rounded-xl flex items-start gap-4">
            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500 shrink-0">
               <GraduationCap className="w-5 h-5" />
            </div>
            <div>
               <h4 className="text-sm font-semibold text-amber-200 mb-1">Focus Areas Identified</h4>
               <p className="text-xs text-amber-100/70 mb-2">Your test results indicate you should prioritize courses covering:</p>
               <div className="flex gap-2 flex-wrap">
                 {weakTopics.map(t => (
                   <span key={t} className="px-2 py-0.5 rounded border border-amber-700/50 bg-amber-900/30 text-[10px] uppercase font-bold tracking-wider text-amber-400">{t}</span>
                 ))}
               </div>
            </div>
         </div>
      )}

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <section className="flex flex-col gap-4 bg-gray-900/50 p-5 rounded-2xl border border-gray-800 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Foundation Track</h2>
            
            <div className="p-4 bg-gray-800/80 rounded-xl border-l-4 border-indigo-500 mb-4 flex flex-col justify-center min-h-[120px]">
               <h3 className="font-medium text-sm text-white mb-1">General AI Competency</h3>
               {testTaken ? (
                 <p className="text-xs text-gray-400 mb-2">Score: <span className="text-indigo-400 font-bold">{progress.competencyScore} / {quizQuestions.length}</span></p>
               ) : (
                 <p className="text-xs text-gray-400 mb-2">Assess your knowledge across RAG, embeddings, and prompting.</p>
               )}
            </div>
            
            <button 
              onClick={() => setTab('test')} 
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded text-xs transition-colors text-white font-medium self-start"
            >
              {testTaken ? 'Retake Assessment' : 'Start Assessment'}
            </button>
          </div>
        </section>

        <section className="flex flex-col gap-4 bg-gray-900/50 p-5 rounded-2xl border border-gray-800 relative overflow-hidden">
             <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Specialization Track</h2>
             
             <div className="p-4 bg-indigo-950/30 border border-indigo-900/50 rounded-xl mb-4 flex flex-col justify-center min-h-[120px]">
                 <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500"><Star className="w-4 h-4" /></div>
                   <h3 className="text-sm font-bold text-amber-100">Claude Architect</h3>
                 </div>
                 {claudeTestTaken ? (
                    <p className="text-[11px] leading-relaxed text-indigo-200/70">Practice exam score: <span className="text-amber-400 font-bold">{progress.claudeScore} / {claudeExam.length}</span></p>
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

      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 border-t border-gray-800 pt-8">Progress Analytics</h3>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-900/50 p-5 rounded-2xl border border-gray-800 flex flex-col gap-4">
          <div className="w-10 h-10 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h4 className="font-medium text-sm text-gray-200 mb-1">Concepts</h4>
            <div className="flex justify-between text-xs text-gray-500 mb-3">
              <span>{conceptsReadCount}/{totalConcepts}</span>
              <span className="text-emerald-400 font-bold">{conceptsProgress || 0}%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden border border-gray-700">
              <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000" style={{ width: `${conceptsProgress || 0}%` }} />
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 p-5 rounded-2xl border border-gray-800 flex flex-col gap-4">
          <div className="w-10 h-10 rounded border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center">
            <Presentation className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <h4 className="font-medium text-sm text-gray-200 mb-1">Courses</h4>
            <div className="flex justify-between text-xs text-gray-500 mb-3">
              <span>{coursesDoneCount}/{totalCourses}</span>
              <span className="text-indigo-400 font-bold">{Math.round((coursesDoneCount/totalCourses)*100 || 0)}%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden border border-gray-700">
              <div 
                className="h-full bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(129,140,248,0.5)] transition-all duration-1000" 
                style={{ width: `${(coursesDoneCount/totalCourses)*100 || 0}%` }} 
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 p-5 rounded-2xl border border-gray-800 flex flex-col gap-4">
          <div className="w-10 h-10 rounded border border-rose-500/30 bg-rose-500/10 flex items-center justify-center">
            <Terminal className="w-5 h-5 text-rose-400" />
          </div>
          <div>
            <h4 className="font-medium text-sm text-gray-200 mb-1">Projects Built</h4>
            <div className="flex justify-between text-xs text-gray-500 mb-3">
              <span>{projectsDoneCount}/{totalProjects}</span>
              <span className="text-rose-400 font-bold">{Math.round((projectsDoneCount/totalProjects)*100 || 0)}%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden border border-gray-700">
              <div 
                className="h-full bg-rose-500 rounded-full transition-all duration-1000" 
                style={{ width: `${(projectsDoneCount/totalProjects)*100 || 0}%` }} 
              />
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 border-t border-gray-800 pt-8">Specialization Tracks</h3>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between items-start gap-4">
          <div>
            <h3 className="text-sm font-medium text-amber-100 flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-amber-500" /> Claude Architect
            </h3>
            <p className="text-xs leading-relaxed text-gray-400 mb-2">
              Advanced reasoning and structure for the Anthropic ecosystem.
            </p>
            {progress.claudeScore !== null && <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Score: {progress.claudeScore}/{claudeExam.length}</p>}
          </div>
          <button 
            onClick={() => setTab('claude')}
            className="w-full bg-indigo-600/90 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition text-xs font-medium shadow-[0_0_15px_rgba(79,70,229,0.2)]"
          >
            {progress.claudeScore !== null ? 'Review Track' : 'Start Track'}
          </button>
        </div>

        <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between items-start gap-4">
          <div>
            <h3 className="text-sm font-medium text-blue-100 flex items-center gap-2 mb-2">
              <span className="text-blue-500">🤖</span> Copilot Studio
            </h3>
            <p className="text-xs leading-relaxed text-gray-400 mb-2">
              Applied skills to build conversational agents with Microsoft.
            </p>
            {progress.copilotScore !== null && progress.copilotScore !== undefined && <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Score: {progress.copilotScore}/{copilotExam.length}</p>}
          </div>
          <button 
            onClick={() => setTab('copilot')}
            className="w-full bg-blue-600/90 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition text-xs font-medium shadow-[0_0_15px_rgba(37,99,235,0.2)]"
          >
            {progress.copilotScore !== null && progress.copilotScore !== undefined ? 'Review Track' : 'Start Track'}
          </button>
        </div>

        <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between items-start gap-4">
          <div>
            <h3 className="text-sm font-medium text-red-100 flex items-center gap-2 mb-2">
              <span className="text-red-500">🧱</span> Databricks Data Eng.
            </h3>
            <p className="text-xs leading-relaxed text-gray-400 mb-2">
              Medallion streaming pipelines, Unity Catalog, and Lakehouse architectures.
            </p>
            {progress.databricksScore !== null && progress.databricksScore !== undefined && <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Score: {progress.databricksScore}/{databricksExam.length}</p>}
          </div>
          <button 
            onClick={() => setTab('databricks')}
            className="w-full bg-red-600/90 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition text-xs font-medium shadow-[0_0_15px_rgba(220,38,38,0.2)]"
          >
            {progress.databricksScore !== null && progress.databricksScore !== undefined ? 'Review Track' : 'Start Track'}
          </button>
        </div>
      </div>

    </div>
  );
}

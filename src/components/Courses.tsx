import { courses } from '../data/courses';
import { UserProgress } from '../types';
import { PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Courses({ progress, updateProgress }: { progress: UserProgress, updateProgress: (p: UserProgress) => void }) {
  const score = progress.competencyScore;
  const isBeginner = score !== null && score < 2;
  const isIntermediate = score !== null && score >= 2 && score <= 3;
  
  const recommendedCourses = courses.filter(c => {
    if (score === null) return true; 
    if (isBeginner) return c.level === 'Beginner' || c.level === 'Intermediate';
    if (isIntermediate) return c.level !== 'Beginner';
    return c.level === 'Advanced';
  });

  const handleMarkComplete = (id: string) => {
    if (!progress.completedCourses.includes(id)) {
      updateProgress({ ...progress, completedCourses: [...progress.completedCourses, id] });
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-2">
      <header className="border-b border-gray-800 pb-4 mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white mb-1">Learning Path Suggestions</h2>
        {score !== null ? (
          <p className="text-sm text-indigo-300 mt-2">
            Based on your test score ({score}/4), we've filtered this list to best match your current level.
          </p>
        ) : (
          <p className="text-sm text-gray-500 mt-2">Take the Competency Test to get personalized recommendations.</p>
        )}
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {recommendedCourses.map((c, i) => {
          const isDone = progress.completedCourses.includes(c.id);
          return (
            <motion.div 
              key={c.id} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col gap-4 p-5 rounded-2xl border transition-all ${isDone ? 'bg-gray-900/30 border-gray-800/50 opacity-60' : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'}`}
            >
              <div className="flex gap-2 mb-1">
                <span className="text-[9px] font-bold uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 px-2 py-0.5 rounded">
                  {c.level}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider bg-gray-800 border border-gray-700 text-gray-400 px-2 py-0.5 rounded">
                  {c.topic}
                </span>
              </div>
              
              <h3 className="text-sm font-medium text-gray-200">{c.title}</h3>
              <p className="text-[12px] text-gray-400 leading-relaxed flex-grow">{c.description}</p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
                <a 
                  href={c.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition"
                  onClick={() => handleMarkComplete(c.id)}
                >
                  <PlayCircle className="w-4 h-4" />
                  Watch Tutorial 
                </a>
                
                {isDone && <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Completed</span>}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

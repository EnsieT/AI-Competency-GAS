import { courses } from '../data/courses';
import { UserProgress } from '../types';
import { PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Courses({ progress, updateProgress }: { progress: UserProgress, updateProgress: (p: UserProgress) => void }) {
  const score = progress.competencyScore;
  const topicScores = progress.topicScores || {};
  
  // Sort courses by giving priority to topics where the user scored poorly
  // If no test taken, just show all in default order.
  const recommendedCourses = [...courses].sort((a, b) => {
    if (!score) return 0;
    const aStats = topicScores[a.topic];
    const bStats = topicScores[b.topic];
    const aRatio = aStats ? aStats.correct / aStats.total : 1; // Default to 1 (good) if topic missing from test
    const bRatio = bStats ? bStats.correct / bStats.total : 1;
    return aRatio - bRatio; // lower ratio (worse performance) goes first
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
            Based on your test results, we've prioritized courses for areas where you need the most improvement.
          </p>
        ) : (
          <p className="text-sm text-gray-500 mt-2">Take the Competency Test to get personalized priority recommendations.</p>
        )}
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {recommendedCourses.map((c, i) => {
          const isDone = progress.completedCourses.includes(c.id);
          const needsImprovement = score !== null && topicScores[c.topic] && (topicScores[c.topic].correct / topicScores[c.topic].total) < 0.6;
          
          return (
            <motion.div 
              key={c.id} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col gap-4 p-5 rounded-2xl border transition-all ${
                isDone 
                  ? 'bg-gray-900/30 border-gray-800/50 opacity-60' 
                  : needsImprovement 
                    ? 'bg-amber-950/20 border-amber-900/50 hover:border-amber-700/50'
                    : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
              }`}
            >
              <div className="flex gap-2 mb-1 items-center">
                <span className="text-[9px] font-bold uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 px-2 py-0.5 rounded">
                  {c.level}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider bg-gray-800 border border-gray-700 text-gray-400 px-2 py-0.5 rounded">
                  {c.topic}
                </span>
                {needsImprovement && !isDone && (
                  <span className="ml-auto text-[9px] font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" /> Focus Area
                  </span>
                )}
              </div>
              
              <h3 className="text-sm font-medium text-gray-200">{c.title}</h3>
              <p className="text-[12px] text-gray-400 leading-relaxed flex-grow">{c.description}</p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800/50">
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

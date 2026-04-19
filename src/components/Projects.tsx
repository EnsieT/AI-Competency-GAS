import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { UserProgress } from '../types';
import { Terminal, CheckCircle2 } from 'lucide-react';

export default function Projects({ progress, updateProgress }: { progress: UserProgress, updateProgress: (p: UserProgress) => void }) {
  
  const handleMarkComplete = (id: string) => {
    if (!progress.completedProjects?.includes(id)) {
      updateProgress({ 
        ...progress, 
        completedProjects: [...(progress.completedProjects || []), id] 
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-2">
      <header className="border-b border-gray-800 pb-4 mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white mb-1">Real-World Projects</h2>
        <p className="text-sm text-gray-500">Apply your knowledge by building these mini-projects.</p>
      </header>

      <div className="grid gap-6">
        {projects.map((proj, i) => {
          const isDone = progress.completedProjects?.includes(proj.id);
          
          return (
            <motion.div 
              key={proj.id} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col md:flex-row gap-6 p-6 rounded-2xl border transition-all ${
                isDone ? 'bg-emerald-950/20 border-emerald-900/30' : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
              }`}
            >
              <div className="hidden md:flex flex-col items-center justify-center p-4 bg-gray-950 rounded-xl border border-gray-800/50 min-w-[100px]">
                {isDone ? (
                  <CheckCircle2 className="w-8 h-8 text-emerald-500 mb-2" />
                ) : (
                  <Terminal className="w-8 h-8 text-indigo-400 mb-2" />
                )}
                <span className={`text-[10px] font-bold uppercase tracking-wider ${isDone ? 'text-emerald-500' : 'text-gray-500'}`}>
                  {isDone ? 'Done' : 'Project'}
                </span>
              </div>
              
              <div className="flex-grow">
                <div className="flex gap-2 mb-2">
                  <span className="text-[9px] font-bold uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 px-2 py-0.5 rounded">
                    {proj.level}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-wider bg-gray-800 border border-gray-700 text-gray-400 px-2 py-0.5 rounded">
                    {proj.topic}
                  </span>
                </div>
                
                <h3 className="text-lg font-medium text-gray-200 mb-2">{proj.title}</h3>
                <p className="text-[13px] text-gray-400 leading-relaxed max-w-2xl mb-4">{proj.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 rounded bg-gray-800/80 text-gray-500 border border-gray-800">#{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col justify-end md:min-w-[140px] pt-4 md:pt-0 border-t md:border-t-0 border-gray-800">
                {!isDone ? (
                  <button 
                    onClick={() => handleMarkComplete(proj.id)}
                    className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-xs transition-colors font-medium text-center shadow-[0_0_10px_rgba(79,70,229,0.2)]"
                  >
                    Mark Ready
                  </button>
                ) : (
                  <button disabled className="w-full py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded text-xs font-bold uppercase tracking-wider cursor-default">
                    Completed
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

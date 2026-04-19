import { motion } from 'motion/react';
import { concepts } from '../data/concepts';
import { UserProgress } from '../types';
import { BookOpen } from 'lucide-react';

export default function Concepts({ progress, updateProgress }: { progress: UserProgress, updateProgress: (p: UserProgress) => void }) {
  const handleMarkRead = (id: string) => {
    if (!progress.readConcepts.includes(id)) {
      updateProgress({ ...progress, readConcepts: [...progress.readConcepts, id] });
    }
  };

  const colors = [
    'text-indigo-300 border-indigo-500',
    'text-emerald-300 border-emerald-500',
    'text-rose-300 border-rose-500',
    'text-amber-300 border-amber-500'
  ];

  return (
    <div className="max-w-4xl mx-auto py-2">
      <header className="border-b border-gray-800 pb-4 mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white mb-1">Concept Deck</h2>
        <p className="text-sm text-gray-500">Plain-English explanations for complex AI concepts.</p>
      </header>

      <div className="grid gap-6">
        {concepts.map((concept, i) => {
          const isRead = progress.readConcepts.includes(concept.id);
          const colorClass = colors[i % colors.length];
          const textColor = colorClass.split(' ')[0];
          const borderColor = colorClass.split(' ')[1];

          return (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={concept.id}
              className={`flex flex-col gap-4 bg-gray-900/50 p-6 rounded-2xl border ${isRead ? 'border-gray-700 bg-gray-900/30' : 'border-gray-800'}`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className={`text-lg font-bold ${textColor}`}>{concept.title}</h3>
                {!isRead ? (
                  <button 
                    onClick={() => handleMarkRead(concept.id)}
                    className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded text-xs transition-colors border border-gray-700 text-gray-300"
                  >
                    Mark as Read
                  </button>
                ) : (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1"><BookOpen className="w-3 h-3"/> Read</span>
                )}
              </div>
              
              <div className="mb-2">
                <p className={`text-sm text-gray-400 leading-relaxed italic border-l-2 ${borderColor} pl-3`}>
                  "{concept.analogy}"
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-2 pt-4 border-t border-gray-800/50">
                <div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2 block">Description</span>
                  <p className="text-[13px] text-gray-300 leading-relaxed">{concept.description}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2 block">Real-World Example</span>
                  <p className="text-[13px] text-gray-300 leading-relaxed bg-gray-800/60 p-3 rounded-lg border border-gray-700/50">{concept.example}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

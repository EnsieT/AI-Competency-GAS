import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { quizQuestions } from '../data/quiz';
import { UserProgress } from '../types';

export default function CompetencyTest({ progress, updateProgress }: { progress: UserProgress, updateProgress: (p: UserProgress) => void }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const q = quizQuestions[currentQ];
  const isComplete = currentQ >= quizQuestions.length;

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
    
    if (currentQ === quizQuestions.length - 1) {
      updateProgress({ ...progress, competencyScore: score + (selected === q.answer ? 1 : 0) });
    }
    setCurrentQ(c => c + 1);
  };

  if (isComplete || progress.competencyScore !== null) {
    const finalScore = progress.competencyScore !== null ? progress.competencyScore : score;
    const percentage = Math.round((finalScore / quizQuestions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto py-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 text-center">
          <div className="w-20 h-20 rounded-full border-2 border-indigo-500 bg-indigo-500/10 flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(79,70,229,0.2)]">
            <span className="text-2xl font-bold text-indigo-400">{percentage}%</span>
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Assessment Completed</h2>
          <p className="text-sm text-gray-400 mb-8">You scored {finalScore} out of {quizQuestions.length}. Based on this, we've updated your recommended course path.</p>
          <button 
            onClick={() => { setCurrentQ(0); setScore(0); updateProgress({ ...progress, competencyScore: null }); }} 
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded text-sm transition-colors border border-gray-700"
          >
            Retake Assessment
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-2">
      <header className="border-b border-gray-800 pb-4 mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white mb-1">General AI Competency</h2>
          <p className="text-sm text-gray-500">Question {currentQ + 1} of {quizQuestions.length}</p>
        </div>
        <div className="flex gap-2">
          {quizQuestions.map((_, i) => (
            <div key={i} className={`h-1.5 w-8 rounded-full ${i < currentQ ? 'bg-indigo-600' : i === currentQ ? 'bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.5)]' : 'bg-gray-800'}`} />
          ))}
        </div>
      </header>

      <motion.div 
        key={q.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800"
      >
        <h3 className="text-lg text-gray-200 font-medium mb-6 leading-relaxed">{q.question}</h3>
        
        <div className="space-y-3">
          {q.options.map((option, idx) => {
            const isSelected = selected === idx;
            const isCorrect = idx === q.answer;
            const reveal = showResult;
            
            let btnClass = "w-full text-left p-4 rounded-xl border-l-4 transition-all duration-200 flex items-center justify-between text-sm ";
            if (!reveal) {
              btnClass += isSelected 
                ? "border-indigo-500 bg-indigo-900/20 text-indigo-100" 
                : "border-transparent bg-gray-800/40 text-gray-300 hover:bg-gray-800 hover:border-gray-700";
            } else {
              if (isCorrect) btnClass += "border-emerald-500 bg-emerald-900/20 text-emerald-200";
              else if (isSelected) btnClass += "border-rose-500 bg-rose-900/20 text-rose-200";
              else btnClass += "border-transparent bg-gray-800/20 text-gray-600 opacity-50";
            }

            return (
              <button 
                key={idx} 
                onClick={() => handleSelect(idx)}
                disabled={showResult}
                className={btnClass}
              >
                <span>{option}</span>
                {reveal && isCorrect && <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0" />}
                {reveal && isSelected && !isCorrect && <XCircle className="text-rose-500 w-5 h-5 flex-shrink-0" />}
              </button>
            );
          })}
        </div>

        {showResult && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-6 pt-6 border-t border-gray-800">
            <div className="bg-indigo-950/30 border border-indigo-900/50 p-4 rounded-xl mb-6">
              <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block mb-2">Explanation</span>
              <p className="text-[13px] text-indigo-100/80 leading-relaxed">{q.explanation}</p>
            </div>
            <div className="flex justify-end">
              <button onClick={handleNext} className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded hover:bg-indigo-500 transition text-sm font-medium">
                {currentQ === quizQuestions.length - 1 ? 'Finish Assessment' : 'Next Question'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

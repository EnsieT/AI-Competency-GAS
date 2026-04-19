import { useState } from 'react';
import { Home, Lightbulb, GraduationCap, LayoutGrid, CheckSquare, Wrench, Bot, Database } from 'lucide-react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { UserProgress } from './types';

import Dashboard from './components/Dashboard';
import CompetencyTest from './components/CompetencyTest';
import Concepts from './components/Concepts';
import Courses from './components/Courses';
import ClaudeArchitect from './components/ClaudeArchitect';
import CopilotStudio from './components/CopilotStudio';
import DatabricksEngineer from './components/DatabricksEngineer';
import Projects from './components/Projects';

const NavItem = ({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) => {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 transition font-medium text-sm ${
        active 
          ? 'bg-gray-800/80 text-indigo-300 border-l-4 border-indigo-500 rounded-r-xl' 
          : 'text-gray-500 hover:bg-gray-900/50 hover:text-gray-300 rounded-xl'
      }`}
    >
      <Icon className="w-5 h-5" />
      {label}
    </button>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [progress, setProgress] = useLocalStorage<UserProgress>('ai-architect-progress', {
    competencyScore: null,
    claudeScore: null,
    copilotScore: null,
    databricksScore: null,
    readConcepts: [],
    completedCourses: [],
    completedProjects: [],
    topicScores: {}
  });

  // Ensure older stored versions get the new keys
  const safeProgress = {
    ...progress,
    completedProjects: progress.completedProjects || [],
    topicScores: progress.topicScores || {},
    copilotScore: progress.copilotScore !== undefined ? progress.copilotScore : null,
    databricksScore: progress.databricksScore !== undefined ? progress.databricksScore : null
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex font-sans text-gray-200 overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#0a0a0a] border-r border-gray-800 flex flex-col fixed h-full z-10 overflow-y-auto">
        <div className="p-6 border-b border-gray-800 mb-4 shrink-0">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]">
               AI
             </div>
             <h1 className="text-xl font-semibold tracking-tight text-white leading-tight">
               Competency<br /><span className="text-indigo-400">Tracker</span>
             </h1>
          </div>
        </div>
        
        <nav className="flex-1 px-4 pb-4 space-y-2">
          <NavItem icon={Home} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <NavItem icon={CheckSquare} label="Competency Test" active={activeTab === 'test'} onClick={() => setActiveTab('test')} />
          <NavItem icon={Lightbulb} label="Concepts" active={activeTab === 'concepts'} onClick={() => setActiveTab('concepts')} />
          <NavItem icon={GraduationCap} label="Learning Path" active={activeTab === 'courses'} onClick={() => setActiveTab('courses')} />
          <NavItem icon={Wrench} label="Projects" active={activeTab === 'projects'} onClick={() => setActiveTab('projects')} />
          
          <div className="pt-6 pb-2">
            <span className="px-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">Specializations</span>
          </div>
          <NavItem icon={LayoutGrid} label="Claude Architect" active={activeTab === 'claude'} onClick={() => setActiveTab('claude')} />
          <NavItem icon={Bot} label="Copilot Studio" active={activeTab === 'copilot'} onClick={() => setActiveTab('copilot')} />
          <NavItem icon={Database} label="Databricks DE" active={activeTab === 'databricks'} onClick={() => setActiveTab('databricks')} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto h-screen">
         {activeTab === 'dashboard' && <Dashboard progress={safeProgress} setTab={setActiveTab} />}
         {activeTab === 'test' && <CompetencyTest progress={safeProgress} updateProgress={setProgress} />}
         {activeTab === 'concepts' && <Concepts progress={safeProgress} updateProgress={setProgress} />}
         {activeTab === 'courses' && <Courses progress={safeProgress} updateProgress={setProgress} />}
         {activeTab === 'projects' && <Projects progress={safeProgress} updateProgress={setProgress} />}
         {activeTab === 'claude' && <ClaudeArchitect progress={safeProgress} updateProgress={setProgress} />}
         {activeTab === 'copilot' && <CopilotStudio progress={safeProgress} updateProgress={setProgress} />}
         {activeTab === 'databricks' && <DatabricksEngineer progress={safeProgress} updateProgress={setProgress} />}
      </main>

    </div>
  );
}

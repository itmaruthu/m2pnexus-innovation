import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, RefreshCw, BarChart3, Database, Sparkles, UserPlus, Send } from 'lucide-react';

export default function InnovationLab() {
  const [activeTab, setActiveTab] = useState('chatbot');

  const tabs = [
    { id: 'chatbot', label: 'AI Chatbots', icon: MessageSquare, description: 'LLM-powered conversational agents that capture lead parameters and resolve support queries.' },
    { id: 'workflow', label: 'Workflow Automation', icon: RefreshCw, description: 'Integrate Webhooks, Slack notifications, and databases to automate daily manual processes.' },
    { id: 'dashboard', label: 'Business Dashboards', icon: BarChart3, description: 'Interactive visual control centers displaying operational KPIs and analytical trends.' },
    { id: 'crm', label: 'CRM & Lead Systems', icon: Database, description: 'Clean customer relationship databases integrated directly into your growth funnels.' },
    { id: 'recruiting', label: 'Recruitment Tech', icon: UserPlus, description: 'AI-assisted resume screening and candidate evaluation workflows.' },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-brand-midnight grid-bg-dots">
      {/* Glow decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3">
            Innovation Lab
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-white">
            Innovation in Action
          </h3>
          <p className="text-gray-400 mt-4 text-base md:text-lg">
            Explore active structural simulations of systems built in our engineering sandbox.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-full text-xs font-bold border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-cyan to-brand-purple text-brand-midnight border-transparent shadow-[0_0_20px_rgba(6,182,212,0.2)] scale-105'
                    : 'bg-white/[0.02] border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Panel */}
        <div className="glass-card rounded-2xl border border-white/10 p-6 md:p-8 bg-gradient-to-b from-brand-blue-deep/30 to-brand-midnight/50 min-h-[400px] flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
            {/* Description Text */}
            <div className="lg:col-span-4 text-left">
              <span className="text-[10px] font-mono tracking-widest text-brand-cyan font-bold uppercase">Sandbox Simulation</span>
              <h4 className="text-2xl font-bold font-display text-white mt-2 mb-4">
                {tabs.find((t) => t.id === activeTab)?.label}
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {tabs.find((t) => t.id === activeTab)?.description}
              </p>
              <div className="p-4 rounded-xl border border-brand-cyan/20 bg-brand-cyan/5 text-[11px] text-brand-cyan font-mono leading-relaxed">
                <strong>Engine Details:</strong> Microservices backend configured on Kubernetes. Automatic fallback layers integrated.
              </div>
            </div>

            {/* Simulated Graphic Panel */}
            <div className="lg:col-span-8 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  {activeTab === 'chatbot' && <ChatbotSimulation />}
                  {activeTab === 'workflow' && <WorkflowSimulation />}
                  {activeTab === 'dashboard' && <DashboardSimulation />}
                  {activeTab === 'crm' && <CRMSimulation />}
                  {activeTab === 'recruiting' && <RecruitingSimulation />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 1. Chatbot Simulation Widget */
function ChatbotSimulation() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hello! I am Nexus Bot. Let me know which service you are interested in: Web Dev, Hiring, or Growth Strategy?" }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!inputVal.trim()) return;
    const userMsg = inputVal.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let reply = "I've passed your request to Priyanka & Maruthu. Can I grab your email to schedule a sync?";
      if (userMsg.toLowerCase().includes('web') || userMsg.toLowerCase().includes('dev')) {
        reply = "Our engineering cell builds performant React/Next.js systems. Let's schedule a technical audit. What is your email?";
      } else if (userMsg.toLowerCase().includes('hire') || userMsg.toLowerCase().includes('talent')) {
        reply = "We screen developers across React, Node, Cloud, and QA. We can deliver vetted CVs in 72 hours. What is your email address?";
      }
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-xl border border-white/10 bg-brand-navy overflow-hidden shadow-lg text-left">
      <div className="bg-white/[0.02] border-b border-white/5 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
          <span className="text-xs font-bold font-mono text-gray-200">AI Assistant Demo</span>
        </div>
        <span className="text-[10px] text-gray-400 font-mono">Chatbase Integration</span>
      </div>
      <div className="p-4 h-64 overflow-y-auto space-y-3 font-sans text-xs">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-3 rounded-xl max-w-[80%] leading-relaxed ${
              m.sender === 'user' ? 'bg-brand-cyan text-brand-midnight font-medium rounded-br-none' : 'bg-white/5 text-gray-300 rounded-bl-none border border-white/5'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/5 border border-white/5 p-3 rounded-xl rounded-bl-none flex items-center space-x-1">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        )}
      </div>
      <div className="p-3 border-t border-white/5 bg-white/[0.01] flex items-center space-x-2">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask something (e.g. Web Dev)..."
          className="flex-1 bg-white/5 border border-white/5 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/40"
        />
        <button onClick={handleSend} className="p-2 rounded-lg bg-brand-cyan text-brand-midnight hover:bg-brand-cyan/90 cursor-pointer">
          <Send size={14} />
        </button>
      </div>
    </div>
  );
}

/* 2. Workflow Automation Simulation */
function WorkflowSimulation() {
  return (
    <div className="w-full max-w-lg mx-auto p-6 glass-card rounded-xl border border-white/10 text-left font-mono relative overflow-hidden">
      <h5 className="text-[10px] text-brand-purple tracking-widest font-bold uppercase mb-4">Active Pipeline Flow</h5>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative">
        
        {/* Node 1 */}
        <div className="p-3 rounded-lg border border-brand-cyan/30 bg-brand-cyan/5 text-xs text-center w-full sm:w-32 z-10">
          <p className="font-bold text-white">Lead Ingest</p>
          <span className="text-[9px] text-brand-cyan">Web Form Trigger</span>
        </div>

        <div className="hidden sm:block flex-1 h-0.5 border-t border-dashed border-white/20 relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-1.5 bg-brand-cyan rounded-full animate-[ping_2s_infinite]" />
        </div>

        {/* Node 2 */}
        <div className="p-3 rounded-lg border border-brand-purple/30 bg-brand-purple/5 text-xs text-center w-full sm:w-32 z-10">
          <p className="font-bold text-white">Vetting Engine</p>
          <span className="text-[9px] text-brand-purple">Auto Profile Match</span>
        </div>

        <div className="hidden sm:block flex-1 h-0.5 border-t border-dashed border-white/20 relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-1.5 bg-brand-purple rounded-full animate-[ping_2s_infinite]" style={{ animationDelay: '0.6s' }} />
        </div>

        {/* Node 3 */}
        <div className="p-3 rounded-lg border border-brand-emerald/30 bg-brand-emerald/5 text-xs text-center w-full sm:w-32 z-10">
          <p className="font-bold text-white">Outreach Sync</p>
          <span className="text-[9px] text-brand-emerald">Slack & Calendly</span>
        </div>
      </div>

      <div className="mt-8 p-3 rounded bg-white/[0.02] border border-white/5 text-[9px] text-gray-400 space-y-1">
        <p className="text-brand-purple">[04:31:02] &gt; webhook received from signup_form</p>
        <p className="text-brand-cyan">[04:31:03] &gt; matching skills: React, Node, Tailwind</p>
        <p className="text-brand-emerald">[04:31:03] &gt; triggered Slack ping to Priyanka (#recruitment-leads)</p>
      </div>
    </div>
  );
}

/* 3. Dashboard Simulation */
function DashboardSimulation() {
  return (
    <div className="w-full max-w-lg mx-auto p-6 glass-card rounded-xl border border-white/10 text-left">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h5 className="text-[10px] text-brand-emerald font-mono tracking-widest font-bold uppercase">Analytics Control</h5>
          <h6 className="text-sm font-bold text-white mt-1">Growth & Conversion Velocities</h6>
        </div>
        <div className="text-xs bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald px-2 py-0.5 rounded font-mono">
          +48.3%
        </div>
      </div>

      {/* SVG Simple Line Chart */}
      <div className="relative w-full h-36 border-b border-l border-white/5 pb-2 pl-2">
        <svg viewBox="0 0 100 30" className="w-full h-full text-brand-cyan overflow-visible">
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M0 25 Q 20 18, 40 22 T 80 8 T 100 3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="animate-pulse"
          />
          <path
            d="M0 25 Q 20 18, 40 22 T 80 8 T 100 3 L 100 30 L 0 30 Z"
            fill="url(#gradient)"
            stroke="none"
          />
          <circle cx="100" cy="3" r="2" fill="#8b5cf6" />
        </svg>
        <span className="absolute bottom-1 right-2 text-[8px] font-mono text-gray-500">Q3 Velocity</span>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-left">
          <span className="text-[9px] text-gray-500 font-mono">MAU COUNT</span>
          <p className="text-sm font-bold text-white mt-0.5">14,240</p>
        </div>
        <div className="text-left">
          <span className="text-[9px] text-gray-500 font-mono">API LATENCY</span>
          <p className="text-sm font-bold text-white mt-0.5">42ms</p>
        </div>
        <div className="text-left">
          <span className="text-[9px] text-gray-500 font-mono">BOUNCE RATE</span>
          <p className="text-sm font-bold text-white mt-0.5">24.1%</p>
        </div>
      </div>
    </div>
  );
}

/* 4. CRM Simulation */
function CRMSimulation() {
  const deals = [
    { name: 'SaaS Platform MVP', val: '$12,000', stage: 'Qualified', contact: 'Tech Lead, Agritech Co.' },
    { name: 'Recruitment Contract', val: '$8,500/mo', stage: 'Proposal', contact: 'HR Lead, Fintech Corp.' },
    { name: 'Workflow Automations', val: '$5,000', stage: 'Negotiation', contact: 'COO, Logistics Ltd.' },
  ];

  return (
    <div className="w-full max-w-lg mx-auto p-6 glass-card rounded-xl border border-white/10 text-left">
      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
        <span className="text-xs font-bold text-white font-display">Active Deals Pipeline</span>
        <span className="text-[10px] text-brand-cyan font-mono">CRM Module</span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {['Qualified', 'Proposal', 'Negotiation'].map((st) => (
          <div key={st} className="space-y-3">
            <span className="text-[8px] font-mono tracking-widest text-gray-500 uppercase">{st}</span>
            <div className="space-y-2">
              {deals
                .filter((d) => d.stage === st)
                .map((deal, i) => (
                  <div key={i} className="p-3 rounded-lg border border-white/5 bg-white/[0.01] hover:border-brand-cyan/20 transition-all">
                    <p className="text-[10px] font-bold text-white leading-tight">{deal.name}</p>
                    <p className="text-[9px] text-brand-cyan font-mono mt-1">{deal.val}</p>
                    <p className="text-[8px] text-gray-400 mt-1 leading-none">{deal.contact}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 5. Recruiting Simulation */
function RecruitingSimulation() {
  return (
    <div className="w-full max-w-md mx-auto p-6 glass-card rounded-xl border border-white/10 text-left font-sans">
      <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
        <span className="text-xs font-bold text-white font-display">Resume Vetting Matcher</span>
        <span className="text-[9px] text-brand-purple font-mono">HR Engine v2.1</span>
      </div>

      <div className="space-y-3.5">
        <div className="p-3 rounded-lg border border-brand-emerald/20 bg-brand-emerald/5 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-white">Karthikeyan S. (Fullstack Developer)</p>
            <p className="text-[9px] text-gray-400 mt-0.5">React, Node, Express, PostgreSQL, AWS</p>
          </div>
          <span className="text-[10px] font-bold font-mono text-brand-emerald">94% MATCH</span>
        </div>

        <div className="p-3 rounded-lg border border-brand-purple/20 bg-brand-purple/5 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-white">Ananya R. (AI Engineer)</p>
            <p className="text-[9px] text-gray-400 mt-0.5">Python, PyTorch, OpenAI API, LangChain</p>
          </div>
          <span className="text-[10px] font-bold font-mono text-brand-purple">88% MATCH</span>
        </div>

        <div className="p-3 rounded-lg border border-white/5 bg-white/[0.01] flex items-center justify-between opacity-50">
          <div>
            <p className="text-[11px] font-bold text-white">John Doe (Frontend Junior)</p>
            <p className="text-[9px] text-gray-400 mt-0.5">HTML, CSS, basic Javascript</p>
          </div>
          <span className="text-[10px] font-bold font-mono text-gray-400">42% MATCH</span>
        </div>
      </div>
    </div>
  );
}

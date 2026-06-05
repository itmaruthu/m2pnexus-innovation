import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Calendar, Cpu, UserCheck } from 'lucide-react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: "Welcome to M2P Nexus! I'm your growth assistant. How can I help you accelerate your technology, hiring, or automated workflows today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Lead capture flow state
  const [leadStep, setLeadStep] = useState(null); // 'name' -> 'email' -> 'phone' -> 'done'
  const [leadData, setLeadData] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const presetQuestions = [
    { label: 'Technology Services', action: 'explain-tech' },
    { label: 'Talent Acquisition', action: 'explain-talent' },
    { label: 'FAQs & Contact', action: 'explain-contact' },
    { label: 'Book Callback', action: 'start-lead' },
  ];

  const triggerBotReply = (text, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { id: Date.now(), sender: 'bot', text }]);
    }, delay);
  };

  const handleAction = (action) => {
    // Add User Bubble
    const label = presetQuestions.find((q) => q.action === action)?.label || 'More Info';
    setMessages((prev) => [...prev, { id: Date.now(), sender: 'user', text: label }]);

    if (action === 'explain-tech') {
      triggerBotReply(
        "We engineer high-performance web applications (React, Next.js, Vite), custom enterprise software engines, cloud architectures (AWS, Google Cloud), and custom API endpoints. Would you like to consult with Maruthu Pandi?"
      );
    } else if (action === 'explain-talent') {
      triggerBotReply(
        "Priyanka leads our HR & Talent Acquisition. We source, screen, and verify technical engineers (Node, React, QA) tailored to your sprint requirements. Pass rate is 4.2%. Ready to audit your talent capacity?"
      );
    } else if (action === 'explain-contact') {
      triggerBotReply(
        "You can call Priyanka or Maruthu directly at +91 99442 83316 / +91 63804 65605, or email hrpriyaanka@gmail.com. We are located in Madurai, Tamil Nadu. Feel free to request a call back here."
      );
    } else if (action === 'start-lead') {
      setLeadStep('name');
      triggerBotReply("Excellent. Let's arrange a consultation sync. May I have your full name first?");
    }
  };

  const handleSendText = () => {
    if (!inputValue.trim()) return;
    const text = inputValue.trim();
    setMessages((prev) => [...prev, { id: Date.now(), sender: 'user', text }]);
    setInputValue('');

    // Handle lead collection progression
    if (leadStep === 'name') {
      setLeadData((prev) => ({ ...prev, name: text }));
      setLeadStep('email');
      triggerBotReply(`Pleasure meeting you, ${text}! What is your email address so we can coordinate?`);
    } else if (leadStep === 'email') {
      setLeadData((prev) => ({ ...prev, email: text }));
      setLeadStep('phone');
      triggerBotReply("Got it. Lastly, please provide your phone number so Priyanka or Maruthu can schedule the call.");
    } else if (leadStep === 'phone') {
      const finalData = { ...leadData, phone: text };
      setLeadData(finalData);
      setLeadStep('done');
      // In production, sync with CRM
      triggerBotReply(
        `Thank you, ${finalData.name}! Your parameters have been received. Priyanka will contact you shortly at ${text} or ${finalData.email}.`
      );
    } else {
      // General freeform replies
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        let reply = "Thanks for the details! You can also click the WhatsApp widget to speak to Maruthu and Priyanka instantly.";
        const lowered = text.toLowerCase();
        if (lowered.includes('price') || lowered.includes('cost')) {
          reply = "We offer customized milestone and retainer billing structures based on project scope. Let's schedule a call back to establish rates.";
        } else if (lowered.includes('time') || lowered.includes('duration')) {
          reply = "Most MVP builds take 4-6 weeks. Recruitment cycles typically average 18 days from sourcing to offer letter. Let me know if you want to book a callback.";
        }
        setMessages((prev) => [...prev, { id: Date.now(), sender: 'bot', text: reply }]);
      }, 1200);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 font-sans text-left">
      {/* Replace with production AI chatbot API */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="w-80 md:w-96 glass-card rounded-2xl border border-brand-cyan/20 bg-brand-navy shadow-2xl overflow-hidden flex flex-col h-[480px]"
          >
            {/* Header bar */}
            <div className="p-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">Nexus Growth Assistant</h4>
                  <p className="text-[9px] text-gray-400 font-mono">v1.2 Sandbox Mockup</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-gray-400 hover:text-white cursor-pointer"
                aria-label="Close Chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs max-h-[320px]">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === 'user' 
                    ? 'bg-gradient-to-r from-brand-cyan to-brand-purple text-brand-midnight font-bold rounded-tr-none' 
                    : 'bg-white/5 text-gray-200 border border-white/5 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 p-3 rounded-2xl rounded-tl-none flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Suggestions grid */}
            {!leadStep && (
              <div className="px-4 py-2 bg-white/[0.01] border-t border-white/5 flex flex-wrap gap-1.5 justify-start">
                {presetQuestions.map((q) => (
                  <button
                    key={q.action}
                    onClick={() => handleAction(q.action)}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:border-brand-cyan/25 hover:bg-brand-cyan/5 text-[10px] font-semibold text-gray-300 hover:text-white transition-all cursor-pointer"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            )}

            {/* Text Input area */}
            <div className="p-3 border-t border-white/5 bg-brand-midnight flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendText()}
                placeholder={
                  leadStep === 'name' ? 'Type your full name...' :
                  leadStep === 'email' ? 'Type your email address...' :
                  leadStep === 'phone' ? 'Type your phone number...' :
                  'Ask about services, rates, FAQs...'
                }
                className="flex-1 bg-white/5 border border-white/5 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/40"
              />
              <button 
                onClick={handleSendText} 
                className="p-2.5 rounded-lg bg-brand-cyan text-brand-midnight hover:bg-brand-cyan/95 transition-all cursor-pointer flex items-center justify-center"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 rounded-full bg-brand-navy border border-brand-cyan/30 text-brand-cyan hover:border-brand-cyan hover:text-white shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 hover:scale-110 cursor-pointer flex items-center justify-center"
          title="Open AI Assistant"
          aria-label="Open AI Assistant"
        >
          <Sparkles size={20} className="animate-pulse" />
        </button>
      )}
    </div>
  );
}

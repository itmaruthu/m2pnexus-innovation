import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MessageSquare, Calendar, PhoneCall, Code, Users, TrendingUp, Cpu, Award } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Mouse Parallax Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dX = useSpring(mouseX, springConfig);
  const dY = useSpring(mouseY, springConfig);

  // Parallax layers
  const textParallaxX = useTransform(dX, [-500, 500], [-10, 10]);
  const textParallaxY = useTransform(dY, [-500, 500], [-10, 10]);
  const cardParallaxX = useTransform(dX, [-500, 500], [-30, 30]);
  const cardParallaxY = useTransform(dY, [-500, 500], [-30, 30]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // HTML5 Canvas Node-Connection background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleCanvasResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleCanvasResize);

    const particles = [];
    const maxParticles = width < 768 ? 40 : 100;
    const maxDistance = 120;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1.5;
        this.color = Math.random() > 0.5 ? '#06b6d4' : '#8b5cf6';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    // Capture pointer
    let pointer = { x: null, y: null };
    const handlePointerMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };
    const handlePointerLeave = () => {
      pointer.x = null;
      pointer.y = null;
    };
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseleave', handlePointerLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();

        // Connect with other particles
        particles.forEach((other) => {
          if (p === other) return;
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            const alpha = (1 - dist / maxDistance) * 0.15;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });

        // Magnet to pointer
        if (pointer.x !== null && pointer.y !== null) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            // subtle pull
            p.x -= dx * 0.01;
            p.y -= dy * 0.01;
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleCanvasResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hello M2P Nexus,\n\nI would like to discuss my business requirements.\n\nPlease contact me."
  );

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-midnight grid-bg-dots"
    >
      {/* HTML5 Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Tamil Geometric overlay */}
      <div className="absolute inset-0 tamil-pattern-overlay pointer-events-none z-0" />

      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full">
        {/* Left Side: Headline and Content */}
        <motion.div
          style={{ x: textParallaxX, y: textParallaxY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 text-left"
        >
          {/* Tagline */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold mb-6 animate-pulse-slow">
            <Cpu size={12} className="animate-spin" style={{ animationDuration: '4s' }} />
            <span>Unified Tech & Talent Ecosystem</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-6 font-display">
            <span className="text-gray-100">Technology.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Talent.</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-emerald"> Growth.</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-xl">
            Empowering startups and businesses through innovative technology solutions, strategic talent acquisition, and scalable growth systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <a
              href="#services"
              className="flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple text-brand-midnight font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(139,92,246,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 text-center"
            >
              <span>Get Started</span>
              <ArrowRight size={16} />
            </a>
            
            <a
              href={`https://wa.me/919944283316?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-semibold transition-all duration-300 transform hover:-translate-y-0.5 text-center"
            >
              <MessageSquare size={16} />
              <span>Talk on WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="#contact"
              className="text-sm font-semibold text-gray-400 hover:text-brand-cyan transition-colors flex items-center space-x-1.5 group"
            >
              <span>Schedule Consultation</span>
              <Calendar size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Futuristic Animated Dashboard Mockup & Floating Cards */}
        <div className="lg:col-span-6 relative w-full flex justify-center items-center">
          <motion.div
            style={{ x: cardParallaxX, y: cardParallaxY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-lg aspect-video glass-card rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4 overflow-hidden"
          >
            {/* Replace with actual M2P dashboard visuals */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-deep/80 to-brand-midnight/90 -z-10" />

            {/* Dashboard Header Bar */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-[10px] text-gray-400 font-mono tracking-wider ml-2">M2P_NEXUS_CONTROL_PANEL v1.0.0</span>
              </div>
              <div className="px-2 py-0.5 rounded bg-brand-cyan/20 border border-brand-cyan/40 text-[9px] text-brand-cyan font-mono">
                ACTIVE
              </div>
            </div>

            {/* Dashboard grid */}
            <div className="grid grid-cols-3 gap-3">
              {/* Box 1: Code activity */}
              <div className="col-span-2 glass-card-cyan rounded-lg p-3 relative overflow-hidden flex flex-col justify-between h-36">
                <div className="flex items-center justify-between text-brand-cyan mb-2">
                  <div className="flex items-center space-x-1.5">
                    <Code size={12} />
                    <span className="text-[10px] font-bold tracking-wider">CODE ENGINE</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
                </div>
                <div className="font-mono text-[8px] text-gray-400 text-left space-y-1 overflow-hidden">
                  <p className="text-brand-cyan/70">&gt; npm run deploy:production</p>
                  <p className="text-brand-purple/80">&gt; compiling assets... 100%</p>
                  <p className="text-brand-emerald/80">&gt; deploying to global cloud network</p>
                  <p className="text-gray-500">&gt; edge node: madurai-south-01</p>
                  <p className="text-brand-cyan/90">&gt; status: 200 OK. Application live.</p>
                </div>
                <div className="h-6 flex items-end space-x-1 border-t border-brand-cyan/10 pt-1.5">
                  <div className="flex-1 bg-brand-cyan/30 rounded-t h-3 animate-pulse" />
                  <div className="flex-1 bg-brand-cyan/50 rounded-t h-5" />
                  <div className="flex-1 bg-brand-cyan/40 rounded-t h-4" />
                  <div className="flex-1 bg-brand-cyan/70 rounded-t h-6" />
                </div>
              </div>

              {/* Box 2: Hiring stats */}
              <div className="col-span-1 glass-card-purple rounded-lg p-3 flex flex-col justify-between text-left h-36">
                <div className="flex items-center space-x-1.5 text-brand-purple">
                  <Users size={12} />
                  <span className="text-[10px] font-bold tracking-wider">TALENT</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white mt-1">450+</h3>
                  <p className="text-[9px] text-gray-400">Vetted Engineers Placed</p>
                </div>
                <div className="w-full bg-brand-purple/20 h-1 rounded-full overflow-hidden">
                  <div className="bg-brand-purple h-full w-[80%] rounded-full animate-pulse" />
                </div>
              </div>

              {/* Box 3: Growth Metrics */}
              <div className="col-span-3 glass-card-emerald rounded-lg p-3 flex items-center justify-between h-16">
                <div className="flex items-center space-x-3">
                  <div className="p-1.5 rounded-md bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald">
                    <TrendingUp size={14} />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] text-gray-400 tracking-wider">CLIENT ACQUISITION</p>
                    <h4 className="text-sm font-bold text-white font-display">12.4x Growth Velocity</h4>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono font-semibold text-brand-emerald bg-brand-emerald/10 px-2 py-0.5 rounded">
                    +318% YoY
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Achievement Card 1 */}
          <motion.div
            style={{ x: cardParallaxX, y: cardParallaxY }}
            initial={{ opacity: 0, x: -30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-[-25px] left-[-35px] glass-card px-4 py-2.5 rounded-xl border border-white/10 flex items-center space-x-2.5 shadow-lg select-none hidden sm:flex"
          >
            <div className="p-1.5 rounded bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
              <Award size={14} />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-white leading-none">13+ Years</p>
              <p className="text-[9px] text-gray-400 font-medium leading-none mt-1">Industry Experience</p>
            </div>
          </motion.div>

          {/* Floating Achievement Card 2 */}
          <motion.div
            style={{ x: cardParallaxX, y: cardParallaxY }}
            initial={{ opacity: 0, x: 30, y: 40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-[-30px] right-[-20px] glass-card px-4 py-2.5 rounded-xl border border-white/10 flex items-center space-x-2.5 shadow-lg select-none hidden sm:flex animate-float"
          >
            <div className="p-1.5 rounded bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald">
              <TrendingUp size={14} />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-white leading-none">Growth-Focused</p>
              <p className="text-[9px] text-gray-400 font-medium leading-none mt-1">Custom End-to-End Solutions</p>
            </div>
          </motion.div>

          {/* Floating Achievement Card 3 */}
          <motion.div
            style={{ x: cardParallaxX, y: cardParallaxY }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-[-50px] left-[10px] glass-card px-4 py-2.5 rounded-xl border border-white/10 flex items-center space-x-2.5 shadow-lg select-none hidden md:flex"
          >
            <div className="p-1.5 rounded bg-brand-purple/10 border border-brand-purple/20 text-brand-purple">
              <Cpu size={14} />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-white leading-none">Tech & Talent</p>
              <p className="text-[9px] text-gray-400 font-medium leading-none mt-1">Unified Engineering Pipeline</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Arrow Right SVG Helper inside component
function ArrowRight({ size = 16, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}

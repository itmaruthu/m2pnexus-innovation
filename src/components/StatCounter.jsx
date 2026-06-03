import { useEffect, useState, useRef } from 'react';

export default function StatCounter({ target, suffix = '', label }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => { if (countRef.current) observer.unobserve(countRef.current); };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    const end = parseInt(target, 10);
    if (isNaN(end)) { setCount(target); return; }

    let frame = 0;
    const duration = 1500;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.round(easeProgress * end);
      if (frame >= totalFrames) { setCount(end); clearInterval(timer); }
      else setCount(currentCount);
    }, frameRate);

    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <div
      ref={countRef}
      className="text-center p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow"
      style={{ borderColor: '#E2E8F0' }}
    >
      <div
        className="text-3xl md:text-4xl font-bold mb-2"
        style={{ fontFamily: "'Outfit', sans-serif", color: '#1E3A8A' }}
      >
        {typeof count === 'number' ? `${count}${suffix}` : target}
      </div>
      <p className="text-sm md:text-base font-medium" style={{ color: '#1E293B' }}>{label}</p>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

/* ── Floating Particles ── */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

/* ── Radar Scanner ── */
export function RadarScanner({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Rings */}
        <circle cx="100" cy="100" r="90" stroke="rgba(59,130,246,0.1)" strokeWidth="0.5" fill="none" />
        <circle cx="100" cy="100" r="65" stroke="rgba(59,130,246,0.08)" strokeWidth="0.5" fill="none" />
        <circle cx="100" cy="100" r="40" stroke="rgba(59,130,246,0.06)" strokeWidth="0.5" fill="none" />
        <circle cx="100" cy="100" r="15" stroke="rgba(59,130,246,0.1)" strokeWidth="0.5" fill="none" />
        {/* Cross */}
        <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(59,130,246,0.06)" strokeWidth="0.5" />
        <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(59,130,246,0.06)" strokeWidth="0.5" />
        {/* Blips */}
        <circle cx="130" cy="60" r="2" fill="rgba(59,130,246,0.4)" className="animate-pulse" />
        <circle cx="70" cy="120" r="1.5" fill="rgba(59,130,246,0.3)" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
        <circle cx="145" cy="130" r="1.5" fill="rgba(59,130,246,0.35)" className="animate-pulse" style={{ animationDelay: "1s" }} />
        <circle cx="85" cy="55" r="1" fill="rgba(59,130,246,0.25)" className="animate-pulse" style={{ animationDelay: "1.5s" }} />
        {/* Sweep */}
        <line x1="100" y1="100" x2="100" y2="10" stroke="rgba(96,165,250,0.4)" strokeWidth="1" className="origin-center" style={{ animation: "radar-sweep 4s linear infinite", transformOrigin: "100px 100px" }} />
      </svg>
    </div>
  );
}

/* ── Glitch Text ── */
export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`glitch-wrapper ${className}`}>
      <span className="glitch-text" data-text={text}>{text}</span>
    </span>
  );
}

/* ── Typing Effect ── */
export function TypingText({ texts, className = "" }: { texts: string[]; className?: string }) {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="terminal-cursor" />
    </span>
  );
}

/* ── Animated Skill Bar ── */
export function AnimatedBar({ label, level, delay = 0 }: { label: string; level: number; delay?: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="flex items-center gap-3">
      <span className="text-vault-text-dim text-[0.65rem] w-24 text-right shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-vault-bg rounded-sm border border-vault-border/50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-vault-blue to-vault-blue-glow rounded-sm transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

/* ── Scroll Fade In ── */
export function FadeInOnScroll({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ── Data Stream (scrolling numbers) ── */
export function DataStream({ className = "" }: { className?: string }) {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const chars = "0123456789ABCDEF";
    const generateLine = () =>
      Array.from({ length: 24 }, () => chars[Math.floor(Math.random() * chars.length)]).join(" ");

    setLines(Array.from({ length: 12 }, generateLine));

    const interval = setInterval(() => {
      setLines((prev) => [...prev.slice(1), generateLine()]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`overflow-hidden font-mono text-[0.5rem] leading-relaxed text-vault-blue/15 select-none ${className}`}>
      {lines.map((line, i) => (
        <div key={i} style={{ opacity: 0.3 + (i / 12) * 0.7 }}>{line}</div>
      ))}
    </div>
  );
}

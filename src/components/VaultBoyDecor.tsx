export function RadiationSymbol({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path d="M50 38 L42 20 A35 35 0 0 1 58 20 Z" fill="currentColor" opacity="0.15" />
      <path d="M40 56 L22 64 A35 35 0 0 1 30 48 Z" fill="currentColor" opacity="0.15" />
      <path d="M60 56 L78 64 A35 35 0 0 1 70 48 Z" fill="currentColor" opacity="0.15" />
    </svg>
  );
}

export function PipBoyFrame({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="relative">
      {/* Corner brackets */}
      <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-vault-blue/40" />
      <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-vault-blue/40" />
      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-vault-blue/40" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-vault-blue/40" />
      {/* Title tab */}
      <div className="absolute -top-3 left-4 bg-vault-bg px-2">
        <span className="text-vault-blue text-[0.6rem] tracking-[0.2em]">{title}</span>
      </div>
      {children}
    </div>
  );
}

export function TerminalLine({ children, prompt = "$" }: { children: React.ReactNode; prompt?: string }) {
  return (
    <div className="text-vault-text-dim text-xs mb-1">
      <span className="text-vault-blue">{prompt}</span> {children}
    </div>
  );
}

export function CircuitLines({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 50 H40 L50 30 H80 L90 50 H130 L140 70 H170 L180 50 H200" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      <circle cx="50" cy="30" r="2" fill="currentColor" opacity="0.2" />
      <circle cx="90" cy="50" r="2" fill="currentColor" opacity="0.2" />
      <circle cx="140" cy="70" r="2" fill="currentColor" opacity="0.2" />
      <circle cx="180" cy="50" r="2" fill="currentColor" opacity="0.2" />
      <path d="M0 80 H30 L40 60 H60" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
      <path d="M150 20 H180 L190 40 H200" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
    </svg>
  );
}

export function HexGrid({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3].map((col) => {
          const x = col * 50 + (row % 2 === 0 ? 0 : 25);
          const y = row * 43;
          return (
            <polygon
              key={`${row}-${col}`}
              points={`${x + 25},${y} ${x + 50},${y + 14} ${x + 50},${y + 36} ${x + 25},${y + 50} ${x},${y + 36} ${x},${y + 14}`}
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              opacity={0.05 + Math.random() * 0.08}
            />
          );
        })
      )}
    </svg>
  );
}

export function StatusBar({ label, value, max = 100, color = "vault-blue" }: { label: string; value: number; max?: number; color?: string }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="flex items-center gap-3">
      <span className="text-vault-text-dim text-[0.65rem] w-8 text-right">{label}</span>
      <div className="flex-1 h-2 bg-vault-bg rounded-sm border border-vault-border overflow-hidden">
        <div
          className={`h-full bg-${color} rounded-sm transition-all duration-1000`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-vault-text-dim text-[0.65rem] w-6">{value}</span>
    </div>
  );
}

export function WebPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Spider-web inspired radial pattern */}
      <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="0.3" opacity="0.1" />
      <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.3" opacity="0.08" />
      <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.3" opacity="0.06" />
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.3" opacity="0.04" />
      <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.3" opacity="0.03" />
      {/* Radial lines */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x2 = 100 + 95 * Math.cos(rad);
        const y2 = 100 + 95 * Math.sin(rad);
        return (
          <line key={angle} x1="100" y1="100" x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.3" opacity="0.06" />
        );
      })}
    </svg>
  );
}

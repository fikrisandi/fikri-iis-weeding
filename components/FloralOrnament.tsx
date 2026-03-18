"use client";

export function LeafOrnamentTop({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 80" className={className} style={{ display: "block", margin: "0 auto", width: "160px", opacity: 0.4 }} fill="none">
      <g stroke="currentColor" strokeWidth="1" opacity="0.6">
        {/* Left branch */}
        <path d="M120 75 Q90 50 60 55 Q80 40 120 45" />
        <path d="M120 65 Q95 45 70 48 Q88 35 120 40" />
        <path d="M120 55 Q100 38 82 42 Q96 30 120 35" />
        {/* Right branch */}
        <path d="M120 75 Q150 50 180 55 Q160 40 120 45" />
        <path d="M120 65 Q145 45 170 48 Q152 35 120 40" />
        <path d="M120 55 Q140 38 158 42 Q144 30 120 35" />
        {/* Center stem */}
        <line x1="120" y1="78" x2="120" y2="20" strokeWidth="0.8" />
        <circle cx="120" cy="16" r="3" fill="currentColor" opacity="0.4" />
      </g>
    </svg>
  );
}

export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 my-5 ${className}`}>
      <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[var(--color-gold-dark)] opacity-60" />
      <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-gold)" opacity="0.5">
        <path d="M12 2L9 9H2l6 4.5L5.5 22 12 17l6.5 5L16 13.5 22 9h-7L12 2z" />
      </svg>
      <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[var(--color-gold-dark)] opacity-60" />
    </div>
  );
}

export function GeometricFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[var(--color-gold-dark)] opacity-30 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[var(--color-gold-dark)] opacity-30 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[var(--color-gold-dark)] opacity-30 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[var(--color-gold-dark)] opacity-30 rounded-br-lg" />
      {children}
    </div>
  );
}

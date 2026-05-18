/**
 * botanical line art components
 */
import React from 'react';

export const OakLeaf = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M50 10 C45 20, 30 20, 25 35 C20 50, 35 55, 30 65 C25 75, 40 80, 50 90 C60 80, 75 75, 70 65 C65 55, 80 50, 75 35 C70 20, 55 20, 50 10" />
    <path d="M50 10 L50 90" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
);

export const Fern = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M50 90 Q40 50 80 20" />
    <path d="M50 80 Q35 70 20 65" />
    <path d="M50 70 Q35 60 25 50" />
    <path d="M50 60 Q35 50 30 40" />
    <path d="M50 50 Q35 40 35 30" />
    <path d="M51 80 Q65 70 80 65" />
    <path d="M51 70 Q65 60 75 50" />
    <path d="M51 60 Q65 50 70 40" />
  </svg>
);

export const PineCone = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <ellipse cx="50" cy="50" rx="20" ry="35" opacity="0.2" />
    <path d="M50 20 L40 30 L50 40 L60 30 Z" />
    <path d="M40 35 L30 45 L40 55 L50 45 Z" />
    <path d="M60 35 L70 45 L60 55 L50 45 Z" />
    <path d="M50 50 L40 60 L50 70 L60 60 Z" />
    <path d="M40 65 L30 75 L40 85 L50 75 Z" />
    <path d="M60 65 L70 75 L60 85 L50 75 Z" />
  </svg>
);

export const Wreath = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="100" cy="100" r="80" strokeDasharray="5 10" opacity="0.3" />
    {Array.from({ length: 12 }).map((_, i) => (
      <g key={i} transform={`rotate(${i * 30} 100 100)`}>
         <path d="M100 20 Q110 30 100 40 Q90 30 100 20" fill="currentColor" opacity="0.4" />
         <path d="M100 15 Q120 30 100 45" stroke="currentColor" />
      </g>
    ))}
  </svg>
);

export const IvyVine = ({ className, id }: { className?: string; id?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1" id={id}>
    <path d="M10 10 Q30 10 30 30 T50 50 T70 70 T90 90" strokeDasharray="200" strokeDashoffset="200" className="ivy-path transition-all duration-1000" />
    <circle cx="28" cy="12" r="3" fill="currentColor" opacity="0.6" />
    <circle cx="52" cy="52" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="75" cy="74" r="3" fill="currentColor" opacity="0.6" />
  </svg>
);

export const Deer = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M30 80 L35 80 L35 60 L45 55 L50 55 L60 60 L60 80 L65 80 L65 55 L70 50 L70 40 Q70 30 60 25 L65 20 M60 25 L55 20 M70 40 L75 35" fill="none" stroke="currentColor" strokeWidth="1" />
  </svg>
);

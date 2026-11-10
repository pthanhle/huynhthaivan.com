'use client';

import React from 'react';

export function AppleLiquidGlassSvgDefs() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed h-0 w-0 overflow-hidden opacity-0"
    >
      <defs>
        <filter
          id="apple-liquid-glass-refraction"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" result="softened" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.014 0.018"
            numOctaves={2}
            seed={9}
            result="refractionNoise"
          />
          <feDisplacementMap
            in="softened"
            in2="refractionNoise"
            scale={10}
            xChannelSelector="R"
            yChannelSelector="G"
            result="refracted"
          />
          <feColorMatrix
            in="refracted"
            type="saturate"
            values="1.35"
            result="boosted"
          />
          <feComposite in="boosted" in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
    </svg>
  );
}

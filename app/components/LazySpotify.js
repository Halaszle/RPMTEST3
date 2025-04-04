'use client'
import { useEffect, useRef, useState } from 'react';

export default function LazySpotify({ src, height = 152 }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ minHeight: `${height}px`, marginBottom: '24px' }}>
      {isVisible ? (
        <iframe
          style={{ borderRadius: '12px', width: '100%' }}
          src={src}
          width="100%"
          height={height}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      ) : (
        <div style={{ height: `${height}px`, backgroundColor: '#111', borderRadius: '12px' }} />
      )}
    </div>
  );
}

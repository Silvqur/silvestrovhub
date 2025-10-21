'use client'
import { useEffect, useState } from 'react'

export default function RandomStars({ density = 500 }) {
  const [stars, setStars] = useState([])

  useEffect(() => {
    // GENERATE COMPLETELY RANDOM STARS
    const randomStars = Array.from({ length: density }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 0.5,
      opacity: Math.random() * 0.5 + 0.5,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 2,
      color: Math.random() > 0.8 ? '#ffd700' : '#fff' // Rare gold stars!
    }))
    setStars(randomStars)

    const style = document.createElement('style')
    style.textContent = `
      @keyframes twinkle { 
        0%,100%{opacity:var(--op);transform:scale(1);} 
        50%{opacity:0;transform:scale(1.2);} 
      }
      .stars-container { 
        position: fixed; 
        inset: 0; 
        pointer-events: none; 
        z-index: 0; 
        overflow: hidden; /* Contain any edge cases */
      }
      .random-star { 
        position: absolute; 
        background: var(--color); 
        border-radius: 50%; 
        animation: twinkle var(--dur)s infinite;
        will-change: transform, opacity; /* Perf: GPU acceleration */
      }
    `
    document.head.appendChild(style)

    return () => document.head.removeChild(style)
  }, [density])

  return (
    <div className="stars-container w-screen h-screen -z-50"> {/* SINGLE CONTAINER: Locks to viewport! */}
      {stars.map(star => (
        <div
          key={star.id}
          className="random-star -z-50"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            '--op': star.opacity,
            '--dur': `${star.duration}s`,
            '--color': star.color,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
    </div>
  )
}
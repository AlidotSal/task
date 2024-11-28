import { Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default () => {
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState([
    {
      id: crypto.randomUUID(),
      x: Math.floor(Math.random() * (360 + 1)),
      y: Math.floor(Math.random() * -100),
    },
    {
      id: crypto.randomUUID(),
      x: Math.floor(Math.random() * (360 + 1)),
      y: Math.floor(Math.random() * -500),
    },
    {
      id: crypto.randomUUID(),
      x: Math.floor(Math.random() * (360 + 1)),
      y: Math.floor(Math.random() * -700),
    },
    {
      id: crypto.randomUUID(),
      x: Math.floor(Math.random() * (360 + 1)),
      y: Math.floor(Math.random() * -5000),
    },
    {
      id: crypto.randomUUID(),
      x: Math.floor(Math.random() * (360 + 1)),
      y: Math.floor(Math.random() * -5000),
    },
    {
      id: crypto.randomUUID(),
      x: Math.floor(Math.random() * (360 + 1)),
      y: Math.floor(Math.random() * -5000),
    },
    {
      id: crypto.randomUUID(),
      x: Math.floor(Math.random() * (360 + 1)),
      y: Math.floor(Math.random() * -5000),
    },
    {
      id: crypto.randomUUID(),
      x: Math.floor(Math.random() * (360 + 1)),
      y: Math.floor(Math.random() * -4800),
    },
    {
      id: crypto.randomUUID(),
      x: Math.floor(Math.random() * (360 + 1)),
      y: Math.floor(Math.random() * -3800),
    },
    {
      id: crypto.randomUUID(),
      x: Math.floor(Math.random() * (360 + 1)),
      y: Math.floor(Math.random() * -5000),
    },
    {
      id: crypto.randomUUID(),
      x: Math.floor(Math.random() * (360 + 1)),
      y: Math.floor(Math.random() * -5000),
    },
    {
      id: crypto.randomUUID(),
      x: Math.floor(Math.random() * (360 + 1)),
      y: Math.floor(Math.random() * -5000),
    },
    {
      id: crypto.randomUUID(),
      x: Math.floor(Math.random() * (360 + 1)),
      y: Math.floor(Math.random() * -5000),
    },
    {
      id: crypto.randomUUID(),
      x: Math.floor(Math.random() * (360 + 1)),
      y: Math.floor(Math.random() * -5000),
    },
    {
      id: crypto.randomUUID(),
      x: Math.floor(Math.random() * (360 + 1)),
      y: Math.floor(Math.random() * -5000),
    },
  ]);
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    starsRef.current?.animate(
      { transform: 'translateY(5000px)' },
      {
        duration: 50000,
        fill: 'both',
        easing: 'cubic-bezier(.64,.64,.72,.71)',
        iterations: Infinity,
      },
    );
    const id = setInterval(() => {
      setStars([
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -100),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -500),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -700),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -5000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -5000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -5000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -5000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -4800),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -3800),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -5000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -5000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -5000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -5000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -5000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -5000),
        },
      ]);
    }, 50000);

    return () => clearInterval(id);
  });

  const handleClick = (e: PointerEvent) => {
    const target = e.target as SVGAElement;
    target.style.opacity = '0';
    setScore((p) => p + 1);
  };

  return (
    <>
      {started ? (
        <div ref={starsRef}>
          {stars.map((s) => (
            <Star
              key={s.id}
              fill="yellow"
              color="yellow"
              size={64}
              onPointerDown={handleClick}
              style={{
                translate: `${s.x}px ${s.y}px`,
                filter: 'drop-shadow(0 0 32px yellow)',
                opacity: 1,
              }}
            />
          ))}
        </div>
      ) : (
        <button
          className="mx-32 mt-64 px-6 py-4 font-bold text-2xl border rounded-xl bg-neutral-100 dark:bg-neutral-700 dark:text-white"
          type="button"
          onPointerDown={() => setStarted(true)}
        >
          Start
        </button>
      )}
      <p className="absolute top-2 right-8 text-3xl font-bold dark:text-white">
        Score: {score}
      </p>
    </>
  );
};

import { Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const all = [
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -500),
  },
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -1000),
  },
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -1000),
  },
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -1500),
  },
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -2000),
  },
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -2000),
  },
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -2500),
  },
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -3000),
  },
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -3000),
  },
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -3500),
  },
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -35000),
  },
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -4000),
  },
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -4000),
  },
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -4500),
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
    y: Math.floor(Math.random() * -3000),
  },
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -3500),
  },
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -35000),
  },
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -4000),
  },
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -4000),
  },
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -4500),
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
    y: Math.floor(Math.random() * -4000),
  },
  {
    id: crypto.randomUUID(),
    x: Math.floor(Math.random() * (360 + 1)),
    y: Math.floor(Math.random() * -4500),
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
];

export default () => {
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState(all);
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    started
      ? starsRef.current?.animate(
          { transform: 'translateY(5000px)' },
          {
            duration: 40000,
            fill: 'both',
            easing: 'cubic-bezier(.64,.64,.72,.71)',
            iterations: Infinity,
          },
        )
      : starsRef.current?.getAnimations()[0].cancel();
  }, [started]);

  useEffect(() => {
    console.log('effect');
    const id = setInterval(() => {
      setStars([
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -500),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -1000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -1500),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -2000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -2500),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -3000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -3000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -3500),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -35000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -4000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -4000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -4500),
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
          y: Math.floor(Math.random() * -3000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -3500),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -35000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -4000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -4000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -4500),
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
          y: Math.floor(Math.random() * -4000),
        },
        {
          id: crypto.randomUUID(),
          x: Math.floor(Math.random() * (360 + 1)),
          y: Math.floor(Math.random() * -4500),
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
    }, 38000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const handleClick = (e: PointerEvent) => {
    const target = e.target as SVGAElement;
    target.style.opacity = '0';
    setScore((p) => p + 1);
  };

  return (
    <div className="game w-full h-full">
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
                position: 'absolute',
                translate: `${s.x}px ${s.y}px`,
                filter: 'drop-shadow(0 0 32px yellow)',
              }}
            />
          ))}
        </div>
      ) : (
        <button
          className="mx-32 mt-64 px-6 py-4 font-bold text-2xl border border-neutral-300 rounded-xl bg-neutral-100 dark:bg-neutral-700 shadow-lg dark:text-white"
          type="button"
          onPointerDown={() => setStarted(true)}
        >
          Start
        </button>
      )}
      <p className="absolute top-2 right-8 text-3xl font-bold dark:text-white">
        Score: {score}
      </p>
    </div>
  );
};

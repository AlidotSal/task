import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { Gamepad2, Heart, House, UserRound } from 'lucide-react';

import './App.css';
import { useEffect, useRef, useState } from 'react';
import Home from './components/Home';
import Game from './components/Game';
import Pay from './components/Pay';

const App = () => {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);
  const [selected, setSelected] = useState(0);
  const bg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bg.current?.animate(
      {
        transform: `translateX(${selected * 74 + 10}px)`,
      },
      { duration: 200, fill: 'both', easing: 'ease-out' },
    );
  }, [selected]);
  return (
    <AppRoot
      className="w-full h-full bg-black/4 dark:bg-black/90"
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      <div className="w-full h-full bg-black/4 dark:bg-black/90">
        {selected === 0 && <Home />}
        {selected === 1 && <Game />}
        {selected === 2 && <Pay />}
        <section className="fixed bottom-0 grid grid-flow-col justify-center items-center w-full h-20 p-2 shadow-[0_0_22px_rgb(0,0,0,0.35)] text-black text-lg font-bold dark:text-white/65 dark:bg-neutral-950 dark:shadow-[0_0_22px_rgb(0,0,0,0.75)]">
          <div
            ref={bg}
            className="bg absolute left-8 w-32 h-3/4 bg-blue-950 rounded-full -z-1"
          />
          <div
            className={`grid grid-flow-col justify-center items-center gap-2 py-4 px-6 ${selected === 0 ? 'w-36 text-white' : ''}`}
            onPointerDown={() => setSelected(0)}
          >
            <House strokeWidth={3} />
            {selected === 0 ? <p>Home</p> : null}
          </div>
          <div
            className={`grid grid-flow-col justify-center items-center gap-2 py-4 px-6 ${selected === 1 ? 'w-36 text-white' : ''}`}
            onPointerDown={() => setSelected(1)}
          >
            <Gamepad2 strokeWidth={3} />
            {selected === 1 ? <p>Play</p> : null}
          </div>
          <div
            className={`grid grid-flow-col justify-center items-center gap-2 py-4 px-6 ${selected === 2 ? 'w-36 text-white' : ''}`}
            onPointerDown={() => setSelected(2)}
          >
            <Heart strokeWidth={3} />
            {selected === 2 ? <p>Likes</p> : null}
          </div>
          <div
            className={`grid grid-flow-col justify-center items-center gap-2 py-4 px-6 ${selected === 3 ? 'w-36 text-white' : ''}`}
            onPointerDown={() => setSelected(3)}
          >
            <UserRound strokeWidth={3} />
            {selected === 3 ? (
              <a href="https://t.me/ASGKh2Bot/Task">App</a>
            ) : null}
          </div>
        </section>
      </div>
    </AppRoot>
  );
};

export default App;

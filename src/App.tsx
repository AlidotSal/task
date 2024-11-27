import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { Heart, House, Search, UserRound } from 'lucide-react';

import './App.css';
import { useState } from 'react';

const App = () => {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);
  const [selected, setSelected] = useState('home');
  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      <svg className="w-full h-full">
        <rect x={50} y={60} width={100} height={100} />
      </svg>
      <section className="fixed bottom-0 flex justify-center items-center gap-2 w-full h-20 p-2 outline outline-1 outline-solid outline-neutral-600 text-black text-xl dark:text-white/65 dark:bg-neutral-950">
        <div
          className={`flex justify-center items-center gap-2 py-4 px-6 rounded-full ${selected === 'home' ? 'text-white bg-blue-950' : ''}`}
          onPointerDown={() => setSelected('home')}
        >
          <House />
          {selected === 'home' ? <p>Home</p> : null}
        </div>
        <div
          className={`flex justify-center items-center gap-2 py-4 px-6 rounded-full ${selected === 'search' ? 'text-white bg-blue-950' : ''}`}
          onPointerDown={() => setSelected('search')}
        >
          <Search />
          {selected === 'search' ? <p>Search</p> : null}
        </div>
        <div
          className={`flex justify-center items-center gap-2 py-4 px-6 rounded-full ${selected === 'likes' ? 'text-white bg-blue-950' : ''}`}
          onPointerDown={() => setSelected('likes')}
        >
          <Heart />
          {selected === 'likes' ? <p>Likes</p> : null}
        </div>
        <div
          className={`flex justify-center items-center gap-2 py-4 px-6 rounded-full ${selected === 'user' ? 'text-white bg-blue-950' : ''}`}
          onPointerDown={() => setSelected('user')}
        >
          <UserRound />
          {selected === 'user' ? (
            <a href="https://t.me/ASGKh2Bot/Task">App</a>
          ) : null}
        </div>
      </section>
    </AppRoot>
  );
};

export default App;

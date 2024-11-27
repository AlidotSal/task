import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot, Text } from '@telegram-apps/telegram-ui';
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
      <Text className="text-black dark:text-white">some text</Text>
      <section className="fixed bottom-0 grid grid-cols-4 gap-4 w-full h-20 p-2 outline outline-solid outline-neutral-600 text-black dark:text-white">
        <div
          className={`flex gap-2 ${selected === 'home' ? 'bg-neutral-900' : ''}`}
          onPointerDown={() => setSelected('home')}
        >
          <House />
          {selected === 'home' ? <p>Home</p> : null}
        </div>
        <div
          className={`flex gap-2 ${selected === 'home' ? 'bg-neutral-900' : ''}`}
          onPointerDown={() => setSelected('search')}
        >
          <Search />
          {selected === 'search' ? <p>Search</p> : null}
        </div>
        <div
          className={`flex gap-2 ${selected === 'home' ? 'bg-neutral-900' : ''}`}
          onPointerDown={() => setSelected('likes')}
        >
          <Heart />
          {selected === 'likes' ? <p>Likes</p> : null}
        </div>
        <div
          className={`flex gap-2 ${selected === 'home' ? 'bg-neutral-900' : ''}`}
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

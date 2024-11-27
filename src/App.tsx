import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot, Text } from '@telegram-apps/telegram-ui';
import { Heart, House, Search, UserRound } from 'lucide-react';

import './App.css';

const App = () => {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);
  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      <Text className="text-black dark:text-white">some text</Text>
      <section className="fixed bottom-0 grid grid-cols-4 gap-2 w-full h-16 p-2 outline outline-solid outline-neutral-600 text-black dark:text-white">
        <div className="flex gap-2">
          <House />
          <p>Home</p>
        </div>
        <div className="flex gap-2">
          <Search />
          <p>Search</p>
        </div>
        <div className="flex gap-2">
          <Heart />
          <p>Likes</p>
        </div>
        <div>
          <UserRound />
          <a href="https://t.me/ASGKh2Bot/Task">App</a>
        </div>
      </section>
    </AppRoot>
  );
};

export default App;

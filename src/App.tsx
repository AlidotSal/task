import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';

import { AppRoot, Section, Text } from '@telegram-apps/telegram-ui';

import './App.css';
import { Heart, House, Search, UserRound } from 'lucide-react';

const App = () => {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);
  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      <Text className="text-black dark:text-white">some text</Text>
      <Section className="fixed bottom-0 flex gap-2 h-64 mx-4 outline outline-solid outline-neutral-600">
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
      </Section>
    </AppRoot>
  );
};

export default App;

import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';

import { AppRoot, Section, Text } from '@telegram-apps/telegram-ui';

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
      <Section className="fixed bottom-0 flex gap-2 h-64 mx-4 outline outline-solid outline-neutral-600">
        <div>Home</div>
        <div>
          <a href="https://t.me/ASGKh2Bot/Task">App</a>
        </div>
        <div>Team</div>
        <div>About</div>
      </Section>
    </AppRoot>
  );
};

export default App;

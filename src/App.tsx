import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';

import { AppRoot, Text } from '@telegram-apps/telegram-ui';

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
    </AppRoot>
  );
};

export default App;

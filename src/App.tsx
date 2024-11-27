import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';

import { AppRoot } from '@telegram-apps/telegram-ui';

import './App.css';

const App = () => {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);
  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      <div>
        <p>some text</p>
      </div>
    </AppRoot>
  );
};

export default App;

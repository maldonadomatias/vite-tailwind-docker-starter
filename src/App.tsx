import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useTheme } from './context/theme-provider';
import { NAVIGATION_PATHS } from './constants/navigation';

import Home from './views/Home/Home';

function App() {
  const { theme } = useTheme();

  // Add or remove the 'dark-mode' class based on the selected theme
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  return (
    <>
      <Routes>
        <Route element={`${/* Insert Navbar */ ''}`}>
          <Route index path={NAVIGATION_PATHS.HOME_PATH} element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './global';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '@pages/MainPage';
import NotFoundPage from '@pages/NotFoundPage';
import ErrorPage from '@pages/ErrorPage';
import store from './store';

const App = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isValidBrowser, setIsValidBrowser] = useState(true);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  const isBrowserChrome = () => {
    const agt = navigator.userAgent.toLowerCase();
    if (agt.indexOf('chrome') !== -1) {
      setIsValidBrowser(true);
      return;
    }
    setIsValidBrowser(false);
  };

  useEffect(() => {
    isBrowserChrome();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Provider store={store}>
      <React.StrictMode>
        <GlobalStyle />
        {!isValidBrowser && <ErrorPage message={'Chrome 브라우저만 지원합니다😥'} />}
        {windowSize < 800 && <ErrorPage message={'화면 크기는 최소 800px 이상이어야 합니다😅'} />}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/*" component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  );
};

export default App;

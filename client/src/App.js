import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './global';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScheduleTitleModal from '@molecules/ScheduleTitleModal';
import SelectTaskModal from './components/molecules/SelectTaskModal';
import TopBar from '@organisms/TopBar';
import MainPage from '@pages/MainPage';
import LoginPage from '@pages/LoginPage';
import RankingPage from '@pages/RankingPage';
import NotFoundPage from '@pages/NotFoundPage';
import ErrorPage from '@pages/ErrorPage';
import store from './store';

const App = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isValidBrowser, setIsValidBrowser] = useState(true);
  const [shouldShowAddTaskModal, setShouldShowAddTaskModal] = useState(false);
  const [shouldShowSelectTaskModal, setShouldShowSelectTaskModal] = useState(false);

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

  const openAddTaskModal = () => {
    setShouldShowAddTaskModal(true);
  };
  const closeAddTaskModal = () => {
    setShouldShowAddTaskModal(false);
  };
  const openSelectTaskModal = () => {
    setShouldShowSelectTaskModal(true);
  };
  const closeSelectTaskModal = () => {
    setShouldShowSelectTaskModal(false);
  };

  return (
    <Provider store={store}>
      <React.StrictMode>
        <GlobalStyle />
        {!isValidBrowser && <ErrorPage message={'Chrome 브라우저만 지원합니다😥'} />}
        {windowSize < 800 && <ErrorPage message={'화면 크기는 최소 800px 이상이어야 합니다😅'} />}
        <BrowserRouter>
          <TopBar />
          <Switch>
            <Route path="/ranking" component={RankingPage} />
            <Route path="/login" component={LoginPage} />
            <Route
              exact
              path="/"
              render={() => (
                <MainPage
                  openAddTaskModal={openAddTaskModal}
                  openSelectTaskModal={openSelectTaskModal}
                />
              )}
            />
            <Route path="/*" component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
        {shouldShowAddTaskModal && <ScheduleTitleModal closeAddTaskModal={closeAddTaskModal} />}
        {shouldShowSelectTaskModal && (
          <SelectTaskModal closeSelectTaskModal={closeSelectTaskModal} />
        )}
      </React.StrictMode>
    </Provider>
  );
};

export default App;

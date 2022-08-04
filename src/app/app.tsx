import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Main } from 'pages/main';
import { SignInPage } from 'pages/sign-in';
import { SignUpPage } from 'pages/sign-up';
import { Layout } from './layout';
import { AuthorizedRoute } from './authorized-route';
import { GuestRoute } from './guest-route';
import { store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <AuthorizedRoute>
                  <Main />
                </AuthorizedRoute>
              }
            />
            <Route
              path="/sign-in"
              element={
                <GuestRoute>
                  <SignInPage />
                </GuestRoute>
              }
            />
            <Route
              path="/sign-up"
              element={
                <GuestRoute>
                  <SignUpPage />
                </GuestRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

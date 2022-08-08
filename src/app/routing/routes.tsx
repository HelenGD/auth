import { Layout } from 'app/ui/layout';
import { Main } from 'pages/main';
import { SignInPage } from 'pages/sign-in';
import { SignUpPage } from 'pages/sign-up';
import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthorizedRoute } from './authorized-route';
import { GuestRoute } from './guest-route';

export const AppRoutes: FC = () => {
  return (
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
  );
};

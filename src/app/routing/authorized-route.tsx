import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useProfile } from 'entities/profile';

export const AuthorizedRoute: FC<PropsWithChildren> = ({ children }) => {
  const profile = useProfile();

  if (!profile) {
    // Redirect them to the /sign-in page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/sign-in" replace />;
  }

  return <>{children}</>;
};

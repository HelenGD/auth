import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useProfile } from 'entities/profile';

export const GuestRoute: FC<PropsWithChildren> = ({ children }) => {
  const profile = useProfile();

  if (profile) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

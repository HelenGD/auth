import { FC, PropsWithChildren } from 'react';

export const AuthPage: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="h-screen w-screen flex place-content-center place-items-center bg-slate-50">
      {children}
    </div>
  );
};

import { FC, memo, PropsWithChildren } from 'react';

const AuthPage: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="h-screen w-screen flex place-content-center place-items-center bg-slate-50">
      {children}
    </div>
  );
};

const AuthPageMemo = memo(AuthPage);
export { AuthPageMemo as AuthPage };

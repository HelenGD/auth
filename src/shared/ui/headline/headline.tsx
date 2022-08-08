import { FC, PropsWithChildren } from 'react';

export const Headline: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <h1 className="text-xl mb-10">{children}</h1>;
};

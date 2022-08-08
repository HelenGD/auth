import { FC, PropsWithChildren } from 'react';

export const Card: FC<PropsWithChildren<{}>> = (props) => {
  const { children } = props;

  return (
    <div className="w-96 p-6 rounded-lg bg-white shadow-xl">{children}</div>
  );
};

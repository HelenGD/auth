import { FC, PropsWithChildren } from 'react';

type Props = {
  title: string;
};

export const Card: FC<PropsWithChildren<Props>> = (props) => {
  const { title, children } = props;

  return (
    <div className="w-96 p-6 rounded-lg bg-white shadow-xl">
      <h1 className="text-xl">{title}</h1>
      <hr className="my-3" />
      {children}
    </div>
  );
};

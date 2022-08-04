import { FC, PropsWithChildren } from 'react';

type Props = {
  type?: 'regular' | 'danger';
};

export const InputCaption: FC<PropsWithChildren<Props>> = (props) => {
  const { type = 'regular', children } = props;

  const color = type === 'danger' ? 'text-orange-500' : 'text-slate-500';

  return <div className={`text-sm ${color}`}>{children || <>&nbsp;</>}</div>;
};

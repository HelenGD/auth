import { ComponentProps, FC } from 'react';

type Props = ComponentProps<'label'>;

export const InputLabel: FC<Props> = (props) => {
  return (
    <label
      htmlFor="unknown"
      {...props}
      className="block text-sm font-medium text-slate-700"
    />
  );
};

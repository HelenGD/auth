import { ComponentProps, FC, memo } from 'react';

type Props = ComponentProps<'label'>;

const InputLabel: FC<Props> = (props) => {
  return (
    <label
      htmlFor="unknown"
      {...props}
      className="block text-sm font-medium text-slate-700"
    />
  );
};

const InputLabelMemo = memo(InputLabel);
export { InputLabelMemo as InputLabel };

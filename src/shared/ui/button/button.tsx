import { ComponentProps, FC } from 'react';

type Props = ComponentProps<'button'>;

export const Button: FC<Props> = (props) => {
  return (
    <button
      type="button"
      {...props}
      className="bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 disabled:bg-violet-300 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
    />
  );
};

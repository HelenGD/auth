import { ComponentProps, FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

type Props = ComponentProps<typeof RouterLink>;

export const Link: FC<Props> = (props) => (
  <RouterLink {...props} className="text-blue-600 visited:text-purple-600" />
);

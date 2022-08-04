import { useField } from 'formik';
import { FC } from 'react';

import { Input } from 'shared/ui/input';
import { InputCaption } from 'shared/ui/input-caption';
import { InputLabel } from 'shared/ui/input-label';
import { SignUpInput } from '../types/sign-up-input';

export const FieldPassword: FC = () => {
  const [field, meta] = useField<SignUpInput['password']>('password');

  return (
    <div>
      <InputLabel htmlFor="password">Password</InputLabel>
      <Input {...field} id="password" type="password" />
      <InputCaption type="danger">{meta.touched && meta.error}</InputCaption>
    </div>
  );
};

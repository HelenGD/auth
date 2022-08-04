import { useField } from 'formik';
import { FC } from 'react';

import { Input } from 'shared/ui/input';
import { InputCaption } from 'shared/ui/input-caption';
import { InputLabel } from 'shared/ui/input-label';
import { SignUpInput } from '../types/sign-up-input';

export const FieldConfirmPassword: FC = () => {
  const [field, meta] =
    useField<SignUpInput['confirmPassword']>('confirmPassword');

  return (
    <div>
      <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
      <Input {...field} id="confirmPassword" type="password" />
      <InputCaption type="danger">{meta.touched && meta.error}</InputCaption>
    </div>
  );
};

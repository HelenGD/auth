import { useField } from 'formik';
import { FC } from 'react';
import { Input } from 'shared/ui/input';
import { InputCaption } from 'shared/ui/input-caption';
import { InputLabel } from 'shared/ui/input-label';

export const FieldPassword: FC = () => {
  const [field, meta] = useField<string>('password');

  return (
    <div>
      <InputLabel htmlFor="password">Password</InputLabel>
      <Input {...field} id="password" type="password" />
      <InputCaption type="danger">{meta.touched && meta.error}</InputCaption>
    </div>
  );
};

import { useField } from 'formik';
import { FC } from 'react';
import { Input } from 'shared/ui/input';
import { InputLabel } from 'shared/ui/input-label';

export const FieldPassword: FC = () => {
  const [field, meta] = useField<string>('password');

  return (
    <div>
      <InputLabel htmlFor="password">Password</InputLabel>
      <Input {...field} id="password" type="password" />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </div>
  );
};

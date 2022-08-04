import { useField } from 'formik';
import { FC } from 'react';
import { Input } from 'shared/ui/input';
import { InputCaption } from 'shared/ui/input-caption';
import { InputLabel } from 'shared/ui/input-label';

export const FieldEmail: FC = () => {
  const [field, meta] = useField<string>('email');

  return (
    <div>
      <InputLabel htmlFor="email">Email</InputLabel>
      <Input {...field} id="email" />
      <InputCaption type="danger">{meta.touched && meta.error}</InputCaption>
    </div>
  );
};

import { useField } from 'formik';
import { FC } from 'react';

import { Input } from 'shared/ui/input';
import { InputCaption } from 'shared/ui/input-caption';
import { InputLabel } from 'shared/ui/input-label';
import { SignUpInput } from '../types/sign-up-input';

export const FieldName: FC = () => {
  const [field, meta] = useField<SignUpInput['name']>('name');

  return (
    <div>
      <InputLabel htmlFor="name">Name</InputLabel>
      <Input {...field} id="name" />
      <InputCaption type="danger">{meta.touched && meta.error}</InputCaption>
    </div>
  );
};

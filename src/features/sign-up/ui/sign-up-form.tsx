import { FC, useCallback } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';

import { InputCaption } from 'shared/ui/input-caption';
import { FieldEmail } from './field-email';
import { FieldPassword } from './field-password';
import { ButtonSubmit } from './button-submit';
import { schema } from '../config/schema';
import { useRegister } from '../hooks/use-register';
import { FieldName } from './field-name';
import { SignUpInput } from '../types/sign-up-input';
import { FieldConfirmPassword } from './field-confirm-password';

const initialValues: SignUpInput = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const SignUpForm: FC = () => {
  const { error, onRegister } = useRegister();

  const onSubmit = useCallback(
    (values: SignUpInput, actions: FormikHelpers<SignUpInput>) => {
      actions.setSubmitting(true);
      onRegister(values).finally(() => {
        actions.setSubmitting(false);
      });
    },
    [onRegister]
  );

  return (
    <Formik
      validateOnMount
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      <Form className="flex flex-col gap-y-3">
        <FieldName />
        <FieldEmail />
        <FieldPassword />
        <FieldConfirmPassword />
        <ButtonSubmit>Register</ButtonSubmit>
        {error && <InputCaption>{error}</InputCaption>}
      </Form>
    </Formik>
  );
};

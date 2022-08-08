import { Form, Formik, FormikHelpers } from 'formik';
import { FC, useCallback } from 'react';

import { FieldEmail } from './field-email';
import { FieldPassword } from './field-password';
import { ButtonSubmit } from './button-submit';
import { schema } from '../config/schema';
import { InputCaption } from 'shared/ui/input-caption';
import { useAuthenticate } from '../hooks/use-authenticate';
import { SignInInput } from '../types/sign-in-input';

const initialValues: SignInInput = {
  email: '',
  password: '',
};

export const SignInForm: FC = () => {
  const { error, onLogin } = useAuthenticate();

  const onSubmit = useCallback(
    (values: SignInInput, actions: FormikHelpers<SignInInput>) => {
      actions.setSubmitting(true);
      onLogin(values).finally(() => {
        actions.setSubmitting(false);
      });
    },
    [onLogin]
  );

  return (
    <Formik
      validateOnMount
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      <Form className="flex flex-col gap-y-3">
        <FieldEmail />
        <FieldPassword />
        <ButtonSubmit>Login</ButtonSubmit>
        {error && <InputCaption type="danger">{error}</InputCaption>}
      </Form>
    </Formik>
  );
};

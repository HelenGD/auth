import { Form, Formik } from 'formik';
import { FC } from 'react';

import { FieldEmail } from './field-email';
import { FieldPassword } from './field-password';
import { ButtonSubmit } from './button-submit';
import { schema } from '../config/schema';
import { InputCaption } from 'shared/ui/input-caption';
import { useAuthenticate } from '../hooks/use-authenticate';

const initialValues = {
  email: '',
  password: '',
};

export const SignInForm: FC = () => {
  const { error, onLogin } = useAuthenticate();

  return (
    <Formik
      validateOnMount
      validationSchema={schema}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        onLogin(values).finally(() => {
          actions.setSubmitting(false);
        });
      }}
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

import { Form, Formik } from 'formik';
import { FC, useState } from 'react';
import { FieldEmail } from './field-email';
import { FieldPassword } from './field-password';
import { ButtonSubmit } from './button-submit';
import { schema } from '../config/schema';
import { authenticate } from '../api/authenticate';
import { InputCaption } from 'shared/ui/input-caption';

const initialValues = {
  email: '',
  password: '',
};

export const SignInForm: FC = () => {
  const [error, setError] = useState('');

  return (
    <Formik
      validateOnMount
      validationSchema={schema}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        authenticate(values)
          .then(console.warn)
          .catch((e: Error) => {
            setError(e.message);
          })
          .finally(() => {
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

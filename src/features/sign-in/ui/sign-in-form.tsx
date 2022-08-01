import { Form, Formik } from 'formik';
import { FC } from 'react';
import { Button } from 'shared/ui/button';
import { FieldEmail } from './field-email';
import { FieldPassword } from './field-password';

const initialValues = {
  email: '',
  password: '',
};

export const SignInForm: FC = () => {
  return (
    <Formik
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      initialValues={initialValues}
    >
      <Form className="flex flex-col gap-y-6">
        <FieldEmail />
        <FieldPassword />
        <div>
          <Button type="submit">Login</Button>
        </div>
      </Form>
    </Formik>
  );
};

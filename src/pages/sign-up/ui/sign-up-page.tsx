import { SignUpForm } from 'features/sign-up';
import { Card } from './card';

export const SignUpPage = () => {
  return (
    <div className="h-screen w-screen flex place-content-center place-items-center bg-slate-50">
      <Card title="Sign Up">
        <SignUpForm />
      </Card>
    </div>
  );
};

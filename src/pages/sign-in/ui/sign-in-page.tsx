import { SignInForm } from 'features/sign-in';
import { Card } from './card';

export const SignInPage = () => {
  return (
    <div className="h-screen w-screen flex place-content-center place-items-center bg-slate-50">
      <Card title="Sign In">
        <SignInForm />
      </Card>
    </div>
  );
};

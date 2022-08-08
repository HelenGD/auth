import { SignUpForm } from 'features/sign-up';
import { AuthPage } from 'shared/ui/auth-page';
import { Card } from 'shared/ui/card';
import { Headline } from 'shared/ui/headline';
import { Link } from 'shared/ui/link';

export const SignUpPage = () => {
  return (
    <AuthPage>
      <Card>
        <Headline>
          Sign Up / <Link to="/sign-in">Sign In</Link>
        </Headline>

        <SignUpForm />
      </Card>
    </AuthPage>
  );
};

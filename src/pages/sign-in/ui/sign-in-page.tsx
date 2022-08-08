import { SignInForm } from 'features/sign-in';
import { AuthPage } from 'shared/ui/auth-page';
import { Card } from 'shared/ui/card';
import { Headline } from 'shared/ui/headline';
import { Link } from 'shared/ui/link';

export const SignInPage = () => {
  return (
    <AuthPage>
      <Card>
        <Headline>
          Sign In / <Link to="/sign-up">Sign Up</Link>
        </Headline>

        <SignInForm />
      </Card>
    </AuthPage>
  );
};

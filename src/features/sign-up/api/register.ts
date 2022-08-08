import { Profile } from 'entities/profile';
import { requestStripe } from 'request-stripe';
import { fakeFetch } from 'shared/api/fake-fetch';
import { SignUpInput } from '../types/sign-up-input';

export const register = (input: SignUpInput) => {
  return fakeFetch(input)
    .then((): Profile => ({ name: input.name }))
    .finally(requestStripe());
};

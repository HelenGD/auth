import { fakeFetch } from 'shared/api/fake-fetch';
import { SignInInput } from '../types/sign-in-input';

export const authenticate = (input: SignInInput) => {
  return fakeFetch(input);
};

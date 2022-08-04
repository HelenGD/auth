import { object, string } from 'yup';

export const schema = object({
  password: string().required(),
  email: string().required().email(),
});

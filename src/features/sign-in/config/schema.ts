import { object, string } from 'yup';

export const schema = object({
  password: string().required().min(6),
  email: string().required().email(),
});

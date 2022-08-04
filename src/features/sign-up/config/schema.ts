import { object, string, ref } from 'yup';

export const schema = object({
  password: string().required().min(6),
  email: string().required().email(),
  name: string().required(),
  confirmPassword: string()
    .required()
    .min(6)
    .oneOf([ref('password')], 'Your passwords do not match.'),
});

import { useAppDispatch } from 'app/store';
import { useCallback, useState } from 'react';
import { profileSlice } from 'entities/profile';
import * as API from '../api/register';
import type { SignUpInput } from '../types/sign-up-input';

export const useRegister = () => {
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();

  const onRegister = useCallback(
    (values: SignUpInput) => {
      setError('');
      return API.register(values)
        .then((profile) => {
          dispatch(profileSlice.actions.authorize(profile));
        })
        .catch((e: Error) => {
          setError(e.message);
        });
    },
    [dispatch]
  );

  return {
    error,
    onRegister,
  };
};

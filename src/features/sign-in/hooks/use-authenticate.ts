import { useAppDispatch } from 'app/store';
import { useCallback, useState } from 'react';
import { profileSlice } from 'entities/profile';
import * as API from '../api/authenticate';
import type { SignInInput } from '../types/sign-in-input';

export const useAuthenticate = () => {
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();

  const onLogin = useCallback(
    (values: SignInInput) => {
      setError('');
      return API.authenticate(values)
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
    onLogin,
  };
};

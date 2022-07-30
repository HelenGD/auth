import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useAppSelector } from 'app';
import { Profile } from './types';

type State = Profile | null;
const initialState = null as State;

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    authorize(_, action: PayloadAction<Profile>) {
      return action.payload;
    },
    unauthorize() {
      return undefined;
    },
  },
});

export const useProfile = () => useAppSelector((state) => state.profile);

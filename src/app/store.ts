import { configureStore } from '@reduxjs/toolkit';
import { profileSlice } from 'entities/profile';
import { useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector<RootState>;

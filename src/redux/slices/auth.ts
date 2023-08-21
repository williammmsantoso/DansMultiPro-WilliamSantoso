import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';

interface AuthState {
  value: boolean,
}

const initialState: AuthState = {
  value: false,
}

export const authData = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
});

export const { setAuthStatus } = authData.actions;

export const selectAuthStatus = (state: RootState) => state.auth.value;

export default authData.reducer;
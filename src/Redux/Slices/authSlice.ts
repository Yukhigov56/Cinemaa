import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Интерфейсы
interface AuthState {
  user: users | null;
  loading: boolean;
  error: string | null;
}

interface users {
  email: string | null;
  name?: string | null;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("user") || "null"), 
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    loginReqest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSicces: (state, action: PayloadAction<users>) => {
      state.loading = false;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { loginReqest, loginSicces, loginFailure, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getBaseUrl = () => {
  const url = import.meta.env.VITE_API_URL;
  return url.replace(/\/+$/, "");
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${getBaseUrl()}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json().catch(() => null);
      if (!response.ok) {
        return rejectWithValue(
          data?.message || "Registrasi gagal, silakan periksa data Anda",
        );
      }
      return data;
    } catch (err) {
      return rejectWithValue(
        err.message || "Gagal terhubung ke server backend",
      );
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${getBaseUrl()}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        return rejectWithValue(data?.message || "Email atau password salah");
      }

      const token = data?.data?.token || data?.token;
      const user = data?.data?.user || data?.user || { email };

      return {
        token,
        user,
        message: data?.message || "Login berhasil!",
      };
    } catch (err) {
      return rejectWithValue(
        err.message || "Gagal terhubung ke server backend",
      );
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
    isLoggedIn: false,
    loading: false,
    success: false,
    error: null,
    // nggak usah
    message: null,
  },
  reducers: {
    resetAuthState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = null;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isLoggedIn = false;
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.message = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.message = action.payload?.message || "Registrasi berhasil!";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || "Terjadi kesalahan";
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.message = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.error = null;
        state.message = action.payload.message || "Login berhasil!";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.isLoggedIn = false;
        state.error = action.payload || "Login gagal";
      });
  },
});

export const { resetAuthState, logout } = authSlice.actions;
export default authSlice.reducer;

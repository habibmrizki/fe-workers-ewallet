import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getBaseUrl = () => {
  const url = import.meta.env.VITE_API_URL;
  return url.replace(/\/+$/, "");
};

export const getProfile = createAsyncThunk(
  "user/getProfile",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await fetch(`${getBaseUrl()}/user/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        return rejectWithValue(data?.message || "Gagal mengambil data profil");
      }

      return data?.data?.profile;
    } catch (error) {
      return rejectWithValue(error.message || "Gagal mengambil data profil");
    }
  },
);

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (profileData, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await fetch(`${getBaseUrl()}/user/update`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
        body: profileData,
      });
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        return rejectWithValue(data?.message || "Gagal memperbarui profil");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Gagal memperbarui profil");
    }
  },
);

export const changePassword = createAsyncThunk(
  "user/changePassword",
  async ({ oldPassword, newPassword }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await fetch(`${getBaseUrl()}/user/change-password`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          old_password: oldPassword,
          new_password: newPassword,
        }),
      });
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        return rejectWithValue(data?.message || "Gagal mengubah password");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Gagal mengubah password");
    }
  },
);

export const changePin = createAsyncThunk(
  "user/changePin",
  async (pin, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await fetch(`${getBaseUrl()}/user/change-pin`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pin }),
      });
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        return rejectWithValue(data?.message || "Gagal mengubah PIN");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Gagal mengubah PIN");
    }
  },
);

export const setPin = createAsyncThunk(
  "user/setPin",
  async (pin, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await fetch(`${getBaseUrl()}/user/pin`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pin }),
      });
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        return rejectWithValue(data?.message || "Gagal menetapkan PIN");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Gagal menetapkan PIN");
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    loading: false,
    error: null,
    securityLoading: false,
    securityError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(changePassword.pending, (state) => {
        state.securityLoading = true;
        state.securityError = null;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.securityLoading = false;
        state.securityError = null;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.securityLoading = false;
        state.securityError = action.payload;
      })
      .addCase(changePin.pending, (state) => {
        state.securityLoading = true;
        state.securityError = null;
      })
      .addCase(changePin.fulfilled, (state) => {
        state.securityLoading = false;
        state.securityError = null;
      })
      .addCase(changePin.rejected, (state, action) => {
        state.securityLoading = false;
        state.securityError = action.payload;
      })
      .addCase(setPin.pending, (state) => {
        state.securityLoading = true;
        state.securityError = null;
      })
      .addCase(setPin.fulfilled, (state) => {
        state.securityLoading = false;
        state.securityError = null;
      })
      .addCase(setPin.rejected, (state, action) => {
        state.securityLoading = false;
        state.securityError = action.payload;
      });
  },
});

export default userSlice.reducer;

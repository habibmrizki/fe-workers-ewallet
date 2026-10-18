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

export const deleteAvatar = createAsyncThunk(
  "user/deleteAvatar",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await fetch(`${getBaseUrl()}/user/avatar`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        return rejectWithValue(data?.message || "Gagal menghapus avatar");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Gagal menghapus avatar");
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
  reducers: {
    clearProfile: (state) => {
      state.profile = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addAsyncThunk(getProfile, {
        pending: (state) => {
          state.loading = true;
          state.error = null;
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.profile = action.payload;
        },
        rejected: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
      })
      .addAsyncThunk(updateProfile, {
        pending: (state) => {
          state.loading = true;
          state.error = null;
        },
        fulfilled: (state) => {
          state.loading = false;
          state.error = null;
        },
        rejected: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
      })
      .addAsyncThunk(deleteAvatar, {
        pending: (state) => {
          state.loading = true;
          state.error = null;
        },
        fulfilled: (state) => {
          state.loading = false;
          if (state.profile) state.profile.avatar = null;
        },
        rejected: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
      })
      .addAsyncThunk(changePassword, {
        pending: (state) => {
          state.securityLoading = true;
          state.securityError = null;
        },
        fulfilled: (state) => {
          state.securityLoading = false;
          state.securityError = null;
        },
        rejected: (state, action) => {
          state.securityLoading = false;
          state.securityError = action.payload;
        },
      })
      .addAsyncThunk(changePin, {
        pending: (state) => {
          state.securityLoading = true;
          state.securityError = null;
        },
        fulfilled: (state) => {
          state.securityLoading = false;
          state.securityError = null;
        },
        rejected: (state, action) => {
          state.securityLoading = false;
          state.securityError = action.payload;
        },
      })
      .addAsyncThunk(setPin, {
        pending: (state) => {
          state.securityLoading = true;
          state.securityError = null;
        },
        fulfilled: (state) => {
          state.securityLoading = false;
          state.securityError = null;
        },
        rejected: (state, action) => {
          state.securityLoading = false;
          state.securityError = action.payload;
        },
      });
  },
});

export const { clearProfile } = userSlice.actions;
export default userSlice.reducer;

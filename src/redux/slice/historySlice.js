import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getBaseUrl = () =>
  (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

export const fetchHistory = createAsyncThunk(
  "history/fetchHistory",
  async (
    { page = 1, limit = 7, search = "" } = {},
    { getState, rejectWithValue },
  ) => {
    try {
      const token = getState().auth.token;
      const headers = { Authorization: `Bearer ${token}` };
      const params = new URLSearchParams({
        page: String(page),
        limit: String(limit),
        search,
      });
      0;
      const response = await fetch(`${getBaseUrl()}/history?${params}`, {
        headers,
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        return rejectWithValue(
          result?.message || "Gagal mengambil riwayat transaksi",
        );
      }

      return {
        transactions: Array.isArray(result.data)
          ? result.data.map((transaction) => ({
              ...transaction,
              amount: Number(transaction.amount) || 0,
            }))
          : [],
        meta: result.metadata || {},
      };
    } catch (error) {
      return rejectWithValue(
        error.message || "Gagal terhubung ke server backend",
      );
    }
  },
);

const historySlice = createSlice({
  name: "history",
  initialState: {
    transactions: [],
    meta: { current_page: 1, total_page: 0, total_data: 0 },
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload.transactions;
        state.meta = action.payload.meta;
      })
      .addCase(fetchHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Gagal mengambil riwayat transaksi";
      });
  },
});

export default historySlice.reducer;

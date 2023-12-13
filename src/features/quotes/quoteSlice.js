import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  quote: [],
  error: '',
};

export const fetchQuote = createAsyncThunk('quote/fetchQuote', async () => {
  const apikey = 'QhIZ4yn9aAJns00FmcPjkQ==7UzA0vhMAkRAAu0i';  // Replace with your actual API key
  let category = 'life';
  const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'X-Api-Key': apikey,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {

    console.error('Error: ', error);
    throw error;
  }
});

const quoteSlice = createSlice({
  name: 'quotes',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchQuote.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchQuote.fulfilled, (state, action) => {
      state.loading = false;
      state.quote = action.payload;
      state.error = '';
    });
    builder.addCase(fetchQuote.rejected, (state, action) => {
      state.loading = false;
      state.quote = [];
      state.error = action.error.message;
    });
  },
});

export default quoteSlice.reducer;

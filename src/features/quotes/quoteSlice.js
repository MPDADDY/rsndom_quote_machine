// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//     loading: false,
//     quote:'',
//     error:'',
// }


// const fetchQuote = createAsyncThunk('quote/fetchQuote', ()=> {
// const apikey = 'QhIZ4yn9aAJns00FmcPjkQ==7UzA0vhMAkRAAu0i'
// let category = 'happyness';
// const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=' + category

//     return axios
//     .get(apiUrl, {
//         headers:{
//             'X-Api-Key': apikey,
//             contentType: 'application/json',
//             success: function(result) {
//                 console.log(result);
//             },
//         }
//     })
//     .then((response)=> response.data.json)
// })


// const quoteSlice = createSlice({
//     name: 'quotes',
//     initialState,
//     extraReducers:(builder)=> {
//        builder.addCase(fetchQuote.pending, (state)=>{
//         state.loading = true
//        })
//        builder.addCase(fetchQuote.fulfilled,(state, action)=> {
// return (
//     state.loading = false,
//     state.quote = action.payload,
//     state.error = ''
// )
//        })  
//        builder.addCase(fetchQuote.rejected,(state, action)=> {
// return (
//     state.loading = false,
//     state.quote = '',
//     state.error = action.error.message
// )
//        })
//     }
// })

// export default quoteSlice.reducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  quote: '',
  error: '',
};

const fetchQuote = createAsyncThunk('quote/fetchQuote', async () => {
  const apikey = 'QhIZ4yn9aAJns00FmcPjkQ==7UzA0vhMAkRAAu0i';  // Replace with your actual API key
  let category = 'happyness';
  const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'X-Api-Key': apikey,
        'Content-Type': 'application/json',
      },
    });

    // Log the result to the console
    console.log(response.data);

    // Return the data to be stored in the Redux state
    return response.data;
  } catch (error) {
    // Log the error to the console
    console.error('Error: ', error);

    // Throw the error so it can be caught by the rejected action
    throw error;
  }
});

const quoteSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers:{},
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
      state.quote = '';
      state.error = action.error.message;
    });
  },
});

export default quoteSlice.reducer;

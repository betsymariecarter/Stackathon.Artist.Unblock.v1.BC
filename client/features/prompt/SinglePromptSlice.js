import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSinglePromptAsync = createAsyncThunk(
  "singlePrompt",
  async (id) => {
    console.log("from inside the thunk", id)
    try {
      const { data } = await axios.get(`/api/prompts/${id}`);
      console.log("data:", data)
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

// export const editPromptAsync = createAsyncThunk(
//   "campuses/edit",
//   async ({ id, title, imageUrl, description, medium }) => {
//     const { data } = await axios.put(`/api/prompts/${id}`, {
//       shortPrompt,
//       imageUrl,
//       description,
//       medium,
//     });
//     return data;
//   }
// );

const initialState = {
  singlePrompt: {},
};

export const singlePromptSlice = createSlice({
  name: "singlePrompt",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSinglePromptAsync.fulfilled, (state, action) => {
      state.singlePrompt = action.payload;
    });
    // builder.addCase(editPromptAsync.fulfilled, (state, action) => {
    //   state = action.payload;
    // });
  },
});

export const selectSinglePrompt = (state) => {
  return state.singlePrompt;
};

export default singlePromptSlice.reducer;
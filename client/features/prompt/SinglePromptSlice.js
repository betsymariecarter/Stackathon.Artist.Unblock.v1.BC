import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSinglePromptAsync = createAsyncThunk(
  "singlePrompt",
  async (id) => {
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
  prompt: {},
};

export const singlePromptSlice = createSlice({
  name: "prompt",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSinglePromptAsync.fulfilled, (state, action) => {
      state.prompt = action.payload;
    });
    // builder.addCase(editArtworkAsync.fulfilled, (state, action) => {
    //   state = action.payload;
    // });
  },
});

export const selectSinglePrompt = (state) => {
  return state.prompt;
};

export default singlePromptSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPromptsAsync = createAsyncThunk("prompts", async () => {
  const { data } = await axios.get(`/api/prompts`);
  return data;
});

export const addPromptAsync = createAsyncThunk(
  "prompt/new",
  async ({ shortPrompt, category, expandedPrompt }) => {
    const { data } = await axios.post("/api/prompts", {
      shortPrompt,
      category,
      expandedPrompt,
    });
    return data;
  }
);

// export const deletePromptsAsync = createAsyncThunk('artworks/deleteProduct', async (id) => {
//   const { data } = await axios.delete(`/api/prompts/${id}`)
//   return data
// })

export const allPromptSlice = createSlice({
  name: "prompts",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPromptsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addPromptAsync.fulfilled, (state, action) => {
      state.push(action.payload)
    })
    // builder.addCase(deleteProductAsync.fulfilled, (state, action) => {
    //   const newState = state.filter((product) => product.id !== action.payload.id)
    //   return newState
    // })
  },
});

export const selectPrompts = (state) => state.prompts;

export default allPromptSlice.reducer;

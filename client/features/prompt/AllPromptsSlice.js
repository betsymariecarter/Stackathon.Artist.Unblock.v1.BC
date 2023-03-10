import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPromptsAsync = createAsyncThunk('prompts', async () => {
  const { data } = await axios.get(`/api/prompts`)
  return data;
})

// export const addPromptsAsync = createAsyncThunk(
//   'prompt/new',
//   async ({ imageUrl, title, description, medium }) => {
//     const { data } = await axios.post('/api/prompts', {
//       imageUrl,
//       title,
//       description,
//       medium,
//     })
//     return data
//   }
// )

// export const deletePromptsAsync = createAsyncThunk('artworks/deleteProduct', async (id) => {
//   const { data } = await axios.delete(`/api/prompts/${id}`)
//   return data
// })

export const allPromptsSlice = createSlice({
  name: 'prompts',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPromptsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    // builder.addCase(addProductAsync.fulfilled, (state, action) => {
    //   state.push(action.payload)
    // })
    // builder.addCase(deleteProductAsync.fulfilled, (state, action) => {
    //   const newState = state.filter((product) => product.id !== action.payload.id)
    //   return newState
    // })
  },
})

export const selectPrompts = (state) => state.prompts

export default allPromptsSlice.reducer;
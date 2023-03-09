import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchGalleryAsync = createAsyncThunk('gallery', async (medium) => {
  const { data } = await axios.get(`/api/gallery?category=${medium.type}`)
  return data
})

// export const addArtworkAsync = createAsyncThunk(
//   'artwork/new',
//   async ({ imageUrl, title, description, medium }) => {
//     const { data } = await axios.post('/api/artworks', {
//       imageUrl,
//       title,
//       description,
//       medium,
//     })
//     return data
//   }
// )

// export const deleteArtworkAsync = createAsyncThunk('artworks/deleteProduct', async (id) => {
//   const { data } = await axios.delete(`/api/artwork/${id}`)
//   return data
// })

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGalleryAsync.fulfilled, (state, action) => {
      return action.payload
    })
    // builder.addCase(addProductAsync.fulfilled, (state, action) => {
    //   state.push(action.payload)
    // })
    // builder.addCase(deleteProductAsync.fulfilled, (state, action) => {
    //   const newState = state.filter((product) => product.id !== action.payload.id)
    //   return newState
    // })
  },
})

export const selectGallery = (state) => state.gallery

export default gallerySlice.reducer

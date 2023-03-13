import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGalleryAsync = createAsyncThunk("gallery", async () => {
  const { data } = await axios.get(`/api/gallery`);
  return data;
});

export const uploadArtworkAsync = createAsyncThunk(
  "gallery/upload",
  async ({
    imageUrl,
    title,
    description,
    medium,
    // userId
  }) => {
    const { data } = await axios.post("/api/gallery", {
      imageUrl,
      title,
      description,
      medium,
      // userId,
    });
    return data;
  }
);

// export const deleteArtworkAsync = createAsyncThunk('artworks/deleteProduct', async (id) => {
//   const { data } = await axios.delete(`/api/artwork/${id}`)
//   return data
// })

export const gallerySlice = createSlice({
  name: "gallery",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGalleryAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(uploadArtworkAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    // builder.addCase(deleteArtworkAsync.fulfilled, (state, action) => {
    //   const newState = state.filter((product) => product.id !== action.payload.id)
    //   return newState
    // })
  },
});

export const selectGallery = (state) => state.gallery;

export default gallerySlice.reducer;

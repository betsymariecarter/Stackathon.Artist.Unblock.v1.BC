import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleArtworkAsync = createAsyncThunk(
  "singleArtwork",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/gallery/${id}`);
      console.log("data:", data)
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

// export const editArtworkAsync = createAsyncThunk(
//   "campuses/edit",
//   async ({ id, title, imageUrl, description, medium }) => {
//     const { data } = await axios.put(`/api/gallery/${id}`, {
//       title,
//       imageUrl,
//       description,
//       medium,
//     });
//     return data;
//   }
// );

const initialState = {
  artwork: {},
};

export const singleArtworkSlice = createSlice({
  name: "artwork",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleArtworkAsync.fulfilled, (state, action) => {
      state.artwork = action.payload;
    });
    // builder.addCase(editArtworkAsync.fulfilled, (state, action) => {
    //   state = action.payload;
    // });
  },
});

export const selectSingleArtwork = (state) => {
  return state.artwork;
};

export default singleArtworkSlice.reducer;
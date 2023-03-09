import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import gallerySlice from "../features/artwork/AllArtworkSlice";
import singleArtworkSlice from "../features/artwork/SingleArtworkSlice";
import authReducer from "../features/auth/authSlice";
import AllPromptsSlice from "../features/prompt/AllPromptsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    gallery: gallerySlice,
    artwork: singleArtworkSlice,
    prompts: AllPromptsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import gallerySlice from "../features/artwork/AllArtworkSlice";
import singleArtworkSlice from "../features/artwork/SingleArtworkSlice";
import authReducer from "../features/auth/authSlice";
import AllPromptsSlice from "../features/prompt/AllPromptsSlice";
import singlePromptSlice from "../features/prompt/SinglePromptSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    gallery: gallerySlice,
    artwork: singleArtworkSlice,
    prompts: AllPromptsSlice,
    singlePrompt: singlePromptSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";

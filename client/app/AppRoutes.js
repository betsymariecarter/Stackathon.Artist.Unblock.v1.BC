import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import { me } from "./store";
import Gallery from "../features/artwork/allArtworks";
import SingleArtwork from "../features/artwork/singleArtwork";
import Prompts from "../features/prompt/allPrompts";
import SinglePrompt from "../features/prompt/singlePrompt";
import UploadArtwork from "../features/artwork/uploadArtwork";
import UserProfile from "../features/user/UserProfile";
import CreatePrompt from "../features/prompt/createPrompt";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<SingleArtwork />} />
        <Route path="/prompts" element={<Prompts />} />
        <Route path="/prompts/:id" element={<SinglePrompt />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Routes>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
          <Route exact path="/uploadArt" element={<UploadArtwork />} />
          <Route exact path="/newPrompt" element={ <CreatePrompt/>}/>
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;

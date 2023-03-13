import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadArtworkAsync } from "./AllArtworkSlice";

const UploadArtwork = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImage] = useState("");
  const [medium, setMedium] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUser] = useState(`${auth.me.id}`)
//   const currentUser = useSelector((state) => state.auth.me.id);

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(uploadArtworkAsync({ title, imageUrl, medium, description, userId }));
    setTitle("");
    setImage("");
    setMedium("");
    setDescription("");
    setUser("");
  };

  return (
    <form id="newArt" onSubmit={handleSubmit}>
      <h2>Upload Art</h2>
      <label>Title:</label>
      <input
        name="artTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Image:</label>
      <input
        name="artimgUrl"
        value={imageUrl}
        onChange={(e) => setImage(e.target.value)}
      />

      <label>Medium:</label>
      <input
        name="artMedium"
        value={medium}
        onChange={(e) => setMedium(e.target.value)}
      />

      <label>Description:</label>
      <input
        name="artDescription"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UploadArtwork;

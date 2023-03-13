import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  fetchSingleArtworkAsync,
  selectSingleArtwork,
} from "./SingleArtworkSlice";

//images are broken on the singleArtwork

const SingleArtwork = () => {
  const dispatch = useDispatch();
  const artworkId = useParams();

  const singleArtwork = useSelector(selectSingleArtwork);

  console.log(singleArtwork);

  useEffect(() => {
    dispatch(fetchSingleArtworkAsync(artworkId.id));
  }, [dispatch]);

  const {
    id,
    title,
    imageUrl,
    medium,
    description,
    // user,
    // promptId
  } = singleArtwork.artwork;

  console.log(id);

  return (
    <section id="singleArt">
      <div key={id}>
        <h2>{title}</h2>
        <img className="singleImg" src={`${imageUrl}`} />
        {/* <p>By: {user.username}</p> <- can't seem to access, causes page to crash*/}
        <p>Medium: {medium}</p>
        <p>Description:</p>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default SingleArtwork;

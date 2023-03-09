import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchSingleArtworkAsync, selectSingleArtwork } from "./SingleArtworkSlice";

const SingleArtwork = () => {
  const dispatch = useDispatch();
  const artworkId = useParams();

  const singleArtwork = useSelector(selectSingleArtwork);

  console.log(artworkId)

  useEffect(() => {
    dispatch(fetchSingleArtworkAsync(artworkId.id));
  }, [dispatch]);

  const { id, title, imageUrl, medium, description, 
    // userId, promptId 
  } = singleArtwork.artwork;

    console.log(id)

  return (
    <section id="singleArt">
      <div key={id}>
        <h2>{title}</h2>
        <img src={`${imageUrl}`} />
        {/* <p>By: {userId}</p> */}
        <p>Medium: {medium}</p>
        <p>Description:</p>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default SingleArtwork;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchSingleArtworkAsync, selectSingleArtwork } from "./SingleArtworkSlice";

const SingleCampus = () => {
  const dispatch = useDispatch();
  const { artworkId } = useParams();

  const singleArtwork = useSelector(selectSingleArtwork);

  useEffect(() => {
    dispatch(fetchSingleArtworkAsync(artworkId));
  }, [dispatch]);

  const { id, title, imageUrl, medium, description, artist } =
    singleArtwork.artwork;

  return (
    <section id="campus">
      <div key={id}>
        <h2>{title}</h2>
        <img src={`${imageUrl}`} />
        <p>By: {artist}</p>
        <p>Medium: {medium}</p>
        <p>Description:</p>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default SingleCampus;

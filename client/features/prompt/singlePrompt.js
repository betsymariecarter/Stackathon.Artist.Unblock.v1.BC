import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  fetchSinglePromptAsync,
  selectSinglePrompt,
} from "./SinglePromptSlice";

const SinglePrompt = () => {
  const dispatch = useDispatch();
  const singlePrompt = useSelector(selectSinglePrompt);
  const promptId = useParams();

  console.log(promptId.id);

  useEffect(() => {
    dispatch(fetchSinglePromptAsync(promptId.id));
  }, [dispatch]);

  console.log(singlePrompt);

  const {
    id,
    shortPrompt,
    category,
    expandedPrompt,
    artworks,
    // userId, promptId
  } = singlePrompt.singlePrompt;

  console.log("Data", artworks);

  return (
    <section id="singlePrompt">
      <div key={id}>
        <h2>{shortPrompt}</h2>
        {/* <p>By: {userId}</p> */}
        <p>Category: {category}</p>
        <p>{expandedPrompt}</p>
      </div>
      <h2>Submissions To This Prompt:</h2>
      {artworks?.map((artwork) => (
        <div className="artworkCard" key={artwork?.id}>
          <img className="galleryView" src={`${artwork?.imageUrl}`} />
          {console.log(artwork)}
          <Link to={`/gallery/${artwork?.id}`}>
            <h2>{artwork?.title}</h2>
          </Link>
          <h3>{artwork.user?.username}</h3>
        </div>))}
    </section>
  );
};

export default SinglePrompt;

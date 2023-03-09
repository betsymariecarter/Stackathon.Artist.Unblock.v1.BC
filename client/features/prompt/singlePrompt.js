import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchSinglePromptAsync, selectSinglePrompt } from "./SinglePromptSlice";

const SinglePrompt = () => {
  const dispatch = useDispatch();
  const promptId = useParams();

  const singlePrompt = useSelector(selectSinglePrompt);

  console.log(singlePrompt)

  useEffect(() => {
    dispatch(fetchSinglePromptAsync(promptId.id));
  }, [dispatch]);

  const { id, shortPrompt, category, longPrompt, 
    // userId, promptId 
  } = singlePrompt.prompt;

    console.log(shortPrompt)

  return (
    <section id="singlePrompt">
      <div key={id}>
        <h2>{shortPrompt}</h2>
        {/* <p>By: {userId}</p> */}
        <p>Category: {category}</p>
        <p>{longPrompt}</p>
      </div>
    </section>
  );
};

export default SinglePrompt;
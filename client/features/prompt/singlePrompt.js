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
    // userId, promptId
  } = singlePrompt.singlePrompt;

  console.log(shortPrompt);

  return (
    <section id="singlePrompt">
      <div key={id}>
        <h2>{shortPrompt}</h2>
        {/* <p>By: {userId}</p> */}
        <p>Category: {category}</p>
        <p>{expandedPrompt}</p>
      </div>
    </section>
  );
};

export default SinglePrompt;

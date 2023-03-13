import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchPromptsAsync, selectPrompts } from "./AllPromptsSlice";
import { useParams, NavLink } from "react-router-dom";

const Prompts = () => {
  const dispatch = useDispatch();
  const prompts = useSelector(selectPrompts);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  useEffect(() => {
    dispatch(fetchPromptsAsync(prompts));
  }, [dispatch]);

  console.log(prompts);

  return (
    <div className="promptsParentDiv">
      <h1>Prompts</h1>
      {isLoggedIn && (
        <NavLink to={`/newPrompt`}>
          <h2>Upload Your Own Prompt!</h2>
        </NavLink>
      )}
      {prompts.map((prompt) => (
        <ul className="promptList" key={prompt.id}>
          <li>
            <NavLink to={`/prompts/${prompt.id}`}>
              <h3>{prompt.shortPrompt}</h3>
            </NavLink>
            <p>Category: {prompt.category}</p>
            {/* {isLoggedIn && <button>★ Favorite</button>} */}
          </li>
          {/* maybe implement a favorite button? */}
        </ul>
      ))}
    </div>
  );
};

export default Prompts;

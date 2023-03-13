import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPromptAsync } from "./AllPromptsSlice";

const CreatePrompt = () => {
  const [shortPrompt, setShort] = useState("");
  const [category, setCategory] = useState("");
  const [expandedPrompt, setExpanded] = useState("");
  const [userId, setUser] = useState(``);
  const userSelect = useSelector((state) => state.auth.me.id);

  // console.log("the user is:", userSelect)

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      addPromptAsync({ shortPrompt, category, expandedPrompt, userId })
    );
    setShort("");
    setCategory("");
    setExpanded("");
    setUser(`${userSelect}`);
  };

  return (
    <form id="newPrompt" onSubmit={handleSubmit}>
      <h2>New Prompt</h2>
      <label>Short Version of Prompt:</label>
      <p className="elaboration">Be brief and to the point. [i.e. "Draw a pretty girl," "Draw High Heels," "Draw your character in Rococo Style Clothes."]</p>
      <input
        name="artTitle"
        value={shortPrompt}
        onChange={(e) => setShort(e.target.value)}
      />

      <label>Category:</label>
      <select
        name="promptCategory"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="practice">Practice</option>
        <option value="creative">Creative</option>
        <option value="doodle">Doodle</option>
        <option value="other">Other</option>
      </select>

      <label>Extended Prompt:</label>
      <p className="elaboration">Give examples, mention potential directions a person could take it, or simply expand upon your original prompt.</p>
      <input
        name="artMedium"
        className="bigbox"
        value={expandedPrompt}
        onChange={(e) => setExpanded(e.target.value)}
      />

      <button className="newPromptSubmit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CreatePrompt;

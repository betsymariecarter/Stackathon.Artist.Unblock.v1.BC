import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const UserProfile = (props) => {
const loggedInUser = useSelector((state) => state.auth.me);
console.log("data:", loggedInUser)

  return (
    <div className="profileParentDiv">
    <img className="avatarProfile" src={loggedInUser.avatar}/>
      <h1 className="profileTitleText">{loggedInUser.username}'s Profile</h1>
      <h3 className="profileSubText">Name: {loggedInUser.username}</h3>
      <h3>Pronouns: {loggedInUser.pronouns}</h3>
      <p>About: {loggedInUser.about}</p>
    </div>
  );
};

export default UserProfile;
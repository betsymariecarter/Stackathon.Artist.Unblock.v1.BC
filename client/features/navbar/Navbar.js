import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const currentUser = useSelector((state) => state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <h1 className="headTxt">Artist Unblock</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/prompts">Prompts</Link>
            {/* <select>
              <option>Upload</option>
              <option onClick={navigate("/uploadArt")}>Art</option>
              <option onClick={navigate("/newPrompt")}>Prompt</option>
            </select> */}
            <Link to="/uploadArt">Upload Art</Link>
            <Link to={`/users/${currentUser}`}>My Profile</Link>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
            </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/prompts">Prompts</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;

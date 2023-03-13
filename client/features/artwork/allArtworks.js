import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchGalleryAsync, selectGallery } from "./AllArtworkSlice";
import { useParams, Link } from "react-router-dom";

const Gallery = () => {
  const dispatch = useDispatch();
  const gallery = useSelector(selectGallery);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  // const toggleFavorite = () => {
  //   for (i = 0; i < gallery.length; i++) {
  //     const faveStatus = gallery[i].isFavorite;
  //     return !faveStatus;
  //   }
  // };

  //use another association (i.e. user.has many artwork as favorite)
  //update routes for a single user to include their favorites
  //eager loading again
  //array of artwork objects (i.e. user.favorites = array of objects)

  // const toggleFavorite = (faveStatus) => {
  // !faveStatus
  // };

  //favebutton -> redux goes to a thunk that sends a put request to the express route to update the favorites
  //user -> inside of put route, update current user to add artwork
  //juke -> array of songs

  //front-end when button is clicked, it will dispatch the thunk
  //accept the userId + artworkId

  useEffect(() => {
    dispatch(fetchGalleryAsync(gallery));
  }, [dispatch]);

  console.log(gallery.id);

  return (
    <div className="galleryParentDiv">
      <h1>Gallery</h1>
      {gallery.map((artwork) => (
        <div className="artworkCard" key={artwork.id}>
          <img className="galleryView" src={`${artwork.imageUrl}`} />
          {console.log(artwork)}
          <Link to={`/gallery/${artwork.id}`}>
            <h2>{artwork.title}</h2>
          </Link>
          <h3>{artwork.user?.username}</h3>
          {isLoggedIn && (
            <button>★ Favorite</button>
          )}
          {/* maybe implement a favorite button? */}
        </div>
      ))}
    </div>
  );
};

export default Gallery;

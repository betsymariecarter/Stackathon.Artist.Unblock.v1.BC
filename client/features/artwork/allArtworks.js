import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchGalleryAsync, selectGallery } from "./AllArtworkSlice";
import { useParams, Link } from "react-router-dom";

const Gallery = () => {
  const dispatch = useDispatch();
  const gallery = useSelector(selectGallery);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  useEffect(() => {
    dispatch(fetchGalleryAsync(gallery));
  }, [dispatch]);

  console.log(gallery.id)

  return (
    <div className="galleryParentDiv">
      <h1>Gallery</h1>
      {gallery.map((artwork) => (
        <div className="artworkCard" key={artwork.id}>
          <img src={`/${artwork.imageUrl}`} />
          {console.log(artwork)}
          <Link to={`/gallery/${artwork.id}`}>
            <h2>{artwork.title}</h2>
          </Link>
          {isLoggedIn && <button>★ Favorite</button>}
          {/* maybe implement a favorite button? */}
        </div>
      ))}
    </div>
  );
};

export default Gallery;

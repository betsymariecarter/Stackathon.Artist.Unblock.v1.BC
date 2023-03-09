import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchGalleryAsync, selectGallery } from "./AllArtworkSlice";

const Gallery = () => {
    const dispatch = useDispatch();
    const gallery = useSelector(selectGallery)
    const isLoggedIn = useSelector((state) => !!state.auth.me.id);

    useEffect(() => {
        dispatch(fetchGalleryAsync(gallery));
    }, [dispatch]);

    return (
        <div className="galleryParentDiv">
        <h1>Gallery</h1>
            {gallery.map((artwork) => (
            <div className="artworkCard">
                <img src={`/${artwork.imageUrl}`}/>
                <h2>{artwork.title}</h2>
                {isLoggedIn && <button>★ Favorite</button>}
                {/* maybe implement a favorite button? */}
            </div>))}
            </div>
    )
}

export default Gallery;
import React, { useState, useEffect } from "react";

const faveButton = () => {
  const [user, setUser] = useState(null);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  return <FindInitialState userId={user.id} artworkId={artwork.id}/>
}

const FindInitialState = () => {
    let faveBool;

    return <SetStateAndToggle faveBool={faveBool} userId={user.id} artworkId={artwork.id}/>
}

const setFaveAndToggle = () => {
    const [favorite, setFavorite] = useState(faveBool);

    const toggleFavorite = (artwork.id)
}

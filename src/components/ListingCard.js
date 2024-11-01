import React, { useState } from "react";

function ListingCard({listing, onDelete}) {

  const {id, description, location, image} = listing
  const [ favorite, setFavorite ] = useState(true)

  console.log(listing)  

  function handleFavoriteClick() {
    setFavorite(!favorite)
  }

  function handleDeleteClick() {
    onDelete(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

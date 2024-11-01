import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDelete}) {

  console.log(listings)


  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} onDelete={onDelete}/>
        ))   }
      </ul>
    </main>
  );
}

export default ListingsContainer;

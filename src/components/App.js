import React, { useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import AddList from "./AddList"

function App() {

  const [ listings, setListings] = useState([])
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((r) => r.json())
      .then((data) => setListings(data))
  },[])

  console.log(listings)

  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method:'DELETE',
    })
      .then((r) => r.json());
    setListings(listings.filter(listing => listing.id !== id))  
  }

  function handleSearch(searchWord) {
    setSearch(searchWord)
  }

  function addListing(listingObj) {
    console.log(listingObj)
    fetch('http://localhost:6001/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(listingObj)
    })
      .then((r) => r.json())
      .then((newListing) => setListings([...listings, newListing]));
      
  }

  const filterListings = listings.filter((listing) => 
    listing.description.toLowerCase() .includes(search.toLowerCase()))
                                      .sort((a, b) => {
                                        if (a.location < b.location) return -1;
                                        if (a.location > b.location) return 1;
                                        return 0
                                      })
  

  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <AddList onAddListing={addListing} />
      <ListingsContainer listings={filterListings} onDelete={handleDelete}/>
    </div>
  );
}

export default App;

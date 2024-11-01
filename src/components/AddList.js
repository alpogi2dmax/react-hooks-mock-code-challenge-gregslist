import React, { useState } from 'react'

function AddList({onAddListing}) {

    const [ description, setDescription ] = useState('')
    const [ image, setImage ] = useState('')
    const [ location, setLocation ] = useState('')

    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }

    function handleImageChange(e) {
        setImage(e.target.value)
    }

    function handleLocationChange(e) {
        setLocation(e.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        let listingObj = {
            description: description,
            image: image,
            location, location
        }
        onAddListing(listingObj)
        setDescription('')
        setImage('')
        setLocation('')
        
    }

    

    return (
        <form onSubmit={handleSubmit}>
            <label>Add A Listing - 
            <input type="text" name="description" placeholder="Description" value={description} onChange={handleDescriptionChange}></input>
            <input type="text" name="image" placeholder="Image Link" value={image} onChange={handleImageChange}></input>
            <input type="text" name="location" placeholder="Location" value={location} onChange={handleLocationChange}></input>
            <input type="submit"></input>
            </label>
        </form>
    )

}

export default AddList
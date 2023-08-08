import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function CreateListing() {

    const history=useNavigate();

    const [title,setTitle]=useState('')
    const [category,setCategory]=useState('')
    const [description,setDescription]=useState('')
    const [contact,setContact]=useState('')

    async function submit(e){
        e.preventDefault();

        axios.post('http://localhost:8000/CreateListing', {
            title, category, description, contact
        })
        
        history('/home')
    }


    return (
        <div className="listing">

            <h1>Listing</h1>

            <form action="POST">
                <input type="title" onChange={(e) => { setTitle(e.target.value) }} placeholder="Title"  />
                <input type="category" onChange={(e) => { setCategory(e.target.value) }} placeholder="Category"  />
                <input type="description" onChange={(e) => { setDescription(e.target.value) }} placeholder="Description"  />
                <input type="contact" onChange={(e) => { setContact(e.target.value) }} placeholder="Contact"  />
                <input type="submit" onClick={submit} />

            </form>
        </div>
    )
}

export default CreateListing
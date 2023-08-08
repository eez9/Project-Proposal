import React, { useEffect, useState } from "react"
import axios from "axios"
import MyListingHelper from "./MyListingHelper"

function MyListing() {

    const [cards, getCards] = useState('')

    useEffect(() => {
        getCardInfo()
    }, [])

    const getCardInfo = () => {
        axios.get('http://localhost:8000/MyListing')
        .then((response) => {
            const allCards = response.data
            getCards(allCards)
        })
        .catch(error => console.error(`Error: ${error}`))
    }
    
    return(
        <MyListingHelper cards = {cards} />
    )
}

export default MyListing
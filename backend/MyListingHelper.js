import React from "react"
import {Card} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

function MyListingHelper(props) {

    const displayCards = (props) => {
        const {cards} = props

        if(cards.length > 0) {
            return(
                cards.map((card, index) => {
                    console.log(card)
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Body key={card._id}>
                                <Card.Title className='card'>{card.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{card.contact}</Card.Subtitle>
                                    <Card.Text>
                                        {card.description}
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
            )
        } else {
            return (<h3>No listings yet!</h3>)
        }
        }
            return (
                <div>
                {displayCards(props)}
                </div>
            )
}

export default MyListingHelper
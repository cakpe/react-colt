import axios from 'axios';
import React, { Component } from 'react'
import Card from './Card';

const BASE_API_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends Component {
    state = {
        deck: null,
        drawn: []
    }

    getCard = async () => {
        //request card from api
        let deck_id = this.state.deck.deck_id;
        let cardUrl = `${BASE_API_URL}/${deck_id}/draw/`;

        try {
            let cardRes = await axios.get(cardUrl);
            if(!cardRes.data.success) {
                throw new Error("No card remaining");
            }

            //store in state array
            let card = cardRes.data.cards[0];
            this.setState(state => ({
                drawn: [
                    ...state.drawn, 
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }));
        } catch(err) {
            alert(err);
        }
    }
    
    //the non-async way
    // getCard = () => {
    //     //request card from api
    //     let deck_id = this.state.deck.deck_id;
    //     let cardUrl = `${BASE_API_URL}/${deck_id}/draw/`;

    //     let cardRes;
    //     axios.get(cardUrl).then((response) => {
    //         cardRes = response;
            
    //         //store in state array
    //         let card = cardRes.data.cards[0];
    //         this.setState(state => ({
    //             drawn: [
    //                 ...state.drawn, 
    //                 {
    //                     id: card.code,
    //                     image: card.image,
    //                     name: `${card.value} of ${card.suit}`
    //                 }
    //             ]
    //         }));
    //     })
    //     .catch((err) => console.log(err));
    // }

    //think of this as useEffect in react hooks
    async componentDidMount() {
        let deck = await axios.get(`${BASE_API_URL}/new/shuffle`);
        this.setState({ deck: deck.data});
    }

    render () {
        let cards = this.state.drawn.map(card => (
            <Card key={card.id} name={card.name} image={card.image}/>
        ))

        return (
            <div>
                <h1>Card Dealer</h1>
                {cards}
                <button onClick={this.getCard}>Get Card!</button>
            </div>
        );
    }
}

export default Deck;
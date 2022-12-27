import React, { Component } from 'react'
import axios from "axios"
import './JokeList.css'
import Joke from './Joke'
import uuid from 'react-uuid';

class JokeList extends Component {

    static defaultProps = {
        numJokes: 10
    }

    state = {
        jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]") //what this line is saying is parse jokes from local storage or parse the empty array string
    }

    componentDidMount() {
        if(this.state.jokes.length === 0) this.getJokes();
    }

    getJokes = async () => {
        let jokes = [];
        while(jokes.length < this.props.numJokes) {
            let res = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"}});
            jokes.push({id: uuid(), joke: res.data.joke, votes: 0});
        }

        this.setState({ jokes: jokes });

        //then store jokes in local storage. You can only store strings; hene the JSON.stringify
        window.localStorage.setItem("jokes", JSON.stringify(jokes));   
    }

    handleVote = (id, delta) => {
        this.setState (
            st => (
                {
                    jokes: this.state.jokes.map(joke => {
                        return joke.id === id ? {...joke, votes: joke.votes + delta}: joke
                    })
                }
            )
        );
    }

    render() {
        return (
            <div className='JokeList'>
                <div className='JokeList-sidebar'>
                    <h1 className='JokeList-title'><span>Dad</span> Jokes</h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt='smiley face'/>
                    <button className='JokeList-getmore'>New Jokes</button>
                </div>

                <div className='JokeList-jokes'>
                    {this.state.jokes.map(joke => {
                        return <Joke key={joke.id} votes={joke.votes} text={joke.joke} handleVote={this.handleVote} id={joke.id}/>
                    })}
                </div>
            </div>
        )
    }
}

export default JokeList;
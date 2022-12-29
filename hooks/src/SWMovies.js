import React, { useState, useEffect } from "react";
import axios from "axios";

function SWMovies() {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");

  //if you want the useEffect to call an async function, you define it within the useEffect and call it like so below
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://swapi.co/api/films/${number}/`);
      setMovie(response.data);
    }
    getData();
  }, [number]); //what this is sayis is we only want useEffect to run when the number in state is changed. There can be more than one thing in the array

  return (
    <div>
      <h1>Pick A Movie</h1>
      <h4>{movie.title}</h4>
      <p>{movie.opening_crawl}</p>
      <select value={number} onChange={e => setNumber(e.target.value)}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
      </select>
    </div>
  );
}
export default SWMovies;

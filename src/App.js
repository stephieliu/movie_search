import React from 'react';
import {useEffect} from 'react';
import './App.css'; // Applies the css style to the webpage
import SearchIcon from './search.svg';

// api key containing movie information
const API_URL = 'http://www.omdbapi.com?apikey=ebe37347';

const movie1 = {
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
    "Title": "Italian Spiderman",
    "Type": "movie",
    "Year": "2007",
    "imdbID": "tt2705436"
}
const App = () => {

    const searchMovies = async (title) => {
        // Call the api:
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        // Can check data using console (inspect webpage)
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);
    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="search for movies"
                    // Can statically set a value (can no longer search anything)
                    value="Superman"
                    // onChange allows you to actually modify the value
                    onChange={() => {}}
                />
                <img
                    src = {SearchIcon}
                    alt = "search icon"
                    onClick={() =>{}}
                />
            </div>

            <div className="container">
            <div className="movie">
                <div>
                    <p>{movie1.Year}</p>
                </div>

                <div>
                    <img
                        src={movie1.Poster !== 'N/A'? movie1.Poster: 'https://placeholder.com/400'}
                        alt={movie1.Title}
                    />
                </div>

                <div>
                    <span>{movie1.Type}</span>
                    <h3>{movie1.Title}</h3>
                </div>
            </div>
            </div>
        </div>
    );
}

// Remember that components must be exported so they can be called
export default App;
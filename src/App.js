import React from 'react';
import {useState, useEffect} from 'react';
import './App.css'; // Applies the css style to the webpage
import SearchIcon from './search.svg'; 
import MovieCard from './MovieCard';
// api key containing movie information
const API_URL = 'http://www.omdbapi.com?apikey=ebe37347';

// const movie1 = {
//     "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
//     "Title": "Italian Spiderman",
//     "Type": "movie",
//     "Year": "2007",
//     "imdbID": "tt2705436"
// }

const App = () => {

    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    // Personal addition: on Enter key press, also trigger search event
    const handleKeyPress=(event) => {
        if(event.key==='Enter'){
            searchMovies(searchTerm);
        }
    }

    const searchMovies = async (title) => {
        // Call the api:
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        // Can check data using console (inspect webpage)
        // console.log(data.Search);

        // Pass data into setMovies state
        setMovies(data.Search);
    }

    // Initially, we want the search to be empty
    useEffect(() => {
        searchMovies('');
    }, []);

    return(
        <div className="app">
            <h1>Movie Search</h1>

            <div className="search">
                <input
                    placeholder="search for movies"
                    // Can statically set a value (can no longer search anything)
                    // value="Superman"

                    // Dynamically set a search
                    value={searchTerm}

                    // onChange allows you to actually modify the value
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyUp={handleKeyPress}
                />
                <img
                    src = {SearchIcon}
                    alt = "search icon"
                    onClick={() =>searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0?(
                <div className="container">
                    {/* Shows a single movie */}
                    {/* <MovieCard movie1={movie1}/> */}

                    {/* Open a dynamic block of code: */}
                    {movies.map((movie)=>(
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ):(
                <div className="empty">
                    <h2>No movies found.</h2>
                </div>
            )}
        </div>
    );
}

// Remember that components must be exported so they can be called
export default App;
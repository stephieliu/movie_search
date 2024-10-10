import React from 'react';
import {useEffect} from 'react';
import './App.css'; // Applies the css style to the webpage
import SearchIcon from './search.svg';

// api key containing movie information
const API_URL = 'http://www.omdbapi.com?apikey=ebe37347';

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
            </div>
        </div>
    );
}

// Remember that components must be exported so they can be called
export default App;
// .jsx file is preferable when creating new component in react, but doesn't really have a difference compared to .js

import React from 'react';

const MovieCard=({movie})=>{
    return(
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img
                    src={movie.Poster !== 'N/A'? movie.Poster: 'https://placeholder.com/400'}
                    alt={movie.Title}
                />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}
 export default MovieCard;
import React, { useEffect, useState } from 'react';
import instance from './axios';
import requests from './requests';

function Header() {
    const [movie, setMovie] = useState('');
    useEffect(() => {
        instance.get(requests.fetchToRated)
            .then(movie => {
                const randomMovie = Math.floor(Math.random() * movie.data.results.length);
                setMovie(movie.data.results[randomMovie]);
            })
            .catch(error => console.log(error));
    }, [])
    console.log(movie);
    return (
        <header className='bg-cover bg-center flex flex-col justify-center p-2 md:p-6 lg:p-12' style={{ backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, backgroundPosition: 'center center', height: '400px' }}>
            <h1 className='text-3xl font-bold'>{movie?.name || movie?.title || movie?.original_name}</h1>
            <div className='flex space-x-6 mt-4 mb-6'>
                <button className='focus:outline-none hover:bg-gray-700 py-2 px-4 rounded bg-gray-600 text-white'>Play</button>
                <button className='focus:outline-none hover:bg-gray-700 p-2 rounded bg-gray-600 text-white'>Read more</button>
            </div>
            <p className='text-lg wrap max-w-md '>
                {movie?.overview?.substr(0,150)+'...'}
            </p>
        </header>
    )
}

export default Header

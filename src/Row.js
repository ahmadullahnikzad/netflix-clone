import React,{useState,useEffect} from 'react';
import instance from './axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const imagesBaseUrl = 'https://image.tmdb.org/t/p/original';



function Row({ title, fetchUrl,isLarge }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    useEffect(() => {
        instance.get(fetchUrl)
            .then((movies) => setMovies(movies.data.results))
            .catch(error => console.log(error));
    }, [fetchUrl]);
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,

        }
    }
    const handleClick = (movie) => {
        console.log(movie.name||movie.title||movie.original_name||movie.original_title)
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name||movie?.original_name||movie?.title||movie?.original_title||'')
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch(error => console.log(error));
        }
    }
    return (
        <div className='mx-2 md:mx-4'>
            <h1 className='text-2xl font-bold mb-2 my-5'>{title}</h1>
            <section className = 'flex space-x-3 overflow-x-auto py-3' >
                {
                movies.map(movie => {
                    const { backdrop_path, id,name } = movie;
                    return <img onClick={()=>handleClick(movie)} className = {
                        isLarge ? 'object-cover w-48 h-60 transform hover:scale-105 ease-in-out duration-70 transition-transform' : 'object-fit w-40 h-40 transform hover:scale-105 ease-in-out duration-120 transition-transform'
                    }
                    src = {`${imagesBaseUrl}${backdrop_path}`} alt = {name} key = {id}/>
                })
                }
            </section>
            {
                    trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>
            }
        </div>
    )
}

export default Row

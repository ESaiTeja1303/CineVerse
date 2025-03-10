import React, { useEffect, useState } from 'react'
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import Footer from './Footer';

const API_URl='http://www.omdbapi.com/?i=tt3896198&apikey=a36ee31e';


function App() {
    const [movies,setMovies]=useState([]);

    const [searchTerm,setSearchTerm] = useState('');

    const searchMovies = async(title)=>{
        const response=await fetch(`${API_URl}&s=${title}`);
        const data =await response.json();
        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('Avengers');
        
        
    },[])
  return (
    <div className='app'>
        <h1>CineVerse </h1>
        <p>A universe of cinema</p>

        <div className='search'>
            <input placeholder="search for movies"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <img
            src={SearchIcon}
            alt="search"
            onClick={()=>searchMovies(searchTerm)}
            />
        </div>

        {
            movies?.length>0
            ?(
            <div className='container'>
                {movies.map((movie)=>(
                    <MovieCard movie={movie}/>
            ))}
                </div>
            ) :(
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
            )
        }
        
        <Footer/>
    </div>
  )
}

export default App
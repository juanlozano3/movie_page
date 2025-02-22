import MovieCard from "../components/MovieCard"
import {useState} from "react";

function Home(){

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "The Shawshank Redemption", release_date: 1994},
        {id: 2, title: "The Godfather", release_date: 1972},
        {id: 3, title: "The Dark Knight", release_date: 2008},
        {id: 4 , title: "toy story", release_date: 1995}
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert("searching for " + searchQuery);
        setSearchQuery("-----");
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form"> 
                <input type = "text"
                 placeholder="search for a movies ..." 
                 className="search input"
                 value = {searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 />    
                <button type="submit" className="search-btn">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie= {movie} key={movie.id}/>
                ))};
            </div>
        </div>
    );
}


export default Home;
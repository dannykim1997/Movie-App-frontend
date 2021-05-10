import MovieCard from '../Components/MovieCard';
import "semantic-ui-css/semantic.min.css";

const MovieContainer = (props) => {
    return (
      <div className="ui four stackable cards">
        {props.movies.map((movieData, index) => <MovieCard movie={movieData} key={index} />)}
      </div>
    );

}

export default MovieContainer
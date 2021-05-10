import MovieCard from '../Components/MovieCard';
import "semantic-ui-css/semantic.min.css";

const MovieContainer = (props) => {
    return (
      <div className="ui four stackable cards">
        {props.movies.map((movieData, id) => <MovieCard movie={movieData} key={id} />)}
      </div>
    );

}

export default MovieContainer
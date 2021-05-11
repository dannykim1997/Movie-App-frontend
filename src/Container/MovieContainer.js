import MovieCard from '../Components/MovieCard';
import "semantic-ui-css/semantic.min.css";

const MovieContainer = (props) => {
    return (
      <div className="ui four stackable cards">
        {props.movies.map((movie, id) => <MovieCard movie={movie} key={id} />)}
      </div>
    );

}

export default MovieContainer
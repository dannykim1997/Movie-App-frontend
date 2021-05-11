import MovieCard from '../Components/MovieCard';
import "semantic-ui-css/semantic.min.css";
import MovieSpecs from '../Components/MovieSpecs'

const MovieContainer = (props) => {
    return (
      <div className="ui four stackable cards">
        {!props.movieView ? props.movies.map((movie, id) => <MovieCard movie={movie} key={id} view={props.view} />) : <MovieSpecs movie={props.movie} />}
      </div>
    );

}

export default MovieContainer
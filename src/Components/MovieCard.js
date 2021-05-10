import { Card, Image } from "semantic-ui-react";

const MovieCard = (props) => {

  const img_url = "https://image.tmdb.org/t/p/original"
    return (

      <Card raised className="card-size" style={{width: "325px"}}>
        <Card.Content> 
          <Image src={`${img_url}` + props.movie.poster_path} className="card-image"/>
          <Card.Header>
              {props.movie.title}
          </Card.Header>
          <Card.Description>
              {props.movie.overview}
          </Card.Description> <br />   
          <Card.Meta >
          {/* <strong>Genre:</strong> {props.movie.genre}<br />   */}
          </Card.Meta>
        </Card.Content>
      </Card>
    )
}

export default MovieCard

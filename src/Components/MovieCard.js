import { Card, Image } from "semantic-ui-react";

const MovieCard = (props) => {
    return (

      <Card raised className="card-size" style={{width: "325px"}}>
        <Card.Content> 
          <Card.Header>
              {props.movie.name}
          </Card.Header>
          <Image src={props.movie.poster_path} className="card-image"/>
          <Card.Description>
              <strong>Overview</strong><br />
              {props.movie.overview}
          </Card.Description> <br />   
          <Card.Meta >
          <strong>Genre:</strong> {props.movie.genre}<br />  
          </Card.Meta>
        </Card.Content>
      </Card>
    )
}

export default MovieCard

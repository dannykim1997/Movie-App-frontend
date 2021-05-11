import { Card, Image } from "semantic-ui-react";

const MovieCard = (props) => {

    return (

      <Card raised className="card-size" style={{width: "325px"}}>
        <Card.Content> 
          <Image src={props.movie.image} className="card-image"/>
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

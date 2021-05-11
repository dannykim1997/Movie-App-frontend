import { Card, Image } from "semantic-ui-react";

const MovieCard = (props) => {
  return (
    <Card raised onClick={(e) => props.view(e, props.movie)} className="card-size" style={{ width: "325px" }}>
      <Card.Content>
        <Card.Header>{props.movie.attributes.title}</Card.Header>
        <Image src={props.movie.attributes.image} className="card-image" />
        <Card.Description>
          {props.movie.attributes.overview}
        </Card.Description>{" "}
      </Card.Content>
    </Card>
  );
};

export default MovieCard;

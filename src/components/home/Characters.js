import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Characters = ({ id, name, homeworld, species, image }) => {
  homeworld = homeworld ? " is from " + homeworld : "'s homeplanet is not known";

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className="card__img" src={`${image}`} alt={`${name}`} />
      <Card.Body className="card__txt">
        <Link to={`detail/${id}`}>
          <Card.Title>{name}</Card.Title>
        </Link>
        <Card.Text>
          is of the species {species}, and {name}
          {homeworld}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Characters.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Characters;

// get 404 on results that don't show an image (there is a placeholder in the url...), both on home and detail page. I guess the visitor wouldn't mind as the placeholder shows, but I'm sure there is a way to avoid this error. I have tried several things, replacing image etc, without any luck. Didn't get any help, so I just deliever the assignment knowing there needs to be done something about this.

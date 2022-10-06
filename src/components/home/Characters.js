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

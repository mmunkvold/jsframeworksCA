import PropTypes from "prop-types";

const Heading = (props) => {
  return <h1>{props.title}</h1>;
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;

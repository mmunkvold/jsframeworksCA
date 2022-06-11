import { Link } from "react-router-dom";

const CharacterDetail = ({ name, homeworld, species, image, height, eyeColor, hairColor, masters, apprentices, diedLocation }) => {
  diedLocation = diedLocation && diedLocation.length > 1 ? ` ${diedLocation}` : "not dead/or not known if or where";
  masters = masters && masters.length > 1 ? masters + " " : "no masters";
  apprentices = apprentices && apprentices.length > 1 ? apprentices + " " : "no apprentices";
  hairColor = hairColor ? hairColor : "no hair";
  height = height ? height : "not known";
  homeworld = homeworld ? homeworld : "not known";

  return (
    <div className="detail">
      <div className="img-container">
        <img src={`${image}`} alt={`${name}`} />
      </div>
      <div className="txt-container">
        <h2>Some facts about {name}</h2>
        <ul>
          <li>
            <span>Hair color:</span> {hairColor}
          </li>
          <li>
            <span>Eye color:</span> {eyeColor}
          </li>
          <li>
            <span>Height:</span> {height}
          </li>
          <li>
            <span>Homeworld:</span> {homeworld}
          </li>
          <li>
            <span>Species:</span> {species}
          </li>
          <li>
            <span>Masters:</span> {masters}
          </li>
          <li>
            <span>Apprentices:</span> {apprentices}
          </li>
          <li>
            <span>Died at:</span> {diedLocation}
          </li>
        </ul>
        <Link to="/">Back to result</Link>
      </div>
    </div>
  );
};

export default CharacterDetail;

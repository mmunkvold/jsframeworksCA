import { useState, useEffect } from "react";
import { allResultsUrl } from "../../constants/api";
import Characters from "./Characters";
import { Container, Row, Col } from "react-bootstrap";

const url = allResultsUrl;

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const results = await response.json();
          setCharacters(results);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <Container>
      <Row>
        <Col className="grid">
          {characters.map((character) => {
            const { id, name, homeworld, species, image } = character;
            return <Characters key={id} id={id} name={name} homeworld={homeworld} species={species} image={image} />;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterList;

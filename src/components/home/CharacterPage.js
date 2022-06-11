import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { itemUrl } from "../../constants/api";
import Heading from "../layout/Heading";
import CharacterDetail from "./CharacterDetail";

const CharacterPage = () => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const { id } = useParams();

  if (!id) {
    navigate("/");
  }

  const url = itemUrl(id);

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();

            setCharacter(json);
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
    },
    [url]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <>
      <Heading title={character.name} />
      <CharacterDetail
        key={id}
        name={character.name}
        homeworld={character.homeworld}
        species={character.species}
        image={character.image}
        diedLocation={character.diedLocation}
        masters={character.masters}
        apprentices={character.apprentices}
        hairColor={character.hairColor}
        height={character.height}
        eyeColor={character.eyeColor}
      />
    </>
  );
};

export default CharacterPage;

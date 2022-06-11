import Heading from "../layout/Heading";
import CharacterList from "./CharacterList";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <>
      <Heading title="Star Wars' Characters" />
      <Container>
        <CharacterList />
      </Container>
    </>
  );
};

export default Home;

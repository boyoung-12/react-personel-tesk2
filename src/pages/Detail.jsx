import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const Detail = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const pokemonId = searchParams.get("id");
  console.log(pokemonId);

  const pokemon = MOCK_DATA.find((item) => item.id.toString() === pokemonId);

  if (!pokemon) {
    alert("Pokemon Not found");
    return;
  }

  return (
    <InfoCard>
      <PokemonImage src={pokemon.img_url} />
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <div>type: {pokemon.types.join(",")}</div>
      <div>{pokemon.description}</div>
      <InfoCardButton onClick={() => navigate("/dex")}>back</InfoCardButton>
    </InfoCard>
  );
};

export default Detail;

const InfoCard = styled.div`
  width: 600px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const PokemonName = styled.div`
  color: red;
  font-weight: bold;
  font-size: 20px;
`;

const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
`;

const InfoCardButton = styled.button`
  width: 60px;
  height: 28px;
  background-color: black;
  border-radius: 5px;
  color: white;
  border-color: transparent;
`;

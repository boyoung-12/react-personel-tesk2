/* eslint-disable react/prop-types */
import styled from "styled-components";
import Pokemoncard from "./Pokemoncard";
import { useContext } from "react";
import { PokemonContext } from "../pokemonContext";

const Listboard = () => {
  const { contents } = useContext(PokemonContext);
  return (
    <PokemonListBoard>
      <ListBoxContainer>
        {contents.map((content) => (
          <Pokemoncard key={content.id} content={content}></Pokemoncard>
        ))}
      </ListBoxContainer>
    </PokemonListBoard>
  );
};

export default Listboard;

const PokemonListBoard = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: #e9e9e9;
  margin-top: 20px;
`;

const ListBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 20px;
  gap: 40px;
`;

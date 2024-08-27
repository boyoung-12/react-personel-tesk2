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
// 컴포넌트 분리해서 props를 내려주기전에는 listbox에 key값이 들어가있었는데, 분리후에 props로 내려줄때 pokemoncard에 key값을 주는것은
// 이것은 카드가 하나씩 만들어질 때 아이디를 주는 것이라서 만들어지는 대상에 id를 주는게 아니라 만드는 주체인 map에서 id를 써줘야하기 때문.
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

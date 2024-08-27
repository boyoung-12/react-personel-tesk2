/* eslint-disable react/prop-types */
import { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../pokemonContext";

const Pokemoncard = (props) => {
  const { navigate, AddListBoxToDashBoard } = useContext(PokemonContext);

  return (
    <ListBox>
      <ListBoxTextContainer>
        <ListBoxWithOutButton
          onClick={() => {
            navigate(`/detail?id=${props.content.id}`);
          }}
        >
          <ListBoxImage src={props.content.img_url} />

          <ListBoxTitleText>{props.content.korean_name}</ListBoxTitleText>
          <ListBoxNumberText>No. 0{props.content.id}</ListBoxNumberText>
        </ListBoxWithOutButton>
        <ListBoxButtonForListBoard
          onClick={() => AddListBoxToDashBoard(props.content.id)}
        >
          Add
        </ListBoxButtonForListBoard>
      </ListBoxTextContainer>
    </ListBox>
  );
};

export default Pokemoncard;

const ListBox = styled.div`
  width: 180px;
  height: 250px;
  border-radius: 10px;
  background-color: #f5f4f1;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-evenly;
  flex-direction: column;
  gap: 6px;
  transition: transform 0.2s ease-in-out; /* Adding smooth transition */

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
`;
const ListBoxImage = styled.img`
  width: 100px;
  height: 100px;
  /* display: flex;
    justify-content: center;
    align-items: center;
    background-color: green; */
`;

const ListBoxTextContainer = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

const ListBoxWithOutButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ListBoxTitleText = styled.div`
  font-weight: bolder;
`;

const ListBoxNumberText = styled.div`
  color: gray;
`;

const ListBoxButtonForListBoard = styled.button`
  width: 50px;
  height: 28px;
  background-color: red;
  border-radius: 5px;
  color: white;
  border-color: transparent;
  cursor: pointer;
`;

/* eslint-disable react/prop-types */
import styled from "styled-components";

const Dashboard = (props) => {
  console.log("here", props);

  return (
    <PokemonDashBoard>
      <DashBoardTitle>Pokemon Wallet</DashBoardTitle>
      {/* question: how can i adjust the style to dashboard.map and array.map seperlately */}
      <DashBoardBoxContainer>
        {props.dashboard.map((item) => (
          <ChangedListBoxforDashBoard key={item.id}>
            <ListBoxImage src={item.image} />

            <ListBoxTextContainer>
              <ListBoxTitleText>{item.name}</ListBoxTitleText>
              <ListBoxNumberText>No.0{item.id}</ListBoxNumberText>
              <ListBoxButtonForDashBoard
                onClick={() => props.deleteListBoxFromBashBoard(item.id)}
              >
                Delete
              </ListBoxButtonForDashBoard>
            </ListBoxTextContainer>
          </ChangedListBoxforDashBoard>
        ))}

        {/* 만약 들어올 인자가 필요 없다면 parameter에 _ 이걸 써주면 된다. */}
        {props.array.map((_, index) => (
          <DashBoardBox key={index}>
            <DashBoardBoxImage
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/220px-Pokebola-pokeball-png-0.png"
              alt="pokemonball"
            />
          </DashBoardBox>
        ))}
      </DashBoardBoxContainer>
    </PokemonDashBoard>
  );
};

export default Dashboard;

const PokemonDashBoard = styled.div`
  width: 98%;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: #e9e9e9;
  margin-top: 20px;
  justify-content: space-evenly;
`;

const DashBoardTitle = styled.h1`
  height: 50px;
  padding-top: 30px;
  color: red;
  font-size: 30px;
  font-weight: bolder;
`;

const DashBoardBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 60px;
  padding-bottom: 30px;
`;

const DashBoardBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f5f4f1;
  border-radius: 10px;
  border: 1px dashed gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DashBoardBoxImage = styled.img`
  width: 70%;
  height: 70%;
`;

const ChangedListBoxforDashBoard = styled.div`
  width: 130px;
  height: 250px;
  border-radius: 10px;
  background-color: #f5f4f1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
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

const ListBoxTitleText = styled.div`
  font-weight: bolder;
`;

const ListBoxNumberText = styled.div`
  color: gray;
`;

const ListBoxButtonForDashBoard = styled.button`
  width: 60px;
  height: 28px;
  background-color: red;
  border-radius: 5px;
  color: white;
  border-color: transparent;
  cursor: pointer;
`;

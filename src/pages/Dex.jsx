import styled from "styled-components";
import MOCK_DATA from "../mock";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Listboard from "../components/Listboard";
import { PokemonContext } from "../pokemonContext";

const Dex = () => {
  const [contents, setContents] = useState(MOCK_DATA);
  const [dashboard, setDashboard] = useState([]);
  const [array, setArray] = useState(() =>
    Array.from({ length: 6 - dashboard.length })
  );
  const navigate = useNavigate();

  const AddListBoxToDashBoard = (id) => {
    const existListBox = dashboard.find((item) => {
      return item.id === id;
    });
    if (existListBox) {
      alert("it's already a selected card");
      return;
    }

    const choseListBox = contents.find((item) => {
      return item.id === id;
    });

    console.log("어디보자", choseListBox);
    // choseListBox = {img_url:
    //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    //   korean_name: "이상해씨",
    //   types: ["풀", "독"],
    //   id: 1,
    //   description: "풀과 독 타입의 포켓몬으로, 귀여운 식물 모양을 하고 있습니다.",
    // },

    const extractValueFromChoseListBox = {
      id: choseListBox.id,
      image: choseListBox.img_url,
      name: choseListBox.korean_name,
      num: choseListBox.id,
    };

    const overflowedListBox = dashboard.length <= 5 ? dashboard : null;
    if (!overflowedListBox) {
      alert("you can only add up to six cards.");
      return;
    }
    //반환은 반드시 배열에 추가 해주기 전에 있어야함.

    setDashboard([...dashboard, extractValueFromChoseListBox]);
  };

  useEffect(() => {
    setArray(Array.from({ length: 6 - dashboard.length }));
  }, [dashboard.length]);

  console.log("어레이", array);
  console.log("test", dashboard);

  const deleteListBoxFromDashBoard = (id) => {
    const existListCard = dashboard.filter((item) => {
      return item.id !== id;
    });
    setDashboard(existListCard);
  };

  return (
    <StPageContainer>
      <PokemonContext.Provider
        value={{
          dashboard: dashboard,
          deleteListBoxFromDashBoard: deleteListBoxFromDashBoard,
          array: array,
          contents: contents,
          AddListBoxToDashBoard: AddListBoxToDashBoard,
          navigate: navigate,
        }}
      >
        <Dashboard />
        <Listboard />
      </PokemonContext.Provider>
    </StPageContainer>
  );
};

export default Dex;

const StPageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

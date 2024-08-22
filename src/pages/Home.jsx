import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StTextBox = styled.div`
  width: 200px;
  height: 100px;
  margin: auto;
`;

const StPageContainer = styled.div`
  height: 600px;
  /* width: 200px; */
  padding: auto;
  background-color: blue;
  display: block;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <StPageContainer>
      <StTextBox>
        <h1>포켓몬 도감</h1>
        <button onClick={() => navigate("/dex")}>포켓몬 도감 시각하기</button>
      </StTextBox>
    </StPageContainer>
  );
};

export default Home;

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  return (
    <StPageContainer>
      <StTextBox>
        <Title
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZg0KsR2B3QRF9BNcub9Ix8pZwtfugP6Dww&s"
          alt="titleImage"
        />
        <StButton onClick={() => navigate("/dex")}>Let's Go Pokemon~!</StButton>
      </StTextBox>
    </StPageContainer>
  );
};

export default Home;

const StPageContainer = styled.div`
  height: 100%;
  margin: auto;
  display: flex; /* Flexbox 사용 */
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
`;

const StTextBox = styled.div`
  width: 250px;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Title = styled.img``;

const StButton = styled.button`
  width: 180px;
  height: 40px;
  font-size: 15px;
  background-color: red;
  color: white;
  border-radius: 10px;
  border-color: transparent;
  font-weight: bolder;
`;

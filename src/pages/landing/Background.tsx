import styled from "styled-components";
import bg from "../../assets/backgrounds/1C.jpg";

const StyledBackground = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Background = () => {
  return (
    <StyledBackground>
      <Image src={bg} />
    </StyledBackground>
  );
};

export default Background;

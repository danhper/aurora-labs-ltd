import styled from "styled-components";
import bg from "../../assets/backgrounds/1C.png";

const StyledBackground = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: var(--bg);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const Image = styled.img`
  width: 115%;
  transform: translate(6%, 10%);
  z-index: 10;
`;

const Background = () => {
  return (
    <StyledBackground>
      <Image src={bg} />
    </StyledBackground>
  );
};

export default Background;

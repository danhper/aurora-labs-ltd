import styled from "styled-components";
import bg from "../../assets/backgrounds/6C.png";

const StyledNotFoundPage = styled.div`
  width: 100%;
  height: 100dvh;
  z-index: 1000;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const Background = styled.img`
  width: 100%;
  height: 100dvh;
  position: absolute;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 0 6rem;
`;

const Header = styled.h2`
  font-size: 8vw;
  font-weight: 800;
  margin-bottom: 1.6rem;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--main);
  position: relative;
  mix-blend-mode: difference;
`;

const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <Background src={bg} />
      <Content>
        <Header>Page Not Found</Header>
      </Content>
    </StyledNotFoundPage>
  );
};

export default NotFoundPage;

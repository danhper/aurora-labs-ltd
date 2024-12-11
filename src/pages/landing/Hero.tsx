import styled from "styled-components";

const StyledHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100dvh - (9rem + 4.8rem) * 2);
  position: relative;
  margin-bottom: calc(9rem + 4.8rem);

  @media (max-width: 900px) {
    padding: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 900px) {
    gap: 1.6rem;
  }
`;

const Header = styled.h1`
  font-size: 14rem;
  font-weight: 800;
  margin-bottom: 1.6rem;
  text-align: center;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid 20px var(--main);
  line-height: 1.3;

  @media (max-width: 900px) {
    font-size: 4.5rem;
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <Content>
        <Header>Aurora Labs Ltd</Header>
      </Content>
    </StyledHero>
  );
};

export default Hero;

import styled from "styled-components";
import bg from "../../assets/backgrounds/6C.png";

const StyledWhoWeAre = styled.div`
  width: 100%;
  height: 100dvh;
  z-index: 1000;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
`;

const Paragraph = styled.p`
  font-size: 4vw;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  text-transform: uppercase;
  text-align: justify;
`;

const WhoWeAre = () => {
  return (
    <StyledWhoWeAre>
      <Background src={bg} />
      <Content>
        <Header>Who We Are</Header>
        <Paragraph>We're the architects of the decentralized future.</Paragraph>
        <Paragraph>
          At the crossroads of code and culture, we craft DeFi applications on
          Ethereum that push boundaries, disrupt norms, and reimagine finance.
        </Paragraph>
      </Content>
    </StyledWhoWeAre>
  );
};

export default WhoWeAre;

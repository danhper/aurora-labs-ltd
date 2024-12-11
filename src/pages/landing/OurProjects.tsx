import { useState } from "react";
import styled from "styled-components";
import Project from "../../components/Project";
import bg from "../../assets/backgrounds/5C.png";

const StyledOurProjects = styled.div`
  width: 100%;
  height: 100dvh;
  z-index: 1000;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
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
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 7rem;
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  mix-blend-mode: difference;
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

const Link = styled.button`
  font-size: 8vw;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--main);
  text-decoration: underline;
  position: relative;
  text-transform: uppercase;
  text-align: justify;
  cursor: pointer;
`;

const WhoWeAre = () => {
  const [showMero, setShowMero] = useState(false);
  // const [showTlx, setShowTlx] = useState(false);

  return (
    <StyledOurProjects>
      <Background src={bg} />
      <Content>
        <Header>Our Projects</Header>
        <Links>
          <Link>Mero</Link>
          <Link>TLX</Link>
        </Links>
      </Content>
      <Project
        show={showMero}
        hide={() => {
          setShowMero(false);
        }}
      />
    </StyledOurProjects>
  );
};

export default WhoWeAre;

import { useState } from "react";
import styled from "styled-components";
import Project from "../../components/Project";
import bg from "../../assets/backgrounds/5C.png";

import tlx01 from "../../assets/screenshots/tlx/01.png";
import tlx02 from "../../assets/screenshots/tlx/02.png";
import tlx03 from "../../assets/screenshots/tlx/03.png";
import tlx04 from "../../assets/screenshots/tlx/04.png";

import mero01 from "../../assets/screenshots/mero/01.png";
import mero02 from "../../assets/screenshots/mero/02.png";
import mero03 from "../../assets/screenshots/mero/03.png";
import mero04 from "../../assets/screenshots/mero/04.png";

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
  const [showTlx, setShowTlx] = useState(false);

  return (
    <StyledOurProjects>
      <Background src={bg} />
      <Content>
        <Header>Our Projects</Header>
        <Links>
          <Link
            onClick={() => {
              setShowMero(true);
            }}
          >
            Mero
          </Link>
          <Link
            onClick={() => {
              setShowTlx(true);
            }}
          >
            TLX
          </Link>
        </Links>
      </Content>
      <Project
        show={showMero}
        hide={() => {
          setShowMero(false);
        }}
        name="Mero"
        content="Mero redefined liquidity, making it reactive, efficient, and unapologetically dynamic in a space that demanded evolution."
        images={[mero01, mero02, mero03, mero04]}
      />
      <Project
        show={showTlx}
        hide={() => {
          setShowTlx(false);
        }}
        name="TLX"
        content="TLX distilled leverage into simplicity, crafting non-liquidating tokens that quietly rebalanced to keep traders in control."
        images={[tlx01, tlx02, tlx03, tlx04]}
      />
    </StyledOurProjects>
  );
};

export default WhoWeAre;

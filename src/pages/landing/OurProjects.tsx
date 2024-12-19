import styled from "styled-components";

import tlxLogo from "../../assets/logo/tlx.svg";
import tlx01 from "../../assets/screenshots/tlx/01.png";
import tlx02 from "../../assets/screenshots/tlx/02.png";
import tlx03 from "../../assets/screenshots/tlx/03.png";
import tlx04 from "../../assets/screenshots/tlx/04.png";

import meroLogo from "../../assets/logo/mero.svg";
import mero01 from "../../assets/screenshots/mero/01.png";
import mero02 from "../../assets/screenshots/mero/02.png";
import mero03 from "../../assets/screenshots/mero/03.png";
import mero04 from "../../assets/screenshots/mero/04.png";
import mero05 from "../../assets/screenshots/mero/05.png";
import mero06 from "../../assets/screenshots/mero/06.png";
import Project from "../../components/Project";

const StyledOurProjects = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  padding: 15rem 0;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 150rem;
`;

const Header = styled.h2`
  font-size: 10rem;
  font-weight: 800;
  margin-bottom: 10rem;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--main);
  position: relative;
`;

const Projects = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const WhoWeAre = () => {
  return (
    <StyledOurProjects>
      <Content>
        <Header>Our Projects</Header>
        <Projects>
          <Project
            logo={meroLogo}
            images={[mero02, mero01, mero03, mero04, mero05, mero06]}
            description="Mero redefined liquidity, making it reactive, efficient, and unapologetically dynamic in a space that demanded evolution."
          />
          <Project
            logo={tlxLogo}
            images={[tlx01, tlx02, tlx03, tlx04]}
            description="TLX distilled leverage into simplicity, crafting non-liquidating tokens that quietly rebalanced to keep traders in control."
          />
        </Projects>
      </Content>
    </StyledOurProjects>
  );
};

export default WhoWeAre;

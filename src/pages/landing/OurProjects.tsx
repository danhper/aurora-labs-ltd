import styled from "styled-components";

import tlxLogo from "../../assets/logo/tlx.svg";
import tlx01 from "../../assets/screenshots/tlx/01.png";
// import tlx02 from "../../assets/screenshots/tlx/02.png";
// import tlx03 from "../../assets/screenshots/tlx/03.png";
// import tlx04 from "../../assets/screenshots/tlx/04.png";

import meroLogo from "../../assets/logo/mero.svg";
// import mero01 from "../../assets/screenshots/mero/01.png";
import mero02 from "../../assets/screenshots/mero/02.png";
// import mero03 from "../../assets/screenshots/mero/03.png";
// import mero04 from "../../assets/screenshots/mero/04.png";

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

const Project = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  gap: 2rem;
`;

const LogoContainer = styled.div`
  width: 100%;
`;

const ProjectLogo = styled.img`
  height: 4.3rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  border: 1px solid var(--main);
  overflow: hidden;
  aspect-ratio: 16 / 9;
`;

const Description = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: var(--main);
  text-align: center;
`;

const WhoWeAre = () => {
  return (
    <StyledOurProjects>
      <Content>
        <Header>Our Projects</Header>
        <Projects>
          <Project>
            <LogoContainer>
              <ProjectLogo src={tlxLogo} />
            </LogoContainer>
            <ProjectImage src={mero02} />
            <Description>
              Mero redefined liquidity, making it reactive, efficient, and
              unapologetically dynamic in a space that demanded evolution.
            </Description>
          </Project>
          <Project>
            <LogoContainer>
              <ProjectLogo src={meroLogo} />
            </LogoContainer>
            <ProjectImage src={tlx01} />
            <Description>
              TLX distilled leverage into simplicity, crafting non-liquidating
              tokens that quietly rebalanced to keep traders in control.
            </Description>
          </Project>
        </Projects>
      </Content>
    </StyledOurProjects>
  );
};

export default WhoWeAre;

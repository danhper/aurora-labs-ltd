import styled from "styled-components";
import Hero from "./Hero";
import Background from "./Background";
import WhoWeAre from "./WhoWeAre";
import OurProjects from "./OurProjects";
import ContactUs from "./ContactUs";

const StyledLandingPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <Background />
      <Hero />
      <WhoWeAre />
      <OurProjects />
      <ContactUs />
    </StyledLandingPage>
  );
};

export default LandingPage;

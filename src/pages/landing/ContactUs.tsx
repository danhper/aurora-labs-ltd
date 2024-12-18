import styled from "styled-components";
import { EMAIL } from "../../app/constants";
import bg from "../../assets/backgrounds/5C.jpg";

const StyledContactUs = styled.div`
  width: 100%;
  height: 100dvh;
  z-index: 1000;
  overflow: hidden;
  display: flex;
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
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Header = styled.a`
  font-size: 10rem;
  font-weight: 800;
  margin-bottom: 1.6rem;
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
  cursor: pointer;
  white-space: nowrap;
  color: var(--main);
  position: relative;
`;

const ContactUs = () => {
  return (
    <StyledContactUs>
      <Background src={bg} />
      <Content>
        <Header href={`mailto:${EMAIL}`}>Get in touch</Header>
        <div />
      </Content>
    </StyledContactUs>
  );
};

export default ContactUs;

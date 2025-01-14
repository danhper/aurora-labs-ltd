import styled from "styled-components";
import { EMAIL } from "../../app/constants";
import bg from "../../assets/backgrounds/5C.jpg";

const StyledContactUs = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 900px) {
    padding: 10rem 0;
    margin-top: 3rem;
    height: auto;
  }
`;

const Background = styled.img`
  width: calc(100dvw);
  height: 100dvh;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 900px) {
    width: 100dvw;
    height: 150%;
    left: -1.8rem;
    bottom: -1.8rem;
    top: auto;
  }
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

  @media (max-width: 900px) {
    font-size: 11.5dvw;
    font-weight: 700;
  }
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

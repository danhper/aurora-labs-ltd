import styled from "styled-components";

const StyledProject = styled.div<{ show: boolean }>`
  width: 100dvw;
  height: 100dvh;
  position: absolute;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 6rem;
  gap: 7rem;
  overflow-y: auto;

  transition: transform 1s;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
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

const ExitButton = styled.button`
  font-size: 4vw;
  font-weight: 800;
  text-align: center;
  color: var(--main);
  text-decoration: underline;
  position: fixed;
  line-height: 1;
  top: 2rem;
  left: 2rem;
  text-transform: uppercase;
  text-align: justify;
  cursor: pointer;
`;

const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border: 1px solid var(--main);
`;

interface Props {
  show: boolean;
  hide: () => void;
  name: string;
  content: string;
  images: string[];
}

const Project = ({ show, hide, name, content, images }: Props) => {
  return (
    <StyledProject show={show}>
      <Header>{name}</Header>
      <Paragraph>{content}</Paragraph>
      <ExitButton onClick={hide}>Exit</ExitButton>
      <Images>
        {images.map((image, index) => (
          <Image key={index} src={image} />
        ))}
      </Images>
    </StyledProject>
  );
};

export default Project;

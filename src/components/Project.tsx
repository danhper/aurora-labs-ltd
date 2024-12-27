import styled from "styled-components";
import { useState } from "react";

import arrow from "../assets/ui/arrow.svg";

const StyledProject = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  gap: 2rem;

  @media (max-width: 900px) {
    padding: 0;
    gap: 1.4rem;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
`;

const ProjectLogo = styled.img`
  height: 4.3rem;

  @media (max-width: 900px) {
    height: 3.7rem;
  }
`;

const ProjectButton = styled.button`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid var(--main);
`;

const ProjectImage = styled.img`
  width: 100%;
`;

const Description = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: var(--main);
  text-align: center;

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

const ImageOverlayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(20px) saturate(0%) brightness(0.5);
  z-index: 1000;
`;

const ImageOverlay = styled.div`
  height: 80%;
  aspect-ratio: 16 / 9;
  background: var(--bg);
  border: 1px solid var(--main);
  position: relative;
  overflow: hidden;

  @media (max-width: 900px) {
    height: auto;
    width: calc(100% - 3.2rem);
  }
`;

const Image = styled.img`
  width: 100%;
`;

const ImageControls = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 5rem);
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    position: fixed;
    top: auto;
    bottom: 0;
  }
`;

const ImageControl = styled.button`
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid var(--main);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  aspect-ratio: 1 / 1;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 1);
  backdrop-filter: blur(20px) saturate(0%) brightness(0.5);

  @media (max-width: 900px) {
    height: 4.5rem;
  }
`;

const Arrow = styled.img<{ $right?: boolean }>`
  width: 67%;

  transform: ${({ $right }) => ($right ? "rotate(-90deg)" : "rotate(90deg)")};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

interface Props {
  logo: string;
  description: string;
  images: string[];
}

const Project = ({ logo, description, images }: Props) => {
  const [showing, setShowing] = useState<boolean>(false);
  const [imageIndex, setImageIndex] = useState<number>(0);

  return (
    <>
      <StyledProject>
        <LogoContainer>
          <ProjectLogo src={logo} />
        </LogoContainer>
        <ProjectButton onClick={() => setShowing(true)}>
          <ProjectImage src={images[0]} />
        </ProjectButton>
        <Description>{description}</Description>
      </StyledProject>
      {showing && (
        <ImageOverlayContainer>
          <CloseButton onClick={() => setShowing(false)} />
          <ImageOverlay>
            <Image src={images[imageIndex]} />
            <ImageControls>
              <ImageControl
                onClick={() =>
                  setImageIndex((prev) => (prev + 1) % images.length)
                }
              >
                <Arrow src={arrow} />
              </ImageControl>

              <ImageControl
                onClick={() =>
                  setImageIndex((prev) => {
                    if (prev === 0) return images.length - 1;
                    else return prev - 1;
                  })
                }
              >
                <Arrow src={arrow} $right />
              </ImageControl>
            </ImageControls>
          </ImageOverlay>
        </ImageOverlayContainer>
      )}
    </>
  );
};

export default Project;

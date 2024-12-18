import styled, { keyframes } from "styled-components";
import arrow from "../../assets/ui/arrow.svg";
import { useEffect, useState } from "react";

const StyledHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100dvh - (9rem + 4.8rem) * 2);
  position: relative;
  margin-bottom: calc(9rem + 4.8rem);

  @media (max-width: 900px) {
    padding: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 900px) {
    gap: 1.6rem;
  }
`;

const Header = styled.h1`
  font-size: 14rem;
  font-weight: 800;
  margin-bottom: 1.6rem;
  text-align: center;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid 20px var(--main);
  line-height: 1.3;

  @media (max-width: 900px) {
    font-size: 4.5rem;
  }
`;

const downAndUpAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(3rem);
  }
  100% {
    transform: translateY(0);
  }
`;

const Arrow = styled.img<{ $show: boolean }>`
  height: 3rem;
  position: absolute;
  bottom: -1.5rem;
  left: 50%;
  transform: translateX(-50%);

  animation: ${downAndUpAnimation} 1s infinite;

  transition: opacity 1s;
  opacity: ${(props) => (props.$show ? 1 : 0)};
`;

const Hero = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowArrow(true);
    }, 2000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolledDown(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledHero>
      <Content>
        <Header>Aurora Labs Ltd</Header>
      </Content>
      <Arrow src={arrow} $show={showArrow && !hasScrolledDown} />
    </StyledHero>
  );
};

export default Hero;

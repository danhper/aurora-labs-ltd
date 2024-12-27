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

const Header = styled.h1`
  font-size: 14rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80rem;
  height: 43rem;
  font-weight: 800;
  margin-bottom: 1.6rem;
  text-align: center;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid 2rem var(--main);
  line-height: 1.3;

  @media (max-width: 900px) {
    font-size: 14dvw;
    border: solid 2dvw var(--main);
    width: 80dvw;
    height: 43dvw;
  }
`;

const downAndUpAnimation = keyframes`
  0% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, 3rem);
  }
  100% {
    transform: translate(-50%, 0);
  }
`;

const Arrow = styled.img<{ $show: boolean }>`
  height: 3rem;
  position: absolute;
  bottom: -1.5rem;
  left: 50%;
  transform: translate(-50%, 0);

  animation: ${downAndUpAnimation} 1s infinite;

  transition: opacity 1s;
  opacity: ${(props) => (props.$show ? 1 : 0)};

  @media (max-width: 900px) {
    height: 2.5rem;
    bottom: -3rem;
  }
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
      <Header>Aurora Labs Ltd</Header>
      <Arrow src={arrow} $show={showArrow && !hasScrolledDown} />
    </StyledHero>
  );
};

export default Hero;

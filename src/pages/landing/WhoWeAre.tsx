import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledWhoWeAre = styled.div`
  width: 100%;
  height: 100dvh;
  z-index: 1000;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 900px) {
    height: auto;
    padding: 10rem 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 6rem;
  max-width: 120rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 900px) {
    padding: 2rem;
    gap: 1rem;
  }
`;

const Header = styled.h2<{ $show: boolean }>`
  font-size: 10rem;
  font-weight: 800;
  margin-bottom: 1.6rem;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--main);
  position: relative;

  transition: all 1s;
  opacity: ${(props) => (props.$show ? 1 : 0)};

  @media (max-width: 900px) {
    font-size: 12dvw;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;

const Paragraph = styled.p<{ $show: boolean }>`
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1.2rem;
  position: relative;
  text-align: center;
  line-height: 1.3;

  transition: all 1s;
  opacity: ${(props) => (props.$show ? 1 : 0)};

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }
`;

const TopBorder = styled.div<{ $show: boolean }>`
  width: 100%;
  height: 4px;
  background: var(--main);
  position: absolute;
  top: 0;
  left: 0;

  transition: transform 1s;
  transform: ${(props) =>
    props.$show ? "translateX(0)" : "translateX(-100%)"};

  @media (max-width: 900px) {
    height: 3px;
  }
`;

const BottomBorder = styled.div<{ $show: boolean }>`
  width: 100%;
  height: 4px;
  background: var(--main);
  position: absolute;
  bottom: 0;
  left: 0;

  transition: transform 1s;
  transform: ${(props) => (props.$show ? "translateX(0)" : "translateX(100%)")};

  @media (max-width: 900px) {
    height: 3px;
  }
`;

const LeftBorder = styled.div<{ $show: boolean }>`
  width: 4px;
  height: 100%;
  background: var(--main);
  position: absolute;
  top: 0;
  left: 0;

  transition: transform 1s;
  transform: ${(props) =>
    props.$show ? "translateY(0)" : "translateY(-100%)"};

  @media (max-width: 900px) {
    width: 3px;
  }
`;

const RightBorder = styled.div<{ $show: boolean }>`
  width: 4px;
  height: 100%;
  background: var(--main);
  position: absolute;
  top: 0;
  right: 0;

  transition: transform 1s;
  transform: ${(props) => (props.$show ? "translateY(0)" : "translateY(100%)")};

  @media (max-width: 900px) {
    width: 3px;
  }
`;

const WhoWeAre = () => {
  const [showBorders, setShowBorders] = useState(false);
  const [showText, setShowText] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Show when scrolled into view
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const contentRect = contentRef.current.getBoundingClientRect();
        if (contentRect.top < window.innerHeight / 2) {
          setShowBorders(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (showBorders) {
      setTimeout(() => {
        setShowText(true);
      }, 500);
    }
  }, [showBorders]);

  return (
    <StyledWhoWeAre>
      <Content ref={contentRef}>
        <TopBorder $show={showBorders} />
        <BottomBorder $show={showBorders} />
        <LeftBorder $show={showBorders} />
        <RightBorder $show={showBorders} />

        <Header $show={showText}>Who We Are</Header>
        <Paragraph $show={showText}>
          We are the architects of the decentralized future.
        </Paragraph>
        <Paragraph $show={showText}>
          At the crossroads of code and culture, we craft DeFi applications on
          Ethereum that push boundaries, disrupt norms, and reimagine finance.
        </Paragraph>
      </Content>
    </StyledWhoWeAre>
  );
};

export default WhoWeAre;

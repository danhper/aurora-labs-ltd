import styled from "styled-components";

import backdRaises from "../../assets/news/backd-raises.webp";
import introducingBackd from "../../assets/news/introducing-backd.webp";
import soNowWhat from "../../assets/news/so-now-what.png";
import synthetix from "../../assets/news/synthetix.jpeg";
import tlxIsLive from "../../assets/news/tlx-is-live.png";

interface NewsType {
  header: string;
  image: string;
  link: string;
}

const NEWS: NewsType[] = [
  {
    header: "Introducing Backd",
    link: "https://medium.com/mero-finance/introducing-the-backd-protocol-95020816cee5",
    image: introducingBackd,
  },
  {
    header: "Backd raises $3.5 million",
    link: "https://medium.com/mero-finance/backd-raises-3-5-million-e4f03b92a2da",
    image: backdRaises,
  },
  {
    header: "TLX is live!",
    link: "https://mirror.xyz/tlx.eth/Jt5RuNy0y10QJKmS6HN4r8YRjHzVVYhbj5jcHAVnxJc",
    image: tlxIsLive,
  },
  {
    header: "TLX - So now what?",
    link: "https://mirror.xyz/tlx.eth/S6ZBDCv6jqIz5NKiGlUN26Ew52jy4w78iACW85yl0Ds",
    image: soNowWhat,
  },
  {
    header: "Synthetix Acquires TLX",
    link: "https://mirror.xyz/tlx.eth/1kx6ahbi5U9jK3Qs6yC5EF1f6I3OkrhUkdxzkdDnKB8",
    image: synthetix,
  },
];

const StyledNews = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  padding: 15rem 0;

  @media (max-width: 900px) {
    padding: 10rem 0;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 130rem;
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

  @media (max-width: 900px) {
    font-size: 11.5dvw;
    font-weight: 700;
    margin-bottom: 5rem;
  }
`;

const NewsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 5rem;
  }
`;

const NewsItem = styled.a`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 1px solid var(--main);

  @media (max-width: 900px) {
    padding: 1rem;
  }
`;

const NewsHeader = styled.h3`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  color: var(--main);

  @media (max-width: 900px) {
    font-size: 2rem;
    white-space: nowrap;
  }
`;

const NewsImage = styled.img`
  width: 100%;
`;

const News = () => {
  return (
    <StyledNews>
      <Content>
        <Header>News</Header>
        <NewsContainer>
          {NEWS.reverse().map((news, index) => (
            <NewsItem key={index} href={news.link} target="_blank">
              <NewsHeader>{news.header}</NewsHeader>
              <NewsImage src={news.image} />
            </NewsItem>
          ))}
        </NewsContainer>
      </Content>
    </StyledNews>
  );
};

export default News;

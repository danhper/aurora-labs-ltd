import styled from "styled-components";
import LandingPage from "./pages/landing/LandingPage";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const StyledApp = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg);

  @media (max-width: 900px) {
    padding: 1.8rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Layout = () => {
  return (
    <StyledApp>
      <Content>
        <Header />
        <Outlet />
        <Footer />
      </Content>
      <ScrollToTop />
    </StyledApp>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />

        {/* <Route path="test2">
          <Route path=":someId" element={<CampaignPage />} />
        </Route>

        <Route path="test" element={<CreatePage />} /> */}

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;

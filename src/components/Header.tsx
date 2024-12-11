import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg);
  border: 1px solid var(--border);
  margin-bottom: 4.8rem;
  height: 9rem;
  position: relative;
`;

const Header = () => {
  return <StyledHeader></StyledHeader>;
};

export default Header;

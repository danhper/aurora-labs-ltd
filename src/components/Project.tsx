import styled from "styled-components";

const StyledProject = styled.div`
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
`;

interface Props {
  show: boolean;
  hide: () => void;
}

const Project = ({ show, hide }: Props) => {
  if (!show) return null;
  return <StyledProject>Project</StyledProject>;
};

export default Project;

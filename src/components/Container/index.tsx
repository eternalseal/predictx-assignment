import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 7px;
`;

const Container = ({ children }: any) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Container;
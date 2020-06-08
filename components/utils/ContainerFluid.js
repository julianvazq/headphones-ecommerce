import styled from 'styled-components';

const Container = styled.div`
  background: ${(props) => props.background && props.background};
  padding: 4rem 0;
`;

const ContainerFluid = ({ children }) => {
  return <Container> {children}</Container>;
};

export default ContainerFluid;

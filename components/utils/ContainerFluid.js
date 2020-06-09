import styled from 'styled-components';

const Container = styled.div`
  background: ${(props) => props.background && props.background};
  /* padding: 4rem 0; */
`;

const ContainerFluid = ({ background, children }) => {
  return <Container background={background}> {children}</Container>;
};

export default ContainerFluid;

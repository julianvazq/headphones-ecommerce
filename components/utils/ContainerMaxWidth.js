import styled from 'styled-components';

const Container = styled.div`
  max-width: 1500px;
  width: 90%;
  margin: auto;
  background: ${(props) => props.background && props.background};
  padding: ${(props) => (props.padding ? props.padding : '2rem 0')};
`;

const ContainerMaxWidth = ({ background, padding, children }) => {
  return (
    <Container background={background} padding={padding}>
      {children}
    </Container>
  );
};

export default ContainerMaxWidth;

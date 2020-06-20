import styled from 'styled-components';

export const SectionContainer = styled.section`
  background: ${(props) => (props.bodyColor ? 'var(--body)' : 'var(--light)')};
  color: var(--dark);
  padding: 2rem 0;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  font-family: 'Oswald', sans-serif;
  color: var(--dark);
  margin-bottom: 2rem;
`;

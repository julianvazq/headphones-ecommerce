import styled from 'styled-components';

export const SectionContainer = styled.section`
  background: ${(props) => (props.bodyColor ? 'var(--body)' : 'var(--light)')};
  color: var(--dark);
  padding: 2rem 0;
`;

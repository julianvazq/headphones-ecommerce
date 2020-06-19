import React from 'react';
import styled from 'styled-components';
import { SectionContainer } from '../../styles/shared-styles';
import { FaShippingFast } from 'react-icons/fa';

const CenteredContainer = styled.div`
  height: calc(100vh - 114px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 4rem 0;

  svg {
    font-size: 3rem;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url('/images/headphones/headphone-1.png') no-repeat;
    background-size: contain;
    background-position: center;
    opacity: 0.4;
    filter: contrast(90%);
  }
`;

const Message = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  text-transform: none;
  margin-bottom: 1rem;

  svg {
    font-size: 2rem;
  }
`;

const ConfirmationPage = () => {
  return (
    <SectionContainer>
      <CenteredContainer>
        <Message>Thank you for placing a fake order!</Message>
        <FaShippingFast />
      </CenteredContainer>
    </SectionContainer>
  );
};

export default ConfirmationPage;

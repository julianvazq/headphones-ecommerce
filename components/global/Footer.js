import React from 'react';
import { SectionContainer } from '../../styles/shared-styles';
import ContainerMaxWidth from '../utils/ContainerMaxWidth';
import styled from 'styled-components';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from 'react-icons/fa';

const FooterContainer = styled.footer`
  display: ${(props) => props.hide && 'none'};
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const IconCircle = styled.a`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem 2rem;

  svg {
    color: var(--light);
    font-size: 1.25rem;
  }
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 1.25rem;
`;

const Footer = ({ hide }) => {
  return (
    <FooterContainer hide={hide}>
      <SectionContainer bodyColor>
        <ContainerMaxWidth>
          <IconContainer>
            <IconCircle>
              <FaFacebookF />
            </IconCircle>
            <IconCircle>
              <FaTwitter />
            </IconCircle>
            <IconCircle>
              <FaInstagram />
            </IconCircle>
            <IconCircle>
              <FaPinterestP />
            </IconCircle>
            <IconCircle>
              <FaYoutube />
            </IconCircle>
            <IconCircle>
              <FaLinkedinIn />
            </IconCircle>
          </IconContainer>
          <Copyright>@H 2020</Copyright>
        </ContainerMaxWidth>
      </SectionContainer>
    </FooterContainer>
  );
};

export default Footer;

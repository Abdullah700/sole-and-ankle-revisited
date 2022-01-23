/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { startOfWeekYear } from 'date-fns';

const MobileMenu = ({ isOpen, onDismiss }) => {

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
    <Content aria-label="Menu">
      <CloseButton onClick={onDismiss}>
      <Icon id={'close'}/>
        <VisuallyHidden>
          Dismiss menu
        </VisuallyHidden>
      </CloseButton>
      <Filler/>
           <Nav>
        <NsvLink href="/sale">Sale</NsvLink>
        <NsvLink href="/new">New&nbsp;Releases</NsvLink>
        <NsvLink href="/men">Men</NsvLink>
        <NsvLink href="/women">Women</NsvLink>
        <NsvLink href="/kids">Kids</NsvLink>
        <NsvLink href="/collections">Collections</NsvLink>
      </Nav>
      <Footer>
        <FooterLink href="/terms">Terms and Conditions</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/contact">Contact Us</FooterLink>
      </Footer>
    </Content>
    </Overlay>
  );
};


const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background-color: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
`
const Content = styled(DialogContent)`
  background-color: #fff;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
`
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
const NsvLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type{
    color: var(--color-secondary);
  }

`
const Filler = styled.div`
  flex:1;
`

const Footer = styled.footer`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 12px;
`
const FooterLink = styled.a`
  color: var(--color-gray-700);
  text-decoration: none;
  font-weight: ${WEIGHTS.normal};
  font-size: 0.875rem;
`
const CloseButton = styled(UnstyledButton)`
position: absolute;
top: 10px;
right: 0px;
padding: 16px;
`

export default MobileMenu;

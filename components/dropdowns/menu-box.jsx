import { useRef } from 'react';
import styled from 'styled-components';

import { useClickOutside } from '../../hooks/useClickOutside';
import { Box } from '../styled/box';

const StyledMenuBox = styled(Box).attrs({
  mt: 'S',
  p: 'M',
  bg: 'white',
})`
  position: absolute;
  z-index: 1;

  width: ${({ theme }) => theme.sizes.contentXSmallWidth};

  border-radius: ${({ theme }) => theme.space.S}px;
  box-shadow: ${({ theme }) => theme.shadows.dropShadowDarker};
  border: 1px solid ${({ theme }) => theme.colors.grey30};
`;

export const MenuBox = ({ isOpen, onClose, buttonRef, children }) => {
  const listRef = useRef(null);
  useClickOutside(onClose, isOpen, listRef, buttonRef);

  return <StyledMenuBox ref={listRef}>{children}</StyledMenuBox>;
};

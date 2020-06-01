import React, { FC, ReactNode, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from '@emotion/styled/macro'

import { colors } from 'util/colors'
import { zIndices } from 'util/zIndices'
import { ReactComponent as _CloseIcon } from 'assets/close.svg'

const ModalOverlayDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${zIndices.modal};
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalDiv = styled.div`
  background-color: ${colors.white};
  border-radius: 4px;
  padding: 1rem;
  flex-direction: column;
  display: flex;
  position: relative;
`

const HeaderH3 = styled.h3`
  color: ${colors.black};
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 1.75rem;
  text-align: center;
  padding-bottom: 1rem;
  margin: 0 4rem;
`

const CloseIcon = styled(_CloseIcon)`
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
`

type ModalProps = {
  caption: ReactNode;
  isVisible: boolean;
  toggle: () => void;
  className?: string;
}

export const Modal: FC<ModalProps> = ({ caption, isVisible, toggle, className, children }) => (
  isVisible
  ? createPortal(
    <ModalOverlayDiv>
      <ModalDiv className={className}>
        <HeaderH3>{caption}</HeaderH3>
        <CloseIcon onClick={toggle} />
        {children}
      </ModalDiv>
    </ModalOverlayDiv>, document.body)
  : null
)
    
type useModalHook = (modalVisible?: boolean) => { isVisible: boolean, toggle: () => void}

export const useModal:useModalHook = (modalVisible = false) => {
  const [isVisible, setIsVisible] = useState(modalVisible)
  
  const toggle = () => {
    setIsVisible(!isVisible)
  }
  
  return { isVisible, toggle }
}
    
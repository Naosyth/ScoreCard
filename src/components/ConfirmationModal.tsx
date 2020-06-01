import React, { FC, ReactNode } from 'react'
import styled from '@emotion/styled/macro'
import { css, SerializedStyles } from '@emotion/core'

import { Modal } from 'components/Modal'
import { colors } from 'util/colors'

type ButtonStyleProps = {
  styles?: SerializedStyles;
}

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`

const BaseButton = css`
  width: 10rem;
  height: 2.5rem;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.25rem;
  outline: none;
  cursor: pointer;
`

const CancelButton = styled.button<ButtonStyleProps>`
  ${BaseButton};
  background-color: ${colors.red};
  ${({ styles }) => styles};
`

const ConfirmButton = styled.button<ButtonStyleProps>`
  ${BaseButton};
  background-color: ${colors.secondary};
  color: ${colors.white};
  ${({ styles }) => styles};

  ${CancelButton} + & {
      margin-left: 1rem;
  }
`

type ButtonProps = {
  text?: ReactNode
  onClick: () => void
  disabled?: boolean
  styles?: SerializedStyles
}

type ConfirmationModalProps = {
  isVisible: boolean
  toggle: () => void
  className?: string
  title: ReactNode
  confirm?: ButtonProps
  cancel?: ButtonProps
}

export const ConfirmationModal: FC<ConfirmationModalProps> = ({ isVisible, toggle, className, title, children, confirm, cancel }) => {
  return (
    <Modal
      caption={title}
      isVisible={isVisible}
      toggle={toggle}
      className={className}
    >
      {children}
      {(confirm || cancel) &&
        <Buttons>
          {cancel &&
            <CancelButton type='button' disabled={cancel.disabled} styles={cancel.styles} onClick={cancel.onClick}>
              {cancel.text || 'Cancel'}
            </CancelButton>
          }
          {confirm &&
            <ConfirmButton type='button' disabled={confirm.disabled} styles={confirm.styles} onClick={confirm.onClick}>
              {confirm.text || 'Confirm'}
            </ConfirmButton>
          }
        </Buttons>
      }
    </Modal>
  )
}

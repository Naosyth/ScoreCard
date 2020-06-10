import React, { FC } from 'react'
import styled from '@emotion/styled/macro'

import { colors } from 'util/colors'
import { ReactComponent as _PlusIcon } from 'assets/plus.svg'
import { useModal } from 'components/Modal'
import { AddPlayerModal } from 'components/AddPlayerModal'

const FABDiv = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  background-color: ${colors.accent1};
  color: ${colors.white};
  box-shadow: 0.25rem 0.25rem 0.625rem 0.0625rem rgba(0,0,0,0.4);
`

const PlusIcon = styled(_PlusIcon)`
  width: 3rem;
  height: 3rem;
`

export const AddPlayerFAB: FC = () => {
  const { isVisible, toggle } = useModal()

  return (
    <>
      <AddPlayerModal isVisible={isVisible} toggle={toggle} />
      <FABDiv onClick={toggle}>
        <PlusIcon />
      </FABDiv>
    </>
  )
}

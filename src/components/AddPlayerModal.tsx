import React, { FC, useContext, useState } from 'react'
import styled from '@emotion/styled/macro'
import { v4 as uuidV4 } from 'uuid'

import { ConfirmationModal } from 'components/ConfirmationModal'
import { PlayerContext } from 'components/PlayerContext'
import { PlayerActionTypes } from 'reducers/player'

type AddPlayerModalProps = {
  isVisible: boolean,
  toggle: () => void,
}

export const AddPlayerModal: FC<AddPlayerModalProps> = ({ isVisible, toggle }) => {
  const [name, setName] = useState('')
  const { dispatch } = useContext(PlayerContext)

  const addPlayer = () => {
    dispatch({
      type: PlayerActionTypes.Add,
      payload: {
        name: name,
        uuid: uuidV4(),
      }
    })
  }

  return (
    <ConfirmationModal
      title='Add Player'
      isVisible={isVisible}
      toggle={toggle}
      confirm={{
        onClick: addPlayer
      }}
    >
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
    </ConfirmationModal>
  )
}

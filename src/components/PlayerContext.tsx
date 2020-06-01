import React, { FC, createContext, useReducer, Dispatch } from 'react'

import { Player } from 'models/player'
import { PlayerReducer, PlayerActions } from 'reducers/player'

export const PlayerContext = createContext<{
  state: Player[]
  dispatch: Dispatch<PlayerActions>
}>({
  state: [],
  dispatch: () => null,
})

export const PlayerProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(PlayerReducer, [])
  return (
    <PlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </PlayerContext.Provider>
  )
}

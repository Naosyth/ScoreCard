import React, { FC, createContext, useReducer, Dispatch } from 'react'

import { GreedyGame } from 'models/greedy'
import { GreedyReducer, GreedyActions, initialState } from 'reducers/greedy'

export const GreedyContext = createContext<{
  state: GreedyGame
  dispatch: Dispatch<GreedyActions>
}>({
  state: initialState,
  dispatch: () => null,
})

export const GreedyProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(GreedyReducer, initialState)
  return (
    <GreedyContext.Provider value={{ state, dispatch }}>
      {children}
    </GreedyContext.Provider>
  )
}

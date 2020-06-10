import { v4 as uuidV4 } from 'uuid'

import { ActionMap } from 'reducers/util'
import { Player } from 'models/player'

export enum PlayerActionTypes {
  Reset = 'RESET_PLAYERS',
  Add = 'ADD_PLAYER',
  Delete = 'DELETE_PLAYER',
  Edit = 'EDIT_PLAYER',
}

type PlayerPayload = {
  [PlayerActionTypes.Reset]: null
  [PlayerActionTypes.Add]: string
  [PlayerActionTypes.Delete]: number
  [PlayerActionTypes.Edit]: {
    index: number
    player: Player
  }
}

export type PlayerActions = ActionMap<PlayerPayload>[keyof ActionMap<PlayerPayload>]

export const PlayerReducer = (state: Player[], action: PlayerActions) => {
  switch (action.type) {
    case PlayerActionTypes.Reset:
      return []
    case PlayerActionTypes.Add:
      return [...state, { name: action.payload, uuid: uuidV4() }]
    case PlayerActionTypes.Delete:
      return state.slice(0, action.payload).concat(state.slice(action.payload + 1, state.length))
    case PlayerActionTypes.Edit:
      state[action.payload.index] = action.payload.player
      return state
  }
}

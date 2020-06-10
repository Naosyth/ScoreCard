import { ActionMap } from 'reducers/util'
import { GreedyGame } from 'models/greedy'

export enum GreedyActionTypes {
  ResetScores = 'RESET_SCORES',
  AddScore = 'ADD_SCORE',
  EditScore = 'EDIT_SCORE',
}

type GreedyPayload = {
  [GreedyActionTypes.ResetScores]: null
  [GreedyActionTypes.AddScore]: {
    playerId: string,
    score: number,
  }
  [GreedyActionTypes.EditScore]: {
    playerId: string,
    index: number,
    score: number,
  }
}

export type GreedyActions = ActionMap<GreedyPayload>[keyof ActionMap<GreedyPayload>]

export const initialState: GreedyGame = {
  scoreCard: {},
  targetScore: 15000,
}

export const GreedyReducer = (state: GreedyGame, action: GreedyActions) => {
  switch (action.type) {
    case GreedyActionTypes.ResetScores:
      return initialState
    case GreedyActionTypes.AddScore:
      state.scoreCard[action.payload.playerId].scores.push(action.payload.score)
      return state
    case GreedyActionTypes.EditScore:
      state.scoreCard[action.payload.playerId].scores[action.payload.index] = action.payload.score
      return state
  }
}

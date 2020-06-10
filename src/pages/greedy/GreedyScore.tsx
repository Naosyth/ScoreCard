import React, { FC, useContext } from 'react'
import styled from '@emotion/styled/macro'
import { darken } from 'polished'

import { PlayerContext } from 'components/PlayerContext'
import { GreedyContext } from 'pages/greedy/GreedyContext'
import { colors } from 'util/colors'

const ScoreWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  background-color: ${colors.tertiary};
  box-sizing: border-box;
  box-shadow: 0rem -0.25rem 0.625rem 0.0625rem rgba(0,0,0,0.2);
`

const ScoreColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 7rem;
  height: 100%;

  &:nth-child(odd) {
    background-color: ${darken(0.04, colors.tertiary)};
  }

  &:nth-child(even) {
    background-color: ${darken(0.02, colors.tertiary)};
  }
`

const ScoreColumnNameDiv = styled.div`
  flex: 0 0;
  background-color: ${colors.accent1};
  color: ${colors.white};
  padding: 0.5rem;
  font-weight: bold;
`

const ScoreColumnScoresDiv = styled.div`
  flex: 1 0;
  padding: 0.5rem;
`

const ScoreInputDiv = styled.div`
  flex: 0 0;
  padding: 0.5rem;
  border-top: 1px solid ${colors.accent1};
`

export const GreedyScore: FC = () => {
  const { state: playerState } = useContext(PlayerContext)
  const { state: gameState, dispatch } = useContext(GreedyContext)

  return (
    <ScoreWrapperDiv>
      { playerState.map((player) => (
        <ScoreColumnDiv>
          <ScoreColumnNameDiv>
            { player.name }
          </ScoreColumnNameDiv>
          <ScoreColumnScoresDiv>
            { gameState.scoreCard[player.uuid]?.scores.map((score) => (
              <>
                { score }
              </>
            ))}
          </ScoreColumnScoresDiv>
          <ScoreInputDiv>
            score input
          </ScoreInputDiv>
        </ScoreColumnDiv>
      ))}
    </ScoreWrapperDiv>
  )
}

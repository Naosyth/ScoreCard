import React, { FC, useContext, useReducer } from 'react'
import styled from '@emotion/styled/macro'

import { PlayerContext } from 'components/PlayerContext'
import { GreedyContext, GreedyProvider } from 'pages/greedy/GreedyContext'
import { GreedyScore } from 'pages/greedy/GreedyScore'

const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const TopDiv = styled.div`
    flex: 2;
`

const BottomDiv = styled.div`
    flex: 1;
`

export const GreedyPage: FC = () => {
    const { state: playerState } = useContext(PlayerContext)
    const { state: gameState, dispatch } = useContext(GreedyContext)

    return (
        <GreedyProvider>
            <WrapperDiv>
                <TopDiv>
                    top
                    {playerState.map((player) => <p key={player.uuid}>{player.name}</p>)}
                </TopDiv>
                <BottomDiv>
                    <GreedyScore />
                </BottomDiv>
            </WrapperDiv>
        </GreedyProvider>
    )
}

import React, { FC, useContext } from 'react'


import { PlayerContext } from 'components/PlayerContext'

export const GreedyPage: FC = () => {
    const { state } = useContext(PlayerContext)

    return (
        <>
            {state.map((player) => <p key={player.uuid}>{player.name}</p>)}
        </>
    )
}

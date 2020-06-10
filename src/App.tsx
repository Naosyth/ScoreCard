import React, { FC } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Header } from 'components/Header'
import { AddPlayerFAB } from 'components/AddPlayerFAB'
import { LandingPage } from 'pages/LandingPage'
import { GreedyPage } from 'pages/greedy/GreedyPage'
import { PlayerProvider } from 'components/PlayerContext'

export const App:FC = () => (
    <PlayerProvider>
      <BrowserRouter>
        <AddPlayerFAB />
        <Header />
        <Switch>
          <Route path='/greedy' component={GreedyPage} />
          <Route path='/' component={LandingPage} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </PlayerProvider>
)

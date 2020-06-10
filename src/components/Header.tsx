import React, { FC } from 'react'
import styled from '@emotion/styled/macro'
import { Link } from 'react-router-dom'

import { colors } from 'util/colors'

const HeaderDiv = styled.div`
    display: flex;
    flex: 0 0 2rem;
    background-color: ${colors.primary};
    color: ${colors.white};
    box-shadow: 0rem 0.25rem 0.625rem 0.0625rem rgba(0,0,0,0.4);
    padding: 0.75rem;
`

const HeaderHome = styled.span`
    flex: 0 0 auto;
    font-size: 1.5rem;
    font-weight: bold;
`

const NavButton = styled(Link)`
    color: ${colors.white};
    text-decoration: none;
    font-size: 1.5rem;
    align-self: flex-end;
`

const LinksDiv = styled.div`
    flex: 1 0;
    display: flex;
    margin: 0 5rem;
    justify-content: flex-end;

    & > a {
        padding: 0 1rem;
    }
`

export const Header: FC = () => {
    return (
        <HeaderDiv>
            <NavButton to='/'>
                <HeaderHome>Score Card</HeaderHome>
            </NavButton>
            <LinksDiv>
                <NavButton to='/greedy'>Greedy Greedy</NavButton>
                <NavButton to='/handfoot'>Hand &amp; Foot</NavButton>
                <NavButton to='/racehorse'>Race Horse</NavButton>
            </LinksDiv>
        </HeaderDiv>
    )
}

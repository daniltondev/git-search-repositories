import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
    font-family: sans-serif;
    color: #333;
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`

export const ListItem = styled.li`
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
`
export const LinkHome = styled(Link)`
    font-family: sans-serif;
    display: flex;
    width: 6rem;
    height: 2.5rem;
    margin: 2rem auto;
    background-color: #000;
    color: #fff;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border-radius: .25rem;
`


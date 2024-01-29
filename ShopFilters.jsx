import React from 'react'

import YearBubbleItems from './Bubbles/YearBubbleItems'
import GenreBubbleItems from './Bubbles/GenreBubbleItems'
import ArtistBubbleItems from './Bubbles/ArtistBubbleItems'
//styled components
import { device } from '../Breakpoints'
import styled from 'styled-components'

const ShopFilters = (props) => {
    const yearModalEnabled = () => {
     props.setYearModal(true);
    }
    const yearModalDisable = () => {
        props.setYearModal(false);
    }
    const genreModalEnabled = () => {
        props.setGenreModal(true);
    }
    const genreModalDisable = () => {
        props.setGenreModal(false);
    }
    const artistModalEnabled = () => {
        props.setArtistModal(true);
    }
    const artistModalDisable = () => {
        props.setArtistModal(false);
    }
  return (
    <ShopFiltersStyle >
       <Text> Filtros:</Text> 
        <Year onMouseEnter={() => yearModalEnabled()} onMouseLeave={() => yearModalDisable()}>
            Año
        </Year>
        {props.yearModal &&  
            <YearBubble className='year-modal' onMouseEnter={() => yearModalEnabled()} onMouseLeave={() => yearModalDisable()}>
                <YearBubbleItems/>   
            </YearBubble>
        }
        <Genre onMouseEnter={() => genreModalEnabled() } onMouseLeave={() => genreModalDisable()}>
            Género
            {props.genreModal &&
                <GenreBubble className='genre-modal' onMouseEnter={() => genreModalEnabled()} onMouseLeave={() => genreModalDisable()}>
                    <GenreBubbleItems/>   
                </GenreBubble>
            }
        </Genre>
        <Artist onMouseEnter={() => artistModalEnabled()} onMouseLeave={() => artistModalDisable()}>
            Artista
            {props.artistModal &&  
                <ArtistBubble className='artist-modal' onMouseEnter={() => artistModalEnabled()} onMouseLeave={() => artistModalDisable()}>
                    <ArtistBubbleItems/>   
                </ArtistBubble>
            }
        </Artist>
    </ShopFiltersStyle>
  )
}

export default ShopFilters

const ShopFiltersStyle = styled.div`
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #f5f5f5;
    position: relative;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000000;
    width: 100%;
    z-index: -10;
    @media ${device.laptopL} {
        margin-bottom: 10px;
        height: 50px;
    }
    @media ${device.desktopR} {
        margin-bottom: 10px;
        height: 50px;
    
    }
`
const Text = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
`
const Year = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: relative;
    border-radius: 10px;
    box-shadow: 0px 0px 5px #000000;
    transition: 0.3s;
    cursor:pointer;
    @media ${device.laptopL} {
        width: 100px;
    }
    &:hover {
        background-color: #000;
        color: #fff;
    }
    @media ${device.desktopR} {
        width: 100px;
    }

    &:hover {
        background-color: #000;
        color: #fff;
    }
`
const Genre = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: relative;
    border-radius: 10px;
    box-shadow: 0px 0px 5px #000000;
    transition: 0.3s;
    @media ${device.laptopL} {
        width: 100px;
    }
    &:hover {
        background-color: #000;
        color: #fff;
    }
    @media ${device.desktopR} {
        width: 100px;
    }
    &:hover {
        background-color: #000;
        color: #fff;
    }
`
const Artist = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: relative;
    border-radius: 10px;
    margin-right: 20px;
    box-shadow: 0px 0px 5px #000000;
    transition: 0.3s;

    @media ${device.laptopL} {
        width: 100px;
    }
    &:hover {
        background-color: #000;
        color: #fff;
    }
`
const YearBubble = styled.div`   
    width: 1080px;   
    height: 45px;
    background-color: #f5f5f5;
    position: absolute;
    right: 0;
    -moz-border-radius: 12px;
    -webkit-border-radius: 12px;
    border-radius: 10px;
    z-index: 10;
    opacity: 0;
    z-index:2;
    &:before{
        content: '';
        position: absolute;
        right: 98%;
        top: 5px;
        width: 0;
        height: 0;
        border-top: 20px solid transparent;
        border-right: 36px solid #f5f5f5;
        border-bottom: 20px solid transparent;
        z-index: -10;
    }
    animation: fadein 0.5s;
    animation-fill-mode: forwards;  
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`
const GenreBubble = styled.div`    
    width: 1060px;   
    height: 45px;
    background-color: #f5f5f5;
    position: absolute;
    right: 105px;
    -moz-border-radius: 12px;
    -webkit-border-radius: 12px;
    border-radius: 10px;
    z-index: 10;
    opacity: 1;
    &:after{
        content: '';
        position: absolute;
        left: 97%;
        top: 5px;
        width: 0;
        height: 0;
        border-top: 20px solid transparent;
        border-left: 36px solid #f5f5f5;
        border-bottom: 20px solid transparent;
        z-index: -10;
    }
    animation: fadein 0.5s;
    animation-fill-mode: forwards;  
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`
const ArtistBubble = styled.div`
    width: 329px;   
    height: 188px;
    background-color: #f5f5f5;
    position: absolute;
    top: -4px;
    right:103px;
    -moz-border-radius: 12px;
    -webkit-border-radius: 12px;
    border-radius: 10px 0px 10px 10px;
    z-index: 10;
    opacity: 0;
    z-index:2;
    &:before{
        content: '';
        position: absolute;
        left: 88%;
        top: 5px;
        width: 0;
        height: 0;
        border-top: 20px solid transparent;
        border-left: 36px solid #f5f5f5;
        border-bottom: 20px solid transparent;
        z-index: -10;
    }
    animation: fadein 0.5s;
    animation-fill-mode: forwards;  
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`
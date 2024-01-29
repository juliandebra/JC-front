import React from 'react'

import YearBubbleItems from './Bubbles/YearBubbleItems'
import GenreBubbleItems from './Bubbles/GenreBubbleItems'

//styled components
import { deviceW, deviceH } from '../Breakpoints'
import styled from 'styled-components'

const ShopFilters = ({
    setSearch, 
    setSearchItems, 
    products,
    yearModal,
    genreModal,
    setYearModal,
    setGenreModal,
}) => {

    const searchByAlbum = (e) => {
        setSearch(true)
        setSearchItems(products.filter(product => product.Album.toLowerCase().includes(e.target.value.toLowerCase())))
        if(e.target.value === ''){
            setSearch(false)
            setSearchItems(products)
        }
    }
    const searchByArtist = (e) => {
        setSearch(true)
        setSearchItems(products.filter(product => product.Artista.toLowerCase().includes(e.target.value.toLowerCase())))
        if(e.target.value === ''){
            setSearch(false)
            setSearchItems(products)
        }
    }

    const yearModalEnabled = () => {
     setYearModal(true);
    }
    const yearModalDisable = () => {
        setYearModal(false);
    }
    const genreModalEnabled = () => {
        setGenreModal(true);
    }
    const genreModalDisable = () => {
        setGenreModal(false);
    }

  return (
    <ShopFiltersStyle >
       <Text> Buscar por:</Text>
       <input type="text" placeholder="Buscar por Album" onChange={e => searchByAlbum(e)} />
            <input type="text" placeholder="Buscar por Artista" onChange={e => searchByArtist(e)} />
        <Year onMouseEnter={() => yearModalEnabled()} onMouseLeave={() => yearModalDisable()}>
            Año
        </Year>
        {yearModal &&  
            <YearBubble className='year-modal' onMouseEnter={() => yearModalEnabled()} onMouseLeave={() => yearModalDisable()}>
                <YearBubbleItems products={products} setSearch={setSearch} setSearchItems={setSearchItems} />   
            </YearBubble>
        }
        <Genre onMouseEnter={() => genreModalEnabled() } onMouseLeave={() => genreModalDisable()}>
            Género
            {genreModal &&
                <GenreBubble className='genre-modal'  onMouseEnter={() => genreModalEnabled()} onMouseLeave={() => genreModalDisable()}>
                    <GenreBubbleItems products={products} setSearch={setSearch} setSearchItems={setSearchItems} />   
                </GenreBubble>
            }
        </Genre>

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
    z-index: 10;
    animation: fade-in 3s ease;

    @keyframes fade-in {
        from{opacity: 0}
        to{opacity: 1}
    }

    input{
        padding-left: 10px;
        border-radius: 10px;
        border: none;
        box-shadow: 0px 0px 5px #000000;
        height: 35px;
        align-items: center;
    }
    input::placeholder{
        color: #000000;
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        display: grid;
        grid-template-columns: auto auto;
        flex-direction: column;
        font-size: 1rem;
        margin-bottom: 10px;
        input{
            width: 95%;
            height: 30px;
            margin: 3px;
            margin-bottom: 5px;
            margin-top: 5px;
        }
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        display: flex;
        flex-direction: row;
        font-size: 1.3rem;
        margin-bottom: 10px;
        input{
            width: auto;
            height: 35px;
        }
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        display: flex;
        flex-direction: row;
        font-size: 1.5rem;
        margin-bottom: 10px;
        input{
            width: auto;
            height: 35px;
        }
    }
    @media ${deviceW.laptopS} and (min-height: 625px) and (max-height: 767px){
        display: flex;
        flex-direction: row;
        font-size: 1.5rem;
        margin-bottom: 10px;
        input{
            width: auto;
            height: 35px;
            margin: 5px;
        }
    }
`
const Text = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        display: none;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        display: flex;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        display: flex;
    }
    @media ${deviceW.laptopL} and (min-height: 753px) {
        display: flex;
    }
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

    &:hover {
        background-color: #000;
        color: #fff;
    }

    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        display: none;
    }
    
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        width: 120px;
        display: flex;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        width: 120px;
        display: flex;
    }
    @media ${deviceW.laptopS} and (min-height: 625px) and (max-height: 767px){
        width: 120px;
        display: flex;
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

    &:hover {
        background-color: #000;
        color: #fff;
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
       display: none;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        width: 120px;
        display: flex;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        width: 120px;
        display: flex;
    }
    @media ${deviceW.laptopS} and (min-height: 625px) and (max-height: 767px){
        width: 120px;
        display: flex;
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
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        width: 825px;
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
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        width: 825px;
    }
`

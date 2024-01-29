import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { deviceW, deviceH } from '../Breakpoints';
import { CartState } from '../../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes  } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import ImageCarousel from './ImageCarousel';
import { useNavigate, useParams } from 'react-router-dom';
import { getProducts } from '../../Service/publicApiService';


const ItemSelected = () => {
    const params = useParams()
    const {  addToCart, formatPeso, modalItem, setModalItem } = CartState()

    const navigate = useNavigate()
    const [added, setAdded] = useState(false) 
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            navigate(-1);
        }
    }, [navigate]);
    React.useEffect(() => {
        if(modalItem.Artista !== '') {  
            getProducts(params.categoria).then(res => {
                setModalItem(res.find(item => item.id.includes(params.itemId)))
            })
        }
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

  return (
    <Modal >
        
            <Card>
                <Close onClick={() => navigate(-1)}><FontAwesomeIcon icon={faTimes} /></Close>
                <ContainerLeft>
                    <ImageCarousel item={modalItem} />
                </ContainerLeft>
  
                <ContainerRight>
                {modalItem.Artista ?   
                <>       
                    <Title>{modalItem.Artista}</Title>
                    <Album>{modalItem.Album}</Album>
                    <Price>{formatPeso(modalItem.Precio)}</Price>
                    <Year>Fecha de publicación: {modalItem.Año}</Year>
                    <Description>{modalItem.Descripcion}</Description>
                    <Tags>{modalItem.Tags}</Tags>
                    <section>
                    <Button onClick={() => { 
                        addToCart(modalItem); 
                        setAdded(true); 
                        setTimeout(() => {
                            setAdded(false)
                        }, 2000)}}
                    >AÑADIR AL CARRITO</Button>
                    {added && ' Producto añadido ✅'}
                    </section>
                    <section>
                        {modalItem.FacebookURL !== '' &&  
                            <a href={modalItem.FacebookURL} >
                                <Facebook icon={faFacebookF} className='Facebook'/>
                            </a>
                        } 
                        {modalItem.InstagramURL !== '' &&  
                            <a href={modalItem.InstagramURL} >    
                                <Instagram icon={faInstagram} className='Instagram' />
                            </a>
                        } 
                    </section>
                </>
                    :<h1>Cargando...</h1> 
                }
                </ContainerRight>
                
            </Card>
    </Modal>
  )
}

export default ItemSelected

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    z-index: 100;
    animation: fadein 1s 1s both;
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
   @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        box-sizing: content-box;

    }


`

const Close = styled.button`
    position: absolute;
    top: 0;
    right: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5em;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.3);
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        color: #fff;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        color: #000;
    }
    @media ${deviceW.laptopS} and (min-height: 635px){
        color: #000;
    }
`

const Card = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000000;
    animation: fadein 1s 1s both;
    transition: 0.3s;
    z-index: 100;
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    } 
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        flex-direction: column;
        background-color: #0a0a0a;
        height: 100%;
        width: 100%;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        flex-direction: row;
        background-color: #f5f5f5;
        width: 90%;
        height: 90%;
    }
    @media ${deviceW.laptopS} and (min-height: 625px){
        flex-direction: row;
        background-color: #f5f5f5;
        width: 90%;
        height: 90%;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    @media ${deviceW.laptopL} {
        flex-direction: row;
        width: 90%;
        height: 90%;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    
   
`
const ContainerLeft = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 1000px;
    border-radius: 10px;
    .ImageMagnify{
        border-radius: 10px;
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        display: flex;
        width: 250px;
        height: 90%;
    }
    @media ${deviceW.mobileM} and ${deviceH.mobileM}{
        width: 304px;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        height: 100%;
        width: 1000px;
        margin-right: 20px;
    }
    @media ${deviceW.laptopS} and (min-height: 625px) {
        width: 880px;
        margin-right: 20px;
        margin-left: 20px;
    }
    @media ${deviceW.desktopL} and (min-height: 635px) {
        height: 100%;
        width: 1600px;
    }
    `
const ContainerRight = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5%;
    border-radius: 10px;
    background-color: #d0d0d0;
    
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        width: 100%;
        height: 100%;
    }    
    
    @media ${deviceW.laptopS} and (min-height: 635px ){
        width: 100%;
        height: 100%;
        margin-left: 20px;
    }
`
const Title = styled.h1`
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;

    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        font-size: 1.2em;
    }
    @media ${deviceW.mobileM} and ${deviceH.mobileM}{
        font-size: 1.6em;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        font-size: 2em;
    }
    @media ${deviceW.laptopS} and (min-height: 635px ){
        font-size: 2.6em;
    }
`
const Album = styled.h2`
    color: #000;
    margin-bottom: 10px;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        font-size: 1em;
    }
    @media ${deviceW.mobileM} and ${deviceH.mobileM}{
        font-size: 1.3em;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        font-size: 1.5em;
    }
    @media ${deviceW.laptopS} and (min-height: 635px ){
        font-size: 2em;
    }
`
const Price = styled.h2`
    font-size: 2.5em;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
    width: 90%;
    display: flex;
    text-align: center;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        font-size: 2em;
    }
    @media ${deviceW.laptopS} and (min-height: 635px ){
        font-size: 3em;
    }
`
const Year = styled.h2`
    font-size: 2em;
    color: #000;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        font-size: 1em;
    }
    @media ${deviceW.mobileM} and ${deviceH.mobileM}{
        font-size: 1.3em;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        font-size: 1.5em;
    }
    @media ${deviceW.laptopS} and (min-height: 635px ){
        font-size: 2em;
    }
`

const Description = styled.p`
    font-size: 1.5em;
    color: #000;
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    text-align: center;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        font-size: 0.7em;
        height: 25%;
    }
    @media ${deviceW.mobileM} and ${deviceH.mobileM}{
        font-size: 1em;
        height: 28%;
        margin-top: 20px;
    }
    @media ${deviceW.mobileL} and ${deviceH.mobileL}{
        font-size: 1em;
        height: 30%;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        font-size: 1.2em;
        height: 40%
    }
    @media ${deviceW.laptopS} and (min-height: 635px ){
        font-size: 1.5em;
        height: 30%;
    }
    @media ${deviceW.laptopS} and (min-height: 635px ){
        font-size: 1.5em;
        height: 35%;
    }
`
const Tags = styled.p`
    font-size: 1.5em;
    color: #000;
    margin-bottom: 10px;
    width: 90%;
    display: flex;
    text-align: center;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        font-size: .7em;
    }
    @media ${deviceW.mobileM} and ${deviceH.mobileM}{
        font-size: 1em;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        font-size: 1.2em;
    }
    @media ${deviceW.laptopS} and (min-height: 635px ){
        font-size: 1.5em;
    }
`


const Button = styled.button`
    background-image:linear-gradient(97deg, #daa520 0%, #d6a322 26%, #d8a72c 58%, rgba(251,245,183,1) 87%, rgba(252,246,186,1) 100%); 
    background-size: 100% auto;
    color: #000;
    border: 1px solid #000;
    border-radius: 10px;
    font-size: .9em;
    font-weight: bold;
    
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    margin-top: auto;
    &:hover {
        background-size: 140% auto;
        color: #fff;
        text-shadow: 0px 0px 5px #000;
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        font-size: .6em;
        padding: 5px 15px;
        margin-bottom: 10px;
    }
    @media ${deviceW.mobileM} and ${deviceH.mobileM}{
        font-size: .9em;
        padding: 6px 17px;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        font-size: .9em;
        padding: 10px 30px 10px 30px;
    }
    @media ${deviceW.laptopS} and (min-height: 635px ){
        font-size: .9em;
        padding: 10px 30px 10px 30px;
        margin-bottom: 0px;
    }
`

// //FA Icon
const Facebook = styled(FontAwesomeIcon)`
    color: #0a0a0a;
    width: 50px !important;
    height: 50px !important;
    padding: 5px;
    font-size: 2.3rem;
    margin-top: 20px;
    margin-right: 2rem;
    border: 3px solid #0a0a0a;
    border-radius: 50%;
    background-color:transparent;
    transition: all 0.2s ease-in-out;
    z-index: 1;
    -webkit-transform: scaleX(1) !important;
    transform: scaleX(1)  !important;
    &:hover {
        color: #fff;
        transform: scale(1.1) !important;
        padding: 7px;
        cursor: pointer;
        border: none;
        background: #1e5799; 
        background: -moz-linear-gradient(top,  #1e5799 0%, #2989d8 50%, #207cca 73%, #7db9e8 100%); 
        background: -webkit-linear-gradient(top,  #1e5799 0%,#2989d8 50%,#207cca 73%,#7db9e8 100%); 
        background: linear-gradient(to bottom,  #1e5799 0%,#2989d8 50%,#207cca 73%,#7db9e8 100%); 
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        width: 30px !important;
        height: 30px !important;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        width: 35px !important;
        height: 35px !important;
    }
    @media ${deviceW.laptopS} and (min-height: 635px ){
        width: 40px !important;
        height: 40px !important;
    }
`
const Instagram = styled(FontAwesomeIcon)`
    color: #0a0a0a;
    width: 50px !important;
    height: 50px !important;
    border-radius: 50%;
    background-color:transparent ;
    border: 3px solid #0a0a0a;
    padding: 3px;
    font-size: 2.5rem;
    margin-right: 2rem;
    transition: all .2s ease-in-out;
    -webkit-transform: scaleX(1) !important;
     transform: scaleX(1) !important;
    &:hover {
         color: #fff; 
         transform: scale(1.1) !important;
        cursor: pointer;
        background: #d6249f;
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
        border: none;
        padding: 5px;
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        width: 30px !important;
        height: 30px !important;
        border: 1px solid #0a0a0a;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        width: 35px !important;
        height: 35px !important;
    }
    @media ${deviceW.laptopS} and (min-height: 635px ){
        width: 40px !important;
        height: 40px !important;
        border: 3px solid #0a0a0a;
        margin-top: 10px;
    }
`
import React from 'react'
import MercadoPago from './MercadoPago'
import styled from 'styled-components'
import { deviceW, deviceH } from '../../Breakpoints'
import MPlogo from '../../Images/MERCADOPAGO.png'

const MercadoPagoModal = ({setValidationSuccess}) => {
  return (
    <ModalStyle>
        <button className='close' onClick={() => setValidationSuccess(false)}>x</button>
        <img src={MPlogo} alt='MercadoPago' className='MPimg'/>
        <h1>Datos cargados correctamente</h1>
        <h2>Solo queda realizar el pago. Una vez confirmado el pago, se enviará tu compra a la dirección indicada.</h2>
        <MercadoPago/>
    </ModalStyle>
  )
}

export default MercadoPagoModal

const ModalStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 8px solid #0a0a0a;
    background-color: #f5f5f5;
    width: 68%;
    height: 500px;
    box-shadow: none;
    border-radius: 10px;
    font-size: 1.5rem;
    animation: fadeIn 0.5s;
    h1{
        font-size: 3rem;
        font-weight: bold;
        color: #0a0a0a;
        margin-top: 20px;
    }
    h2{
        font-size: 1.5rem;
        font-weight: bold;
        color: #0a0a0a;
        margin-top: 20px;
    }
    .MPimg{
        width: 100%;
    }
    .close{
        width: 40px;
        border-radius: 0px 5px 0px 10px;
        position: absolute;
        top: 0;
        right: 0;
        background-color: #c70000;
        color: #fff;
        border: none;
        padding: 10px;
        font-size: 1.2rem;
        font-weight: bold;
    }
    @keyframes fadeIn {
        from {
            transform: scale(0.1) translate(-50%, -50%);
            opacity: 0;
        }
        to {
            transform: scale(1) translate(-50%, -50%);
            opacity: 1;
        }
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        width: 90%;
        top: 58%;
        border-radius: 15px;
        border: 10px solid #0a0a0a;
        h1{
            font-size: 2rem;
        }
        h2{
            font-size: 1.2rem;
        }  

    }
    @media ${deviceW.mobileM} and ${deviceH.mobileM}{
        top: 49%;
    }
    @media (min-width: 360px) and (min-height:712px) {
       top: 46%;
    }
    @media (min-width: 414px) and (min-height: 724px) {
        height: 550px;
        top: 52%;
        .MPimg{
            width: 400px;
        }
    }
    @media ${deviceW.mobileL} and ${deviceH.mobileL}{
       top: 49%;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        top: 57%;
    }
    @media ${deviceW.tabletL} and ${deviceH.tabletL}{
        top: 55%;
    }
    
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
       top: 59%;
    }
    @media ${deviceW.laptopS} and (min-height: 625px) and (max-height: 767px){
        .MPimg{
            width: 400px;
        }
    }

    @media ${deviceW.laptopL} and (min-height: 753px) {
        top: 60%;
    }
    @media ${deviceW.desktopS} and ${deviceH.desktopS}{
       top: 52%;
    }
    @media ${deviceW.desktopL} and ${deviceH.desktopL}{
       top: 46%;
    }

    `
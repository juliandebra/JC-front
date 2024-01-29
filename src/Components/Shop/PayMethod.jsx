import React from 'react';
import Payments from '../Images/payment-methods.png';
import {deviceW, deviceH} from '../Breakpoints';

import styled from 'styled-components';

const PayMethod = () => {
  return (
  <PayMethodStyle>
    <img src={Payments} alt="" className='payments'/>
  </PayMethodStyle>)
};

export default PayMethod;


const PayMethodStyle = styled.div`
    display: flex;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 95%;
    background-color: #f5f5f5;
    margin-top:60px;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000000;
    border: 1px solid #000000;
    z-index: 0;
    .payments{
      width: 100%;
    }
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
        height: 100px;
        width: 320px;
        margin-top: 20px;
        padding: 50px;
    }

`
import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './SideBar/SideBar'
import JCdraw from '../Images/JCdraw.png'

const EditShop = () => {
  return (
      <div>
        <Header title='SHOPPING'/>
        <EditShopStyle>
          <Sidebar/>
          <JCdrawstyled src={JCdraw} alt='JCdraw'/>
        </EditShopStyle>
    </div>
  )
}

export default EditShop

const EditShopStyle = styled.div`
    background-color: #000;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`
const JCdrawstyled = styled.img`
    width: 40vw;
    height: 40vw;
    position: fixed;
    top: 10%;
    left: 30%;
`

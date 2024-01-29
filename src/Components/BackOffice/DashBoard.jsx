import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import SideBarDashBoard from './SideBar/SideBarDashBoard'
import JCdraw from '../Images/JCdraw.png'

const DashBoard = () => {
  return (
    <div >
        <Header title='INICIO'/>
        <main>
        <SideBarDashBoard/>
        <JCdrawstyled src={JCdraw} alt='JCdraw'/>
     
        </main>
        
    </div>
  )
}

export default DashBoard

const JCdrawstyled = styled.img`
    width: 40vw;
    height: 40vw;
    position: fixed;
    top: 10%;
    left: 30%;
    color: rgb(187, 186, 186);

`

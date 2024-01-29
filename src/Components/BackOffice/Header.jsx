import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

const Header = ({title}) => {
  return (
    <HeaderStyle>
      <section className='icon' >
        <FontAwesomeIconStyle icon={faArrowCircleLeft} onClick={() => window.history.back()} />
      </section>
      <TopbarWrapperStyle>
        <div className='header-section'> 
          <LogoSyle>
            Johnny Cash
          </LogoSyle>
          
        </div>

      </TopbarWrapperStyle>  
      <h1 className='title'>{title}</h1>
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.header`
    flex-direction: row;
    background-color: #fff;
    height: 50px;
    width: 100%;
    display: flex;
    padding: 0 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    align-items: center;
    justify-content: space-between;

    .header-section {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }
    .title{
      font-size: 1.3rem;
      font-weight: bold;
      color: #000;
      width: 160px;
    }
    .icon{
      width: 160px;
    }
`
const FontAwesomeIconStyle = styled(FontAwesomeIcon)`
    color: #000;
    font-size: 40px;
    cursor: pointer;
`

const TopbarWrapperStyle = styled.div`
   
`

const LogoSyle = styled.span`
font-size: 30px;
font-weight: bold;
color: #000000;
cursor: pointer;
&:hover {
    color: #000;
    text-decoration: underline;
    cursor: pointer;
}
`
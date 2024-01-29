import React from 'react'

//Styled Components
import styled from 'styled-components'

//react-router-dom
import { Link } from 'react-router-dom'

//deviceW
import { deviceW } from '../Breakpoints'

const BarsSection = () => {
    return (
        <LinkSection>
            {/* <Category className='Category'>
                        <StyledLink to='/category'>CATEGORY</StyledLink>
                    </Category> */}
                    

                    <Contact className='Contact'>
                        <StyledLink to='/Contact'>CONTACT</StyledLink>
                    </Contact>

                    <Support className='Support'>
                        <StyledLink to='/Support'>SUPPORT</StyledLink>
                    </Support>
        </LinkSection>
    )
}

export default BarsSection


//Styled Components
const LinkSection = styled.section`
    width: 600px;
    height: 100%;
    display: flex;
    align-items: flex-start;
    transition: all 0.3s ease-in-out;;
    flex-direction: row;

    @media ${deviceW.laptop} {
        flex-direction: row;
      }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #ffffff;
        font-size: 20.5px;
        cursor: pointer;
    }
`

// const Category = styled.section`    
//     width : 120px;
//     margin-right: 100px;
//     margin-left: 20px;
// `
const Contact = styled.section`
    width : 120px;
    margin-right: 100px
`
const Support = styled.section`
    width : 120px;
`
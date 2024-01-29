import React, {Suspense} from 'react'
import News from './News'
//3DModel
import  ThemeScene  from './Model3D/ThemeScene.jsx';
import { OrbitControls, Stage, BakeShadows } from '@react-three/drei'
import Vinyl from './Model3D/Vinyl.js'
import Vinyl2 from './Model3D/Vinyl2.js'
import Jukebox from './Model3D/Jukebox.js'
import Cassette from './Model3D/Cassette.js'
import RockVinyl1 from './Model3D/501vinyl.js'


//FortAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Styled Components
import styled from 'styled-components'

//deviceW
import  { deviceW, deviceH, vh, vhFooter } from '../Breakpoints'

//URLs
const FacebookUrl = 'https://www.facebook.com/JohnnyCash.Vinilos'
const InstagramUrl = 'https://www.instagram.com/johnnycash.vinilos/'
const WhatsappUrl = 'https://wa.me/5493416441022'

const Footer = (props) => {
    const [counter, setCounter] = React.useState(0)
    React.useEffect(function appRunTimer() {
        const timer = setInterval(() => {
            setCounter(counter + 1)
            if (counter === 4) {
                setCounter(0)
            }
        }, 5000)
        return function stopTimer() {
          clearInterval(timer)
        }
    }, [counter])
    const ModelCarousel = () => {
        switch (counter) {
            case 0:
                return <Vinyl2 />
            case 1:
                return <Cassette  scale={-1} rotation={[0, 0, Math.PI]}/>
            case 2:
                return <Vinyl  />
            case 3:
                return <Jukebox />
            case 4:
                return <RockVinyl1  scale={-1} rotation={[0, Math.PI, Math.PI]}/>


            default:
                return <Vinyl />
        }
    }
    return (
        <FooterStyle className='Footer'>
            <ContainerLeft className='Container-Left'>
                <News className='News'/>
                <Slogan className='Slogan'>
                    <div>
                    <Title>RELIQUIAS DEL ROCK AND ROLL</Title>
                    <Subtitle>La mejor tienda online con envios a todo el país</Subtitle>
                    </div>
                </Slogan>
            </ContainerLeft>
            <ContainerRight className='Container-Right'>
                <Logo className='Logo'>
                    <ThemeScene >
                        <Suspense fallback={null}>
                        <Stage >
                        <ModelCarousel />
                            </Stage>
                            <BakeShadows />
                        </Suspense>
                        <ambientLight intensity={0.3}/>
                        <OrbitControls makeDefault autoRotate enableZoom={false} />
                    </ThemeScene> 
                </Logo>
                <Social className='Social'>
                    <a href={FacebookUrl} >
                        <Facebook icon={faFacebookF} className='Facebook'/>
                    </a>
                    <a href={InstagramUrl} >    
                        <Instagram icon={faInstagram} className='Instagram' />
                    </a>
                    <a href={WhatsappUrl} > 
                        <Whatsapp icon={faWhatsapp} className='Whatsapp'/>
                    </a>   
                </Social>
            </ContainerRight>
        </FooterStyle>
    )
}   

export default Footer

// Styled Components
const FooterStyle = styled.div`
    display: flex;
    background-color: #fff;
    flex-direction: row;
    z-index: 1;
    justify-content: space-evenly;
    background:linear-gradient(to right, goldenrod, #FCF6BA, goldenrod, #FBF5B7, goldenrod);
    width: 100vw;

    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        flex-direction: column;
        height: 67vh;
    }
    @media ${deviceW.mobileM} and ${deviceH.mobileM}{
        flex-direction: column;
        height: 69vh;
    }
    @media (min-width: 360px) and (min-height:712px) {
        height: 485px;
    }
    @media (min-width: 414px) and (min-height: 724px) {
        height: 554px; 
    }
    @media (min-width: 412px) and (min-height: 804px) {
        height: 554px; 
    }
    @media ${deviceW.mobileL} and ${deviceH.mobileL}{
        flex-direction: column;
        height: 70.2vh;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        flex-direction: row;
        height: 66.9vh;
    }
    @media ${deviceW.tabletL} and ${deviceH.tabletL}{
        flex-direction: row;
        height: 67.2vh;
    }
    
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        height: 67.9vh;
    }
    @media ${deviceW.laptopS} and (min-height: 625px) and (max-height: 767px){
        flex-direction: row;
        height: 65.8vh;
    }
    @media ${deviceW.laptopL} and ${deviceH.laptopL}{
        height: 68.8vh;
    }
    @media ${deviceW.laptopL} and (min-height: 650px)  {
        flex-direction: row;
        height: 67.6vh;
    }
    @media ${deviceW.desktopS} and ${deviceH.desktopS}{
        height: 69.5vh;
    }
    @media ${deviceW.desktopL} and ${deviceH.desktopL}{
        height: 70.3vh;
    }
    
`
//Container Left
const ContainerLeft = styled.div`
    width: 45vw;
    height: 60vh;
    justify-content: center;
    display: flex;
    flex-direction: column;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        height: 40vh;
        width: 100vw;
    }
    @media ${deviceW.mobileM} and ${deviceH.mobileM}{
        height: 40vh;
        width: 100vw;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        padding-left: 2vw;
        height: 60vh;
        width: 100vw;
    }
    @media ${deviceW.laptopS} and (min-height: 625px) and (max-height: 767px){
        height: 60vh;

    }
    @media ${deviceW.laptopL} and (min-height: 650px)  {
        height: 55vh;
    }
`
const Slogan = styled.div`
    display: flex;
    align-items: left;
    color: #0a0a0a;
    flex-direction: column;
    text-align: left;
    padding-top: 5%;
`
const Title = styled.h1`
    text-align: center;
    font-size: 2.5vw;
    font-weight: bold;
    text-shadow: 3px 3px 1px white;
    
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        font-size: 5vw;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        font-size: 3.8vw;
    }
    @media ${deviceW.tabletL} and ${deviceH.tabletL}{
        font-size: 3.3vw;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        font-size: 3vw;
    }
    @media ${deviceW.laptopS} and (min-height: 625px) and (max-height: 767px){
        font-size: 2.5vw;
    }
    @media ${deviceW.laptopL} and (min-height: 650px)  {
        font-size: 3vw;
    }
`
const Subtitle = styled.h2`
    text-align: center;
    font-size: 1.5vw;
    text-shadow: 3px 3px 1px white;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        font-size: 4vw;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        font-size: 3vw;
    }
    @media ${deviceW.tabletL} and ${deviceH.tabletL}{
        font-size: 2.8vw;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        font-size: 2.5vw;
    }
    @media ${deviceW.laptopS} and (min-height: 625px) and (max-height: 767px){
        font-size: 2vw;
    }
    @media ${deviceW.laptopL} and (min-height: 650px) {
        font-size: 2.5vw;
    }
`
//Container Right
const ContainerRight = styled.div`
    flex-direction: column;
    height: 60vh;
    width: 45vw;
    z-index: 20;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        width: 100vw;
        height: 10vh;
    }
    @media ${deviceW.mobileM} and ${deviceH.mobileM}{
        width: 100vw;
        height: 10vh;
    }
`
const Logo = styled.div`
    height: 55vh !important;
    width: 45vw;
    z-index: 2;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        display: none;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        display: flex;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        display: flex;
    }
    @media ${deviceW.laptopS} and (min-height: 625px) and (max-height: 767px){
        display: flex;
    }
    @media ${deviceW.laptopL} and (min-height: 650px)  {
        display: flex;
    }
`
const Social = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: right;

    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        justify-content: center;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        justify-content: flex-end;
        margin-right: 2vw;
    }
    @media ${deviceW.laptopL} and (min-height: 753px) {
        justify-content: flex-end;
        margin-right: 2vw;
    }
`
// //FA Icon
const Facebook = styled(FontAwesomeIcon)`
    color: #0a0a0a;
    width: 50px !important;
    height: 50px !important;
    padding: 5px;
    font-size: 2.3rem;
    margin-right: 2rem;
    border: 3px solid #0a0a0a;
    border-radius: 50%;
    background-color:transparent;
    transition: all 0.2s ease-in-out;
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
        width: 40px !important;
        height: 40px !important;
        margin-right: 1rem;
    }
    @media ${deviceW.mobileL} and ${deviceH.mobileL}{
        width: 50px !important;
        height: 50px !important;
        margin-right: 1rem;
    }
    @media ${deviceW.tabletL} and ${deviceH.tabletL}{
        width: 45px !important;
        height: 45px !important;
        margin-right: 1rem;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        width: 50px !important;
        height: 50px !important;
        margin-right: 1rem;
    }
    @media ${deviceW.desktopL} and ${deviceH.desktopL}{
        width: 60px !important;
        height: 60px !important;
        margin-right: 1rem;
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
        width: 40px !important;
        height: 40px !important;
        margin-right: 1rem;
    }
    @media ${deviceW.mobileL} and ${deviceH.mobileL}{
        width: 50px !important;
        height: 50px !important;
        margin-right: 1rem;
    }
    @media ${deviceW.tabletL} and ${deviceH.tabletL}{
        width: 45px !important;
        height: 45px !important;
        margin-right: 1rem;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        width: 50px !important;
        height: 50px !important;
        margin-right: 1rem;
    }
    @media ${deviceW.desktopL} and ${deviceH.desktopL}{
        width: 60px !important;
        height: 60px !important;
        margin-right: 1rem;
    }
`
const Whatsapp = styled(FontAwesomeIcon)`
    color: #0a0a0a;
    width: 50px !important;
    height: 50px !important;
    border-radius: 50%;
    background-color:transparent ;
    border: 3px solid #0a0a0a;
    padding: 3px;
    font-size: 2.5rem;
    margin-right: 2rem;
    transition: all 0.2s ease-in-out;
    -webkit-transform: scaleX(1) !important;
     transform: scaleX(1) !important;
    &:hover {
        color: #fff;
        transform: scale(1.1) !important;
        cursor: pointer;
        background: #25D366;
        border:none;
        padding: 5px;
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        width: 40px !important;
        height: 40px !important;
        margin-right: 0rem;
    }
    @media ${deviceW.mobileL} and ${deviceH.mobileL}{
        width: 50px !important;
        height: 50px !important;
        margin-right: 1rem;
    }
    @media ${deviceW.tabletL} and ${deviceH.tabletL}{
        width: 45px !important;
        height: 45px !important;
        margin-right: 1rem;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        width: 50px !important;
        height: 50px !important;
        margin-right: 1rem;
    }
    @media ${deviceW.desktopL} and ${deviceH.desktopL}{
        width: 60px !important;
        height: 60px !important;
        margin-right: 1rem;
    }
`



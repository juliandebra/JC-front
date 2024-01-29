import React, {useState, useRef, useEffect } from 'react'
import CartWidget from '../../Cart/CartWidget'
import { CartState } from '../../../Context';
//react-router
import { Link, useNavigate, useParams } from 'react-router-dom'

//FortAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faRecordVinyl, faCompactDisc, faBook } from '@fortawesome/free-solid-svg-icons'

//Icons
import Vinyls from '../../Images/vinil.png'
import Cassettes from '../../Images/cassette2.png'
import DVD from '../../Images/DVD2.png'
import CDs from '../../Images/CD.png'
import Books from '../../Images/books1.png'
import JohnnyCash from '../../Images/johnny-cash.png'

//styled components
import styled from 'styled-components'
import  { deviceW, deviceH } from '../../Breakpoints'

const Header = (props) => {

    const params = useParams()
    const navigate = useNavigate()

    const { setLoading } = CartState()
    const [barsEnabled, setBarsEnabled] = useState(false);

    const cdRef = useRef(null);
    const vinylRef = useRef(null);
    const dvdRef = useRef(null);
    const booksRef = useRef(null);
    const cassettesRef = useRef(null);

    const clickIcon = (e, ref) => {
        props.setSearch(null)
        props.setShop(e.toLowerCase())
        navigate(e)
        props.setShopEnabled(true);
        if (props.shop === e){
            navigate('/')
            props.setShop([])
            props.setShopEnabled(false);
        }
        let refColor = ref.current.style.backgroundColor;
        let gold = 'goldenrod';
        ref.current.style.backgroundColor = refColor === gold ? '#f5f5f5' : gold;
        const loaded = () => { setTimeout(() => { setLoading(true) }, 1000) }

        if (ref === cdRef){
            vinylRef.current.style.backgroundColor = '#f5f5f5';
            // dvdRef.current.style.backgroundColor = '#f5f5f5';
            cassettesRef.current.style.backgroundColor = '#f5f5f5';
            // booksRef.current.style.backgroundColor = '#f5f5f5';
            setLoading(false)
            loaded()
        }
        if (ref === vinylRef){
            cdRef.current.style.backgroundColor = '#f5f5f5';
            // dvdRef.current.style.backgroundColor = '#f5f5f5';
            cassettesRef.current.style.backgroundColor = '#f5f5f5';
            // booksRef.current.style.backgroundColor = '#f5f5f5';
            setLoading(false)
            loaded()
        }
        // if (ref === dvdRef){
        //     cdRef.current.style.backgroundColor = '#f5f5f5';
        //     vinylRef.current.style.backgroundColor = '#f5f5f5';
        //     cassettesRef.current.style.backgroundColor = '#f5f5f5';
        //     booksRef.current.style.backgroundColor = '#f5f5f5';
        //     setLoading(false)
        //     loaded()
        // }
        if (ref === cassettesRef){
            cdRef.current.style.backgroundColor = '#f5f5f5';
            vinylRef.current.style.backgroundColor = '#f5f5f5';
            // dvdRef.current.style.backgroundColor = '#f5f5f5';
            // booksRef.current.style.backgroundColor = '#f5f5f5';
            setLoading(false)
            loaded()
        }
        // if (ref === booksRef){
        //     cdRef.current.style.backgroundColor = '#f5f5f5';
        //     vinylRef.current.style.backgroundColor = '#f5f5f5';
        //     dvdRef.current.style.backgroundColor = '#f5f5f5';
        //     cassettesRef.current.style.backgroundColor = '#f5f5f5';
        //     setLoading(false)
        //     loaded()
        // }
    }
    useEffect(() => {
        if(params.categoria){
                props.setShop(params.categoria.toLowerCase()) //colocarle toLowerCase() y hacer base de datos todo con minusculas
                props.setShopEnabled(true)
        }
    }, [props, params])


    return (
        <HeaderStyle className='Header'>
            <ContainerTop className='Container-Top'>
                <Bars className='Bars' barsEnabled={barsEnabled} onClick={() => setBarsEnabled(!barsEnabled)}  >
                    <FontAwesomeIcon icon={faBars}/>
                </Bars>
                <LinkSection className='Link-Section'>
                    {barsEnabled &&
                        <SectionEnabled>
                            <Contact className='Contact'>
                                <StyledLink to='/Contact'>CONTACTO</StyledLink>
                            </Contact>
                            <Support className='Support'>
                                <StyledLink to='/AcercaDeNosotros'>QUIENES SOMOS</StyledLink>
                            </Support>
                        </SectionEnabled>
                    }
                </LinkSection>
                <JohhnnyCash className='Johhnny-Cash' src={JohnnyCash} />
                <section>
                    <CartWidget />
                </section>
            </ContainerTop>
            <ContainerBottom className='Container-Bottom'>
            <IconSection ref={vinylRef} className='Vinyl-icon-section' onClick={() => clickIcon('vinilos', vinylRef)}>
                <Icon className='Icon'>     
                    <Vinyl src={Vinyls} className='Vinyl' icon={faCompactDisc}  />
                </Icon>
                <IconText className='Icon-Text'>
                    <p>VINILOS</p>
                </IconText>
            </IconSection>
                <IconSection ref={cassettesRef} className='Cassettes-icon-section'  onClick={() => {
                        clickIcon('cassettes', cassettesRef);
                        }}>
                    <Icon className='Icon'  >
                        <Cassette src={Cassettes} className='Cassette'  />
                    </Icon>
                    <IconText className='Icon-Text'>
                        <p>CASSETTES</p>
                    </IconText>
                </IconSection>
                <IconSection ref={cdRef} className='CD-icon-section' onClick={() => {
                            clickIcon('cd', cdRef);
                            }}>
                    <Icon className='Icon'>
                        <CD src={CDs} className='CD'  icon={faRecordVinyl} />
                    </Icon>
                    <IconText className='Icon-Text'>
                        <p>CDs</p>   
                    </IconText>
                </IconSection>
                {/* <IconSection ref={dvdRef} className='DVD-icon-section' onClick={() => {
                            clickIcon('dvd', dvdRef);
                            }}>
                    <Icon className='Icon'>
                        <DVDImg className='DVD' src={DVD} />
                    </Icon>
                    <IconText className='Icon-Text'>
                        <p>DVDs</p>
                    </IconText>
                </IconSection>
                <IconSection ref={booksRef} className='Book-icon-section' onClick={() => {
                            clickIcon('libros', booksRef);
                            }}>
                    <Icon className='Icon'>
                        <Book src={Books} className='Books' icon={faBook} />
                    </Icon>
                    <IconText className='Icon-Text'>
                        <p>LIBROS</p>   
                    </IconText>
                </IconSection> */}
            </ContainerBottom>
        </HeaderStyle>
    )
}
export default Header

const HeaderStyle = styled.div`
    box-sizing: content-box;
    flex-direction: column;
    display: flex;
    height: 20vh;
    width: 100vw;
    color:#ffd2b4;
    background-color: #0a0a0a;
    z-index:100;

    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        width: 100vw;
        height: 22vh;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        height: 24vh;
    }
    @media ${deviceW.laptopS} and (min-height: 625px) and (max-height: 767px){
        height: 23vh;
    }
     @media ${deviceW.laptopS} and ${deviceH.laptopS} {
        height: 22vh;
    }   
    @media ${deviceW.laptopL} and ${deviceH.laptopL} {
        height: 23vh;
    }   


`
const ContainerTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 12vh;
    @media ${deviceW.laptopS} and ${deviceH.laptopS} {
      width: 100%;   
    } 
`
const Bars = styled.section`
    display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    transform: scale(2) rotate(0deg);
    color:#e2e2e2;
    transition: 0.2s;
    cursor: pointer;
    ${({ barsEnabled }) => barsEnabled && `
        transform: scale(2) rotate(90deg);
        &:hover {
            transform: scale(2.2) rotate(90deg);
            color: #fff;
        }
    `}
    &:hover {
        color: #fff;
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        transform: scale(1.5) rotate(0deg);
    }
    @media ${deviceW.tabletL} and ${deviceH.tabletL}{
        transform: scale(2) rotate(0deg);
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        width: 25px;
        height: 25px;
        transform: scale(1.7) rotate(0deg);
        margin-left: 20px; 
    }
    @media ${deviceW.desktopL} and ${deviceH.desktopL}{
        transform: scale(2) rotate(0deg);
    }

`
const JohhnnyCash = styled.img`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    width: 100px;

    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        width: 100px; 
        margin-left: 50px;
        margin-top: 0px;
    }
    @media ${deviceW.mobileL} and ${deviceH.mobileL}{
        width: 140px; 
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        width: 140px;  
    }

    @media ${deviceW.tabletL} and ${deviceH.tabletL}{
        width: 155px;  
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        width: 12vw;
        margin-left: 20px;
        margin-top: 80px;
    }
    @media ${deviceW.laptopS} and (min-height: 625px) and (max-height: 767px){
        width: 140px;
        
    }
    @media ${deviceW.laptopL} and (min-height: 753px) {
        margin-top: 80px;
    }


`
const LinkSection = styled.section`
    width: 500px;
    height: 60px;
    display: flex;
    align-items: flex-start;
    transition: all 0.3s ease-in-out;
    text-shadow: 2px 2px 2px #e9e9e9;
    position: absolute;
    left: 150px;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        width: 290px; 
        left: 60px;
    }
    @media ${deviceW.mobileM} and ${deviceH.mobileM}{
        width: 340px; 
        left: 60px;
    }
    @media ${deviceW.mobileL} and ${deviceH.mobileL}{
        width: 400px; 
        left: 60px;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        width: 350px; 
        left: 60px;
    }
    @media ${deviceW.tabletL} and ${deviceH.tabletL}{
        width: 420px; 
        left: 80px;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS} {
        width: 400px;
        left: 120px;
    }
    @media ${deviceW.laptopS} and (min-height: 625px) and (max-height: 767px){
        width: 400px;
        left: 120px;
    }
    @media ${deviceW.desktopL} and ${deviceH.desktopL} {
        width: 540px;
        left: 150px;
    }
`
const SectionEnabled = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    width: 100%;
    height: 50px;
    padding-top: 100px;
    padding: 10px;
    transition: all 0.3s ease-in-out;
    border-radius: 30px;
    animation: slideout 0.5s;
    background:linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
    border: 2px solid #000;
    z-index: 1;
    @keyframes slideout {
        from {
            opacity: 0;
            transform: translateX(-100px);
            z-index: 0;
        }
        to {
            opacity: 1;
            transform: translateX(0px);
            z-index: 1;
        }
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #0a0a0a;
    font-size: 20px;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        color: #000;
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        font-size: 15px;
    }
`
const Contact = styled.section`
    width : 160px;
    padding-left: 10px;
    transition: all 0.3s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    
`
const Support = styled.section`
    width : 160px;
    padding-left: 20px;
    transition: all 0.3s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`

const ContainerBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 20px;
    height: 12vh;
    padding-top: 20px; 
    box-sizing: content-box;
    height: 5vh;
    padding-top: 20px; 
    box-sizing: content-box;     
        
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        width: 50%;
        padding-left: 0px;
        margin-left: 20px;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        margin-left: 20px;
        margin-top: 20px;
    }


`
const IconSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 120px;
    background-color: #fff;
    border-radius: 10px;
    flex-direction: column;
    font-size: 15px;
    font-weight: bold; 
    margin-right: 20px;
    z-index: 5;
    cursor: pointer;
 
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        height: 40px; 
        width: 40px;
    }
    @media ${deviceW.mobileM} and ${deviceH.mobileM}{
        height: 50px; 
        width: 50px;
    }
    @media ${deviceW.mobileL} and ${deviceH.mobileL}{
        height: 60px; 
        width: 60px;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        height: 75px; 
        width: 75px;
    }
    @media ${deviceW.tabletL} and ${deviceH.tabletL}{
        height: 85px; 
        width: 85px;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS} {
        width: 80px;
        height: 80px;
    } 
    @media ${deviceW.laptopS} and (min-height: 625px) {
        width: 80px;
        height: 80px;
    }
    
    @media ${deviceW.desktopS} and ${deviceH.desktopS} {
        width: 90px;
        height: 90px;
    } 
    @media ${deviceW.desktopL} and ${deviceH.desktopL} {
        width: 100px;
        height: 100px;
    } 
    

`
const Icon = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    width: 100px;
    height:100px;

`   
const IconText = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    color: #2e2a2b;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        display: none;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        display: flex;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS} {
       display: flex;   
    } 
    @media ${deviceW.laptopS} and (min-height: 625px) and (max-height: 767px){
        display: flex;
    }
    @media ${deviceW.laptopL} and (min-height: 753px) {
        display: flex;
    }
`
const Cassette = styled.img`
    color: #0a0a0a ;
    width: 75px !important;
    height: 55px !important;;  
    transition: all 0.3s ease-in-out;
    transform: scale(0.8);
    &:hover {
        transform: scale(1.0);
    height: 55px !important;
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        transform: scale(0.5);
        &:hover {
            transform: scale(0.58);
        }
    }
    @media ${deviceW.mobileL} and ${deviceH.mobileL}{
        transform: scale(0.6);
        &:hover {
            transform: scale(0.68);
        }
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        transform: scale(0.7);
        &:hover {
            transform: scale(0.78);
        }
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        transform: scale(0.7);
        &:hover {
            transform: scale(0.78);
        }
    }
        @media ${deviceW.laptopS} and (min-height: 625px) and (max-height: 767px){
        display: flex;
    }
    @media ${deviceW.desktopL} and ${deviceH.desktopL}{
        transform: scale(0.9);
        &:hover {
            transform: scale(0.98);
        }
    }
    @media ${deviceW.laptopL} and (min-height: 753px) {
        transform: scale(0.8);
        &:hover {
            transform: scale(0.88);
        }
    }
`
const Vinyl = styled.img`
    color: #0a0a0a;
    width: 70px !important;
    height: 70px ;
    transition: all 0.3s ease-in-out;
    transform: scale(0.6);
    &:hover {
        transform: scale(.7);
    }
    margin-top: -8px;
    margin-bottom: -9px;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        transform: scale(0.5);
        &:hover {
            transform: scale(0.55);
        }
    }
    @media ${deviceW.mobileL} and ${deviceH.mobileL}{
        transform: scale(0.6);
        &:hover {
            transform: scale(0.65);
        }
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        transform: scale(0.63);
        &:hover {
            transform: scale(0.7);
        }
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        transform: scale(0.6);
        &:hover {
            transform: scale(0.68);
        }
    }
    @media ${deviceW.desktopL} and ${deviceH.desktopL}{
        transform: scale(0.85);
        &:hover {
            transform: scale(0.93);
        }
    }
    @media ${deviceW.laptopL} and (min-height: 753px) {
        transform: scale(0.65);
        &:hover {
            transform: scale(0.7);
        }
    }
`
const CD = styled.img`
    color: #0a0a0a;
    width: 90px !important;
    height: 60px !important;
    transition: all 0.3s ease-in-out;
    transform: scale(0.7);
    &:hover {
        color: #ffffff;
        transform: scale(.8);
        cursor: pointer;
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        transform: scale(0.4);
        &:hover {
            transform: scale(0.44);
        }
    }
    @media ${deviceW.mobileL} and ${deviceH.mobileL}{
        transform: scale(0.5);
        &:hover {
            transform: scale(0.58);
        }
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        transform: scale(0.6);
        &:hover {
            transform: scale(0.68);
        }
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        transform: scale(0.6);
        &:hover {
            transform: scale(0.68);
        }
    }
    @media ${deviceW.laptopL} and (min-height: 753px) {
        transform: scale(0.65);
        &:hover {
            transform: scale(0.7);
        }
    }
    @media ${deviceW.desktopL} and ${deviceH.desktopL}{
        transform: scale(0.85);
        &:hover {
            transform: scale(0.93);
        }
    }
`
const DVDImg = styled.img`
    width: 80px;
    color: #fff !important;
    filter: saturate(0.5);
    height: 60px;
    transition: all 0.3s ease-in-out;

    transform: scale(0.8);
    &:hover {
        color: #ffffff;
        transform: scale(1.0);
        cursor: pointer;
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        transform: scale(0.5);
        &:hover {
            transform: scale(0.58);
        }
    }
    @media ${deviceW.mobileL} and ${deviceH.mobileL}{
        transform: scale(0.6);
        &:hover {
            transform: scale(0.68);
        }
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        transform: scale(0.7);
        &:hover {
            transform: scale(0.78);
        }
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        transform: scale(0.65);
        &:hover {
            transform: scale(0.73);
        }
    }
    @media ${deviceW.laptopL} and (min-height: 753px) {
        transform: scale(0.65);
        &:hover {
            transform: scale(0.73);
        }
    }
`
const Book = styled.img`
    width: 80px;
    height: 60px;
    transition: all 0.3s ease-in-out;

    transform: scale(0.6);
    &:hover {
        color: #ffffff;
        transform: scale(.8);
        cursor: pointer;
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        transform: scale(0.4);
        &:hover {
            transform: scale(0.5);
        }
    }
    @media ${deviceW.mobileL} and ${deviceH.mobileL}{
        transform: scale(0.5);
        &:hover {
            transform: scale(0.58);
        }
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        transform: scale(0.6);
        &:hover {
            transform: scale(0.68);
        }
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        transform: scale(0.5);
        &:hover {
            transform: scale(0.58);
        }
    }
    @media ${deviceW.laptopL} and (min-height: 753px) {
        transform: scale(0.6);
        &:hover {
            transform: scale(0.67);
        }
    }
`






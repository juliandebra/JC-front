import { useEffect, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import { deviceH, deviceW } from '../Breakpoints';

const ImageCarousel = ({item}) => {

    const { Imagen1, Imagen2, Imagen3, Imagen4 } = item

    const [counter, setCounter] = useState(0)
    useEffect(function appRunTimer() {
        const timer = setInterval(() => {
            setCounter(counter + 1)
            if (counter === 4) {
                setCounter(0)
            }
        }, 4000)
        return function stopTimer() {
          clearInterval(timer)
        }
    }, [counter])
    const MagnifyCarousel = () => {
        switch (counter) {
            case 0:
                return Imagen1
            case 1:
                return Imagen2
            case 2:
                if(Imagen3 === '') {setCounter(0); break;}
                else return Imagen3
            case 3:
                if(Imagen4 === '') {setCounter(0); break;}
                else return Imagen4
            default:
                return Imagen1
        }
    }

    const backPhoto = () => {
        if(counter === 0) {
            setCounter(3)
        }
        else{
            setCounter(counter - 1)
        }
    }
    const forPhoto = () => {
        if(counter === 3) {
            setCounter(0)
        }
        else{
            setCounter(counter + 1)
        }
    }

  return (
    <div>
        <BackArrow icon={faChevronLeft} size='3x' onClick={backPhoto}/>
        <ReactImageMagnify {...{
                smallImage: {
                    alt: '',
                    isFluidWidth: true,
                    src: MagnifyCarousel(),

                },
                largeImage: {
                    src: MagnifyCarousel(),
                    width: 1000,
                    height: 1000
                }
            }} />
        <ForArrow icon={faChevronRight} size='3x' onClick={forPhoto}/>
    </div>
  )
}

export default ImageCarousel

const BackArrow = styled(FontAwesomeIcon)`
    position: fixed;
    z-index: 12;
    cursor: pointer;
    top: 50%;
    color: grey;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        top: 20%;
        left: 0;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        top:50%;
        left: 5%;
    }
    @media ${deviceW.tabletS} and (min-height: 625px){
        top:50%;
        left: 5%;
    }

`
const ForArrow = styled(FontAwesomeIcon)`
    position: fixed;
    position: fixed;
    z-index: 12;
    cursor: pointer;
    top: 50%;
    color: grey;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        top: 20%;
        right: 0;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        top:50%;
        left: 47%;
    }
    @media ${deviceW.tabletL} and ${deviceH.tabletL}{
        left: 43%;
    }
    @media ${deviceW.tabletS} and (min-height: 625px){
        top:50%;
        left: 40%;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        left: 41%;
    }
    @media ${deviceW.laptopL} and ${deviceH.laptopL}{
        left: 39%;
    }
    @media ${deviceW.desktopS} and ${deviceH.desktopS}{
        left: 40%;
    }
    @media ${deviceW.desktopL} and ${deviceH.desktopL}{
        left: 44%;
    }
`



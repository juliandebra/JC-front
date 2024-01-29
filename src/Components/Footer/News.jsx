import React from 'react'
import styled from 'styled-components'
import { deviceW, deviceH } from '../Breakpoints'
import { Carousel } from 'react-bootstrap'
import { getNovedades } from '../../Service/publicApiService'
import {useNavigate} from 'react-router-dom'

const News = () => {

    const navigate = useNavigate()
    const [novedades, setNovedades] = React.useState(null)

    React.useEffect(() => {
        getNovedades().then(res => {
            setNovedades(res)
        })
    }, [])

  return (
    <CarouselStyle variant="dark" indicators={false}>
        {novedades && novedades.map(novedad => (
            <Carousel.Item key={novedad.id} onClick={() => navigate(novedad.Url)}>
                <Image
                    className="d-block w-100"
                    src={novedad.Imagen}
                    alt=''
                />
                <Carousel.Caption>
                    <h3>{novedad.Titulo}</h3>
                    <p>{novedad.Subtitulo}</p>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </CarouselStyle>
  )
}

export default News

const CarouselStyle = styled(Carousel)`
    margin-top: 30px;
    height: 40vh;
    position: block;
    z-index: 0;
    width: 100%;
    cursor:  pointer;
    h3, p{
        color: white;
        background-color: #0a0a0a63;
        border-radius: 5px;
        text-shadow: 1px 1px 2px #0a0a0a;
        width: auto;
    }

`

const Image = styled.img`
    position: block;
    color: white;
    height: 400px;
    object-fit: cover;
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        height: 200px;
    }
    @media ${deviceW.laptopS} and (min-height: 625px) and (max-height: 767px){
        height: 280px;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS} {
       height: 340px;
    } 
`

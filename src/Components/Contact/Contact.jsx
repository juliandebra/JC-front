import React from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { getContact, publicMessage, getNotifiaciones, updateNotificacion } from '../../Service/publicApiService'
import { deviceW, deviceH } from '../Breakpoints'
import Swal from 'sweetalert2'

const Contact = () => {

    const [contact, setContact] = React.useState({})
    const [notificacion, setNotificacion] = React.useState({})
    const [newMessage, setNewMessage] = React.useState({
        Nombre: '',
        Mail: '',
        Telefono: '',
        Mensaje: ''
    })

    React.useEffect(() => {
        getContact().then(data => {
            setContact(data[0])
        })
    }, [])

    React.useEffect(() => {
        getNotifiaciones().then(data => {
            setNotificacion(data[0])
        }
        )
    }, [])
    

    const addNotificacion = () => {
        publicMessage(newMessage)
        setNotificacion({
            ...notificacion,
            Mensajes: notificacion.Mensajes++
        })
        updateNotificacion(notificacion.id, notificacion)
    }

    const validateSend = () => {
        let testEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(newMessage.Mail)
        if(newMessage.Nombre.length > 3 && testEmail && newMessage.Mensaje.length > 2) addNotificacion()
        else Swal.fire('Coloque sus datos correctamente')
    }

    return (
        <div>
           <Header/>
            <Title>Contacto</Title>

            <Info>
                <a href={`mailto:${contact.Mail}`}>
                    <FontAwesomeIcon className='FontAwesome Mail' icon={faEnvelope} />
                    
                </a>
                <a href={`https://wa.me/${contact.Telefono}`}>
                    <FontAwesomeIcon className='FontAwesome Whatsapp' icon={faWhatsapp} />
                    
                </a>
                <a href={`https://www.instagram.com/${contact.Instagram}`}>
                    <FontAwesomeIcon className='FontAwesome Instagram' icon={faInstagram} />
                    
                </a>
                <a href={`https://www.facebook.com/${contact.Facebook}`}>
                    <FontAwesomeIcon className='FontAwesome Facebook' icon={faFacebook} />
                </a>
            </Info>

            <Message>
                <label>Nombre</label>
                <input type="text" placeholder="Nombre" 
                    onChange={(e) => setNewMessage({...newMessage, Nombre: e.target.value})} 
                />
                <label>Email</label>
                <input type="text" placeholder="Email" 
                    onChange={(e) => setNewMessage({...newMessage, Mail: e.target.value})} 
                />
                <label>Telefono(opcional)</label>
                <input type="number" placeholder="Telefono" 
                    onChange={(e) => setNewMessage({...newMessage, Telefono: e.target.value})}
                />
                <label>Mensaje</label>
                <textarea placeholder="Mensaje"
                    onChange={(e) => setNewMessage({...newMessage, Mensaje: e.target.value})} 
                ></textarea>
                <Button onClick={() => { validateSend()}}>Enviar</Button>
            </Message>
        </div>
    )
}

export default Contact;

 
const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;

    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        font-size: 1.5em;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px;
    a{
        margin: 10px;
    }
    .FontAwesome{
        font-size: 2rem;
        color: #0a0a0a;
    }

    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        margin: 10px;
        a{
            margin: 5px 10px;
        }
        .FontAwesome{
            font-size: 1.5em;
        }
    }
    @media ${deviceW.mobileL} and ${deviceH.mobileL}{
        margin: 10px;
        a{
            margin: 5px 10px;
        }
        .FontAwesome{
            font-size: 2em;
        }
    }
    @media ${deviceW.laptopL} and ${deviceH.laptopL}{
        margin: 10px;
        a{
            margin: 5px 10px;
        }
        .FontAwesome{
            font-size: 2.5em;
        }
    }
`
const Message = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 50%;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 0px 0px 10px #000000;
    background-color: #f5f5f5;
    label{
        font-size: 1.2rem;
        font-weight: bold;
        margin-top: 20px;
    }
    input{
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        border: 1px solid #a4a3a3;
    }
    textarea{
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        border: 1px solid #ccc;
    }
    
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        width: 90%;
        label{
            margin-top: 5px;
        }
    }
`

const Button = styled.button`
    background-color: #fff;
    height: 40px;
    width: 100px;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    padding: 5px;
    text-align: center;
    justify-content: center;
    border-radius: 10px;
`

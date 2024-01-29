import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const EditContacto = () => {
    const navigate = useNavigate()
  return (
    <div>
        <Header title='CONTACTO'/>
        <EditContactoStyle>
            <Buttons onClick={() => navigate('/backoffice/Contacto/Editar')} >
                <FontAwesomeIcon className='Contacto' icon={faUser} />
                Editar Contacto
            </Buttons>
            <Buttons onClick={() => navigate('/backoffice/Contacto/Mensajes')}>
                <FontAwesomeIcon className='Mensajes' icon={faEnvelope} />
                Ver Mensajes
            </Buttons>
        
        </EditContactoStyle>
    </div>
  )
}

export default EditContacto

const EditContactoStyle = styled.div`
    width: 100%;
    height: 100%;
    background-color: #0a0a0a;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

const Buttons = styled.button`
    background-color: #fff;
    height: 300px;
    width: 300px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 5px;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    .Contacto{
        font-size: 10rem;
        color: #0a0a0a;
        margin-bottom: 20px;
    }
    .Mensajes{
        font-size: 10rem;
        color: #0a0a0a;
    }
`

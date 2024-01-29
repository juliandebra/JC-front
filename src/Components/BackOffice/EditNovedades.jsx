import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faFileImport } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const EditNovedades = () => {
    const navigate = useNavigate()
  return (
    <div>
        <Header title='NOVEDADES'/>
        <EditNovedadesStyle>
            <Buttons onClick={() => navigate('/backoffice/Novedades/Editar')} >
                <FontAwesomeIcon className='Novedades' icon={faFileAlt} />
                Editar Novedades
            </Buttons>
            <Buttons onClick={() => navigate('/backoffice/Novedades/Crear')}>
                <FontAwesomeIcon className='Mensajes' icon={faFileImport} />
                Crear Novedades
            </Buttons>
        
        </EditNovedadesStyle>
    </div>
  )
}

export default EditNovedades

const EditNovedadesStyle = styled.div`
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
    .Novedades{
        font-size: 10rem;
        color: #0a0a0a;
        margin-bottom: 20px;
    }
    .Mensajes{
        font-size: 10rem;
        color: #0a0a0a;
    }
`

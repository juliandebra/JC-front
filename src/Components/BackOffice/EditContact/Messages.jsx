import React from 'react'
import { getMessages, deleteMessage } from '../../../Service/publicApiService'
import Header from '../Header'
import Swal from 'sweetalert2'
import styled from 'styled-components'

const Messages = () => {

    const [messages, setMessages] = React.useState([])

    React.useEffect(() => {
        getMessages().then(res => {
            setMessages(res)
        })
    }, [])

    const confirmDelete = (id) => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "No podras revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrarlo!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                deleteMessage(id).then(() => {
                    setMessages(messages.filter(message => message.id !== id))
                    Swal.fire(
                        'Borrado!',
                        'El mensaje ha sido borrado.',
                        'success'
                    )
                })
            }
        })
    }

  return (
    <MessageWindow>
      <Header title='MENSAJES'/>
        <h1>Mensajes</h1>
        <>
            {messages.map(message => {
                return (
                    <div key={message.id} className='Mensajes'>
                        <h4>Nombre: {message.Nombre}</h4>
                        <p>Email: {message.Mail}</p> 
                        <p>Telefono: {message.Telefono}</p>
                        <section className='Mensaje'>
                            <h4>Mensaje: </h4><h5>{message.Mensaje}</h5>
                        </section>
                        <button onClick={() => confirmDelete(message.id)} className='eliminar'>Eliminar</button>
                    </div>
                )
            })}
            </>

    </MessageWindow>
  )
}

export default Messages


const MessageWindow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: #0a0a0a;

    .Mensajes{
        display: flex;
        flex-direction: column;
        width: 95%;
        height: 350px;
        border : 4px solid #000;
        background-color: #f5f5f5;
        border-radius: 10px;
        margin: 10px auto;
        padding: 10px 20px;
    }
    .Mensaje{
        width: 100%;
        height: 250px;
     }
    .eliminar{
        width: 100px;
        margin-right: 10px;
        margin-left: 10px;
        background-color: #383838;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
            background-color: red;
            color: white;
        }
    }
`


import React from 'react'
import { getContact, updateContact } from '../../../Service/publicApiService'
import Header from '../Header'
import styled from 'styled-components'

const EditContactForm = () => {
  
  const [contact, setContact] = React.useState({})

  React.useEffect(() => {
    getContact().then(data => {
      setContact(data[0])
    })
  }, [])

  return (
    <div>
      <Header title='EDITAR CONTACTO' />
      <FormStyles>
        <label>Editar Mail</label>
        <input type="text" placeholder="Mail" value={contact.Mail} onChange={(e) => setContact({...contact, Mail: e.target.value})} />
        <label>Editar Telefono</label>
        <input type="number" placeholder="Telefono" value={contact.Telefono} onChange={(e) => setContact({...contact, Telefono: e.target.value})} />
        <label>Editar Facebook</label>
        <input type="text" placeholder="Facebook" value={contact.Facebook} onChange={(e) => setContact({...contact, Facebook: e.target.value})} />
        <label>Editar Instagram</label>
        <input placeholder="Instagram" value={contact.Instagram} onChange={(e) => setContact({...contact, Instagram: e.target.value})}></input>
        <button className='btn' onClick={() => updateContact(contact.id, contact)}>Actualizar</button>
      </FormStyles>
     
    </div>
  )
}

export default EditContactForm

const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #0a0a0a;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  input {
    width: 300px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #fff;
    padding: 0 10px;
    margin-bottom: 20px;
    color: #000;
    font-size: 1.2rem;
    &:focus {
      outline: none;
    }
  }
  label {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  .btn {
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
            background-color: blue;
            color: white;
        }
  }
`

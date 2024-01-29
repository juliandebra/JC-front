import React, { useState } from 'react'
import Header from '../Header/Header'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CartState } from '../../Context';
import MercadoPagoModal from './MercadoPago/MercadoPagoModal'
import { createVenta, getNotifiaciones, updateNotificacion } from '../../Service/publicApiService'
import { deviceW, deviceH } from '../Breakpoints'

import styled from 'styled-components'

const validate = values => {
    const errors = {};
          if (!values.email) {
            errors.email = 'Campo obligatorio';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Direccion Invalida';
          } 
          if (!values.direccion) {
            errors.direccion = 'Campo obligatorio';
          }  else if (values.direccion.length < 2) {
            errors.direccion = 'Direccion Invalida!';
          } 
          if (!values.ciudad) {
            errors.ciudad = 'Campo obligatorio';
          }  else if (values.ciudad.length < 2) {
            errors.ciudad = 'Ciudad Invalida!';
          }
          if (!values.telefono) {
            errors.telefono = 'Campo obligatorio';
          }  else if (values.telefono.length < 10) {
            errors.telefono = 'Telefono Invalido!';
          }
          if (!values.name) {
            errors.name = 'Campo obligatorio';
          }  else if (values.name.length < 8) {
            errors.name = 'Nombre Invalido!';
          }
          if (!values.codigoPostal) {
            errors.codigoPostal = 'Campo obligatorio';
          }  else if (values.codigoPostal.length < 4) {
            errors.codigoPostal = 'Codigo Postal Invalido!';
          }
          if (values.provincia === '') {
            errors.provincia = 'Campo obligatorio';
          }

          return errors;
        }

const Payment = () => {

    const { cart, total, formatPeso, setUserData } = CartState()
    const [notificacion, setNotificacion] = React.useState([])
    const [bought, setBought] = useState(true)

    React.useEffect(() => {
        getNotifiaciones().then(data => {
            setNotificacion(data[0])
        })
    }, [])

    let userData = {
        name: '',   // sin numeros ni caracteres especiales, minimo 4 caracteres
        email: '',
        telefono: '', 
        direccion: '', 
        ciudad: '',
        provincia: '',
        codigoPostal: '', 
    }
    const [validationSuccess, setValidationSuccess] = React.useState(false)

    return (
        <Formik
            initialValues={userData}
            validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            setValidationSuccess(true)
            setUserData(values)
            if(bought) {
              setBought(false)
              createVenta({cart, values, total})
            }
            setNotificacion({
                ...notificacion,
                Compras: notificacion.Compras++
            })
            updateNotificacion(notificacion.id, notificacion)
          }, 400);
          
        }}
        >
        {({ isSubmitting }) => (
            <FormStyle>
              <Header/>
              <PayWindow>
                <Title>Datos de compra</Title>
                <Inputs>
                  <div className="form-group">
                    <div className="form-group1">
                      <label>Nombre y Apellido *</label>
                      <Field type="text" name="name" />
                      <ErrorMessage name="name" component="div" style={{color: 'red'}} />

                      <label>Correo Electronico *</label>
                      <Field type="email" name="email" />
                      <ErrorMessage name="email" component="div" style={{color: 'red'}}/>

                      <label>Telefono *</label>
                      <Field type="number" name="telefono" />
                      <ErrorMessage name="telefono" component="div" style={{color: 'red'}}/>
                    </div>
                    <div className="form-group2">
                      <label>Direccion *</label>
                      <Field type="text" name="direccion" />
                      <ErrorMessage name="direccion" component="div" style={{color: 'red'}}/>

                      <label>Ciudad *</label>
                      <Field type="text" name="ciudad" />
                      <ErrorMessage name="ciudad" component="div" style={{color: 'red'}}/>

                      <label>Provincia *</label>
                      <Field as="select" name="provincia" >
                          <option value="">Seleccione una provincia</option>
                          <option value="Buenos Aires">Buenos Aires</option>
                          <option value="Catamarca">Catamarca</option>
                          <option value="Chaco">Chaco</option>
                          <option value="Chubut">Chubut</option>
                          <option value="Córdoba">Córdoba</option>
                          <option value="Corrientes">Corrientes</option>
                          <option value="Entre Ríos">Entre Ríos</option>
                          <option value="Formosa">Formosa</option>
                          <option value="Jujuy">Jujuy</option>
                          <option value="La Pampa">La Pampa</option>
                          <option value="La Rioja">La Rioja</option>
                          <option value="Mendoza">Mendoza</option>
                          <option value="Misiones">Misiones</option>
                          <option value="Neuquén">Neuquén</option>
                          <option value="Río Negro">Río Negro</option>
                          <option value="Salta">Salta</option>
                          <option value="Santa Cruz">Santa Cruz</option>
                          <option value="SFSanta Fe">Santa Fe</option>
                          <option value="Santiago del Estero">Santiago del Estero</option>
                          <option value="Tierra del Fuego">Tierra del Fuego</option>
                          <option value="Tucuman">Tucuman</option>
                      </Field>
                      <ErrorMessage name="provincia" component="div" style={{color: 'red'}}/>

                      <label>Codigo Postal *</label>
                      <Field type="number" name="codigoPostal" />
                      <ErrorMessage name="codigoPostal" component="div" style={{color: 'red'}}/>
                    </div>
                  </div>
                    <button type="submit" className='submit' disabled={isSubmitting}>
                        Pagar
                    </button>
                  
                  <h1>Total: {formatPeso(total)}</h1>

                  {validationSuccess && <MercadoPagoModal setValidationSuccess={setValidationSuccess}/>}
                </Inputs>
              </PayWindow>
            </FormStyle>
       )}
        
      </Formik>
    )
}

export default Payment

const FormStyle = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    box-shadow: none;
    border-radius: 0;
    font-size: 1.2rem;

    .form-group{
        display: flex;
        flex-direction: row;
    }
    .form-group1, .form-group2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 20px;
        border: none;
        background-color: transparent;
    }
    label {
        font-size: 1.5rem;
        margin-top: 30px;
        color: #0a0a0a
    }
    input, select {
        width: 80%;
        height: 3rem;
        border: none;
        border-bottom: 3px solid #ccc;
        padding: 0;
        background-color: transparent;
        box-shadow: none;
        border-radius: 0;
        font-size: 1.5rem;
        text-align: center;
    }

    .submit {
        min-width: 200px;
        height: 3rem;
        border: solid 3px #0a0a0a;
        border-radius: 5px;
        background-color: #f5f5f5;
        font-size: 1.5rem;
        color: #000;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 20px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
            border: solid 0px #f5f5f5;
            background-color: #e5e5e5;
            box-shadow: 0px 0px 5px #0a0a0a;
        }
      }
    @media ${deviceW.mobileS} and ${deviceH.mobileS} {
      .form-group{
        flex-direction: column;
      }
      .form-group1, .form-group2 {
        margin: 0px;
      }
      label {
        font-size: 1.2rem;
      }
      .input, select {
        font-size: 1.2rem;
      }
      .submit{
        font-size: 1.2rem;
        width: 100%;
      }
    } 
    @media ${deviceW.tabletS} and ${deviceH.tabletS} {
      .submit{
        width: 200px;
      }
      .form-group{
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
    @media ${deviceW.tabletL} and ${deviceH.tabletL} {
      .submit{
        width: 200px;
      }
      .form-group{
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
    @media ${deviceW.laptopL} and (min-height: 753px) {
      .submit{
        width: 200px;
      }
      .form-group{
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }

`

const PayWindow = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 0;
    align-items: center;
    width: 70%;
    min-height: 0px;
    background-color: #0a0a0a;
    padding: 10px;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #0a0a0a;
    border: 1px solid #0a0a0a; 
    text-align: center;
    animation: slide 1s both;
    @keyframes slide {
        from {
            height: 0px;
            margin-top: 0px;
        }
        to {
            min-height: 800px;
            margin-top: 2%;
        }
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS} {
        width: 90%;
    } 
    @media ${deviceW.tabletS} and ${deviceH.tabletS} {
      @keyframes slide {
        from {
            height: 0px;
            margin-top: 0px;
        }
        to {
            min-height: 600px;
            margin-top: 2%;
        }
    }
    }
    @media ${deviceW.laptopL} and (min-height: 753px) {
      @keyframes slide {
        from {
            height: 0px;
            margin-top: 0px;
        }
        to {
            min-height: 600px;
            margin-top: 2%;
        }
    }
    }
`

const Title = styled.div`
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #f5f5f5;
    position: relative;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000000;
    width: 100%;
    padding: 10px;
    z-index: 10;
    
    @media ${deviceW.mobileS} and ${deviceH.mobileS} {
        font-size: 1.5rem;
    }

`

const Inputs = styled.div`
    margin-top: 10px;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 10px;
    animation: cassetteslide 1s 1s  both;
    @keyframes cassetteslide {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    `
import React, { useEffect } from 'react'
import { useMercadopago } from 'react-sdk-mercadopago';
import './MercadoPago.css'
import axios from 'axios'

const Mercadopago = () => {

  const [preference, setPreference] = React.useState({})

  const mercadopago = useMercadopago.v2('APP_USR-d490cfc5-7353-4342-bf1f-d1bbdf28d6d3', {
    locale: 'es-AR',
    sandbox: true
  });
  // APP_USR-d490cfc5-7353-4342-bf1f-d1bbdf28d6d3
  // APP_USR-4576210767707316-122115-6ff85cb3e8b50bbda47a0af6be9cd861-18504467
  // 4576210767707316
  // 8rAnZ0wknbkgNVD5NI9zBOi3bU2Gnws1
  React.useEffect(() => {
    axios.get('http://localhost:5000/checkout/preference')
      .then(response => {
        setPreference(response.data)
      })
  }, [])
  
  useEffect(() => {
    if (mercadopago) {
        mercadopago.checkout({
            preference: {
                ...preference
            },
            render: {
                container: '.cho-container',
                label: 'Pagar con MercadoPago',
            }
        })
    }
  }, [mercadopago, preference])


  return (
    <div> 
       <div className="cho-container" />
    </div>
  )
}

export default Mercadopago





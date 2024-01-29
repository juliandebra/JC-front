import React, { useEffect, useState } from 'react'
import { createVenta, getNotifiaciones } from '../../Service/publicApiService'
import { useNavigate } from 'react-router-dom'

const PayDone = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const confirmVenta = () => { 
            setTimeout(() => {
                navigate('/')
            }, 1000)
        }
        confirmVenta()
    }, [navigate])

  return (
    <div>PayDone</div>
  )
}

export default PayDone
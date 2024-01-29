import React from 'react'
import Header from '..//Header'
import styled from 'styled-components'
import { getVentas, deleteVenta } from '../../../Service/publicApiService'
import { CartState } from '../../../Context'
import Swal from 'sweetalert2'

const Ventas = () => {

    const { formatPeso } = CartState()

    const [ventas, setVentas] = React.useState([])

    React.useEffect(() => {
        getVentas().then(data => {
            setVentas(data)
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
                deleteVenta(id).then(() => {
                    setVentas(ventas.filter(venta => venta.id !== id))
                    Swal.fire(
                        'Borrado!',
                        'La venta ha sido eliminada.',
                        'success'
                    )
                })
            }
        })
    }

  return (
    <VentaWindow>
        <Header title='VENTAS'/>
        <>
            {ventas && ventas.map(venta => {
                return (
                    <VentaSlot key={venta.id}>
                        <div className='Datos'>
                            <h2>Datos del cliente</h2>
                            <p>Nombre: {venta.values?.name}</p>
                            <p>Email: {venta.values?.email}</p>
                            <p>Telefono: {venta.values?.telefono}</p>
                            <p>Dirección: {venta.values?.direccion}, {venta.values?.ciudad}, {venta.values?.provincia}, Argentina - {venta.values?.codigoPostal} </p>
                            <button className='eliminar' onClick={() => confirmDelete(venta.id)}>Eliminar venta</button>
                        </div>
                        <div >
                            <h2>Productos</h2>
                            
                            <ul className='Productos'>
                                {venta && venta.cart.map(product => {
                                    return (
                                        <div key={product.id} className='Producto'>
                                            <p><img src={product.Imagen1} alt='' style={{width: '150px', height: '150px'}}/></p>
                                            <h4>{product.Album} - {product.Artista}</h4>
                                            <h5>{formatPeso(product.Precio)}</h5>
                                            <h6>ID: {product.ID}</h6>
                                            
                                        </div>
                                    )
                                })}
                            </ul>
                        </div>
                    </VentaSlot>
                )
            })}
            </>
    </VentaWindow>
  )
}

export default Ventas

const VentaSlot = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 450px;
    border : 4px solid #000;
    border-radius: 10px;
    margin: 10px auto;
    background-color: #f5f5f5;

    .Datos{
        display: flex;
        flex-direction: column;
        float: left;
        width: 25%;
        margin: 10px;
        padding-right: 20px;
        border-right: 2px solid #000;
    }
    .Productos{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .Producto{
        width: 250px;
        height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
        border: 2px solid #000;
        border-radius: 10px;
    }
    h2{
        margin-top: 10px;
    }
    h4{
        font-size: 1.2rem;
        font-weight: bold;
        margin-top: 10px;
        collapse: true;
        text-align: center;
    }
    .eliminar{
        width: 150px;
        margin-right: 10px;
        margin-left: 10px;
        margin-top: 10px;
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

const VentaWindow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: #0a0a0a;
`
import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import { getProducts } from '../../../Service/publicApiService'
import CreateForm from "./CreateForm"
import TableMui from "./TableMui"

const Libros = () => {
    const [libros, setLibros] = React.useState([])
    const product = 'libros'
    const [showCreate, setShowCreate] = React.useState(false)

    React.useEffect(() => {
        getProducts(product).then(data => {
            setLibros(data)
        })
    }, [])

  return (
    <div>
        <Header title='LIBROS'/>
        <EditCD showCreate={showCreate}>
        <button onClick={() => setShowCreate(!showCreate)} >{showCreate ? 'Cerrar Formulario' : 'Crear Libro'} </button>
          {showCreate &&  <CreateForm product={product}/>}
        </EditCD>

        <TableMui items={libros} setItems={setLibros} product={product} />

    </div>
  )
}

export default Libros

const EditCD = styled.div`
    color: #fff;
    background-color: #000;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    transition: 1s;
    color: #FFFFFF;
    text-align: center;

    ${({ showCreate }) => showCreate && `
        height: 900px;
    `}

    button {
        width: 150px;
        height: 50px;
        color: #fff;
        background-color: goldenrod;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`

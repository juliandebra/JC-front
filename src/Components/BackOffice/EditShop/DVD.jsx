import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import { getProducts } from '../../../Service/publicApiService'
import CreateForm from "./CreateForm"
import TableMui from "./TableMui"


const DVD = () => {
    const [dvds, setDvds] = React.useState([])
    const product = 'dvd'
    const [showCreate, setShowCreate] = React.useState(false)

    React.useEffect(() => {
        getProducts(product).then(data => {
            setDvds(data)
        })
    }, [])

  return (
    <div>
        <Header title='DVD'/>
        <EditDVD showCreate={showCreate}>
        <button onClick={() => setShowCreate(!showCreate)} >{showCreate ? 'Cerrar Formulario' : 'Crear DVD'} </button>
        {showCreate &&  <CreateForm product={product}/>}
        </EditDVD>

        <TableMui items={dvds} setItems={setDvds} product={product}  />

    </div>
  )
}

export default DVD

const EditDVD = styled.div`
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

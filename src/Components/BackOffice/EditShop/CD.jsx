import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import { getProducts } from '../../../Service/publicApiService'
import CreateForm from "./CreateForm"
import TableMui from "./TableMui"

const CD = () => {
    const [cds, setCds] = React.useState([])
    const product = 'cd'
    const [showCreate, setShowCreate] = React.useState(false)

    React.useEffect(() => {
        getProducts(product).then(data => {
            setCds(data)
        })
    }, [])

  return (
    <div>
        <Header title='CD'/>
        <EditCD showCreate={showCreate}>
           <button onClick={() => setShowCreate(!showCreate)} >{showCreate ? 'Cerrar Formulario' : 'Crear CD'} </button>
          {showCreate &&  <CreateForm product={product}/>}
        </EditCD>
        <TableMui items={cds} setItems={setCds} product={product}  />
    </div>
  )
}

export default CD

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

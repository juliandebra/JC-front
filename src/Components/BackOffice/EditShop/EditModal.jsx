import React from 'react'
import styled from 'styled-components'
import { updateProduct } from '../../../Service/publicApiService'

const EditModal = ({itemEdit, setItemEdit, setEdit, product}) => {

  return (
    <EditModalStyle>
          <tr key={itemEdit.id}>
            <td>
              <input type="number" value={itemEdit.ID} 
              onChange={(e) => setItemEdit( {...itemEdit, ID: e.target.value} )} />
            </td>
            <td>
              <input type="text" value={itemEdit.Artista} 
              onChange={(e) => setItemEdit( {...itemEdit, Artista: e.target.value} ) } />
            </td>
            <td>
              <input type="text" value={itemEdit.Album} 
              onChange={(e) => setItemEdit( {...itemEdit, Album: e.target.value} )} />
            </td>
            <td>
              <input type="number" value={itemEdit.Año} 
              onChange={(e) => setItemEdit( {...itemEdit, Año: e.target.value} )} />
            </td>
            <td>
              <input type="number" value={itemEdit.Precio} 
              onChange={(e) => setItemEdit( {...itemEdit, Precio: e.target.value} )} />
            </td>
            <td>
              <input type="checkbox" checked={itemEdit.Stock} 
              onChange={(e) => setItemEdit( {...itemEdit, Stock: e.target.value} )} />
            </td>
            <td>
              <input type="text" value={itemEdit.Genero} 
              onChange={(e) => setItemEdit( {...itemEdit, Genero: e.target.value} )} />
            </td>
            <td>
              <textarea value={itemEdit.Descripcion} 
              onChange={(e) => setItemEdit( {...itemEdit, Descripcion: e.target.value} )} />
              </td>
            <td>
              <input type="text" value={itemEdit.Tags} 
              onChange={(e) => setItemEdit( {...itemEdit, Tags: e.target.value} )} />
            </td>
            <td>
              <button onClick={() => {
                setEdit(false)
                setItemEdit(null)
              }
              }>Cancelar</button>
              <button onClick={() => {
                updateProduct(itemEdit.id, itemEdit, product)
                setEdit(false)
                setItemEdit(null)
              }
              }>Guardar</button>
            </td>
          </tr> 
          </EditModalStyle>
  )
}

export default EditModal

const EditModalStyle = styled.section`
  position: fixed;
  bottom: 0;
  width: 100%;
  background : gray;
`
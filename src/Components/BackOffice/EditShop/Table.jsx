import React from 'react'
import { deleteProduct } from '../../../Service/publicApiService'
import Swal from 'sweetalert2'
import EditModal from './EditModal'

const Table = ({items, product, setItems}) => {
  const [itemTable, setItemTable] = React.useState(items)
  const [ itemEdit, setItemEdit ] = React.useState({
    ID: '',
    Album: '',
    Artista: '',
    Año: '',
    Stock: false,
    Genero: '',
    Descripcion: '',
    Precio: '',
    Imagen: [],
    Tags: '',
  })

  const [edit, setEdit] = React.useState(false)

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
        deleteProduct(id, product)
        Swal.fire(
          'Borrado!',
          'El producto ha sido borrado.',
          'success'
        )
        setItems(items.filter(item => item.id !== id))
      }
    })
  }

  const [search, setSearch] = React.useState(false)
  const searchByAlbum = (e) => {
    setSearch(true)
    setItemTable(items.filter(item => item.Album.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  const searchByArtist = (e) => {
    setSearch(true)
    setItemTable(items.filter(item => item.Artista.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  const searchByStock = (e) => {
    if(e.target.value === '0'){
      setItemTable(items)
    }else if (e.target.value === '1'){
      setSearch(true)
      setItemTable(items.filter(item => item.Stock === true))
    }else if (e.target.value === '2'){
      setSearch(true)
      setItemTable(items.filter(item => item.Stock === false))
    }
  }

  return (
    <div>
      <input type="search" placeholder="Buscar por Album"  onChange={(e) =>{ searchByAlbum(e)}}  />
      <input type="search" placeholder="Buscar por Artista"  onChange={(e) =>{ searchByArtist(e)}}  />
      <select type="select" placeholder="Buscar por Genero"  onChange={(e) =>{ searchByStock(e)}}  >
            <option value={'0'} >Todos</option>
            <option value={'1'}>Sí</option>
            <option value={'2'}>No</option>
      </select>

        <table>
            <tr>
              <th>Imagen</th>
              <th>ID</th>
              <th>Artista</th>
              <th>Album</th>
              <th>Año</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Genero</th>
              <th>Descripcion</th>
              <th>Tags</th>
              <th>Acciones</th>
            </tr>

            {itemTable.map(item => (
              <tr key={item.id}>
                <td><img src={item.Imagen} alt="Imagen" style={{width:'50px', height: '50px'}}/></td>
                <td>{item.ID}</td>
                <td>{item.Artista}</td>
                <td>{item.Album}</td>
                <td>{item.Año}</td>
                <td>{item.Precio}</td>
                <td>{item.Stock ? 'Sí' : 'No'}</td>
                <td>{item.Genero}</td>
                <td>{item.Descripcion}
                  </td>
                <td>{item.Tags}</td>
                <td>
                  <button onClick={() => {
                    setItemEdit(item)
                    setEdit(true)
                  }}>EDITAR</button>
                  <button onClick={() => confirmDelete(item.id)}>ELIMINAR</button>
                </td>
              </tr>
            ))}
            
            {!search && items.map(item => (
              <tr key={item.id}>
                <td><img src={item.Imagen} alt='' style={{width:'50px', height: '50px'}}/></td>
                <td>{item.ID}</td>
                <td>{item.Artista}</td>
                <td>{item.Album}</td>
                <td>{item.Año}</td>
                <td>{item.Precio}</td>
                <td>{item.Stock ? 'Sí' : 'No'}</td>
                <td>{item.Genero}</td>
                <td>{item.Descripcion}</td>
                <td>{item.Tags}</td>
                <td>
                    <button onClick={() => {
                      setItemEdit({...item, id: item.id})
                      setEdit(true)
                    }}>EDITAR</button>
                    <button onClick={() => confirmDelete(item.id)}>ELIMINAR</button>
                </td>
              </tr>
            ))}

            {edit && 
              <EditModal
                itemEdit={itemEdit}
                setItemEdit={setItemEdit}
                setEdit={setEdit} 
                product={product}
              />}
        </table>
    </div>
  )
}

export default Table


//Para la descripcion, buscar acerca de ellipsis 




import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Swal from 'sweetalert2'
import { deleteProduct } from '../../../Service/publicApiService'
import  EditModal  from './EditModal'

const DataTable = ({items, product, setItems}) => {
  const [itemTable, setItemTable] = React.useState(items)
  const [loading, setLoading] = React.useState(true)
  const [ itemEdit, setItemEdit ] = React.useState({
    ID: '',
    Album: '',
    Artista: '',
    Año: '',
    Stock: false,
    Genero: '',
    Descripcion: '',
    Precio: '',
    Tags: '',
  })
  const [edit, setEdit] = React.useState(false)

  const columns = [
    { field: 'ID', headerName: 'ID', width: 30, align: 'center', },
    { field: 'Album', headerName: 'Album', width: 200  },
    { field: 'Artista', headerName: 'Artista', width: 130 },
    {
      field: 'Precio',
      headerName: 'Precio',
      type: 'number',
      width: 70,
    },
    {
      field: 'Año',
      headerName: 'Año',
      width: 60,
    },
    { field: 'Genero', headerName: 'Genero', width: 130  },
    { field: 'Stock', headerName: 'Stock', width: 50, align: 'center', renderCell: (row) => <>{row ? 'SI' : 'NO'}</> },
    { field: 'Imagen1', headerName: 'Imagen', width: 70, renderCell: (params) => <img src={params.value} alt='' style={{width:'50px', height: '50px'}} />, },
    { field: 'Tags', headerName: 'Tags', width: 400  },
    { field: 'Descripcion', headerName: 'Descripcion', width: 400  },
    { field: 'Acciones', headerName: 'Acciones', width: 150, renderCell: (params) => <>{deleteButton(params)}{editButton(params)}</> },
  ];
  
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

  const deleteButton =  (params) =>{
    let id = params.row.id
    return(
      <button onClick={() => {
        Swal.fire({
          title: '¿Estás seguro?',
          text: '¡No podrás revertir esto!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '¡Sí, eliminar!',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.value) {
            Swal.fire({
              title: 'Eliminando...',
            })
            Swal.showLoading()
            setTimeout(() => {
              deleteProduct(id, product)
              setItems(items.filter(item => item.id !== params.id))
            }, 500)
          }
        })
      } }>Eliminar</button>
  )}
  const editButton = (params) =>{
    return(
      <button onClick={() => {
        setItemEdit(params.row)
        setEdit(true)
      }}>Editar</button>
    )
  }

  React.useEffect(() => {
    setInterval(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div style={{ height: 600, width: '100%' }}>
      <input type="search" placeholder="Buscar por Album"  onChange={(e) =>{ searchByAlbum(e)}}  />
      <input type="search" placeholder="Buscar por Artista"  onChange={(e) =>{ searchByArtist(e)}}  />
      <select type="select"  onChange={(e) =>{ searchByStock(e)}}  >
            <option value={'0'} >Todos</option>
            <option value={'1'}>Sí</option>
            <option value={'2'}>No</option>
      </select>
      {search ? 
      <DataGrid
        rows={itemTable}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        sx={{	
          overflow: 'auto',
        }}
      /> :
      <DataGrid
        rows={items}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        loading = {loading}
      />}
      {edit && 
              <EditModal
                itemEdit={itemEdit}
                setItemEdit={setItemEdit}
                setEdit={setEdit} 
                product={product}
              />}
      </div>
    
  );
}


export default DataTable;
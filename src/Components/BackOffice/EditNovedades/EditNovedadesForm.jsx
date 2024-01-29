import React from 'react'
import Header from '../Header'
import { getNovedades, deleteNovedades } from '../../../Service/publicApiService'
import EditNovedadModal from './EditNovedadModal'
import Swal from 'sweetalert2'
import styled from 'styled-components'

const EditNovedadesForm = () => {
    const [novedades, setNovedades] = React.useState(null)
    const [novedadEdit, setNovedadEdit] = React.useState({})
    const [edit, setEdit] = React.useState(false)

    React.useEffect(() => {
        getNovedades().then(data => {
            setNovedades(data)
        })
    }, [])
 
    const confirmDelete = (id) => {
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
                    deleteNovedades(id)
                    Swal.fire({
                        title: 'Eliminado correctamente',
                        icon: 'success',
                        timer: 500
                    })
                    setNovedades(novedades.filter(novedad => novedad.id !== id))
                }, 500)
            }
        })
    }


  return (
    <div>
        <Header title='EDITAR NOVEDADES'/>
        <NewsWindow>

        {novedades && novedades.map(novedad => (
            <NewWindow key={novedad.id}>
                <h2>{novedad.Titulo}</h2>
                <p>{novedad.Subtitulo}</p>
                <p>{novedad.Url}</p>
                <img src={novedad.Imagen} alt='' style={{width: '400px', height: '200px', objectFit: 'cover'}}/>
                <section>
                <button onClick={() => {
                    setNovedadEdit(novedad)
                    setEdit(true)
                }}>Editar</button>
                <button onClick={() => confirmDelete(novedad.id)}>Eliminar</button>
                </section>
            </NewWindow>
        ))}
    </NewsWindow>
    <EditSection>
        {edit && <EditNovedadModal 
                    setEdit={setEdit} 
                    novedadEdit={novedadEdit} 
                    setNovedadEdit={setNovedadEdit}
                />
            }
    </EditSection>
    </div>
  )
}

export default EditNovedadesForm

const NewsWindow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: #0a0a0a;
`

const NewWindow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 500px;
    height: 600px;
    border : 4px solid #000;
    padding: 10px;
    border-radius: 10px;
    margin: 10px auto;
    background:linear-gradient(to right, goldenrod, #FCF6BA, goldenrod);

    button{
        margin: 10px;
        padding: 10px;
        border: 2px solid #000;
        border-radius: 10px;
        background-color: #0a0a0a;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.5s;
        
        &:hover{
            background-color: #fff;
            color: #000;
            border: 2px solid #000;
            transform: scale(1.1);
            
        }
    }
`

const EditSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`



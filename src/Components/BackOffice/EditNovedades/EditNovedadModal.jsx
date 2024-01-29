import React from 'react'
import { updateNovedades, getImages } from '../../../Service/publicApiService'
import Swal from 'sweetalert2'
import {Formik, Form, Field } from 'formik'
import styled from 'styled-components'

const EditNovedadModal = ({setEdit, novedadEdit, setNovedadEdit}) => {

    const [isUploading, setIsUploading] = React.useState(false)
    const [isLoaded, setIsLoaded] = React.useState(false)
    const product = 'Novedades'

    React.useEffect(() => {
        if(isUploading){
            setTimeout(() => {
            Swal.fire({
                title: 'Actualizando banner...',
            })
            Swal.showLoading()
            setIsLoaded(true)
        }, 1000)
        }
        if (isLoaded) {
            setTimeout(() => {
                updateNovedades(novedadEdit.id, novedadEdit)
            }, 500)
            setIsLoaded(false)
        }
    }, [isUploading, isLoaded, novedadEdit, setEdit, setNovedadEdit]);



    const confirmUpdate = (values, id) => {
        // e.preventDefault()
        Swal.fire({
            title: '¿Estás seguro?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, editar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                setTimeout( async () => {
                    await getImages(values.file, product).then(() => {
                        setNovedadEdit({
                            ...novedadEdit,
                            ...values
                        })
                        Swal.fire({
                            title: 'Imagen subida correctamente',
                            icon: 'success',
                            timer: 500
                        })
                    setIsUploading(true)
                })}, 3000)
            }
        })
    }


  return (
    <Formik initialValues={novedadEdit}
        onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            confirmUpdate(values, novedadEdit.id)
        }}
    >
        {({values, handleChange, setFieldValue, isSubmitting}) => (
            <FormStyle key={novedadEdit.id}>
                <div className="form-group">
                    <label>Titulo</label>
                    <Field type="text" name='Titulo' className="form-control" value={values.Titulo} 
                    onChange={handleChange}
                    />
                    <label>Subtitulo</label>
                    <Field type="text" name='Subtitulo' className="form-control" value={values.Subtitulo} 
                    onChange={handleChange}
                    />
                    <label>Url</label>
                    <Field type="text" name='Url' className="form-control" value={values.Url} 
                    onChange={handleChange}
                    />
                    <button className='btn' type='submit' disabled={isSubmitting} >Actualizar</button>
                    <button className='btn' onClick={() => setEdit(false)}>Cancelar</button>
                </div>
            </FormStyle> 
        )}
    </Formik>
  )
}

export default EditNovedadModal


const FormStyle = styled(Form)`
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    background-color: #383838;
    box-shadow: 0px 0px 10px rgb(0, 0, 0);
    position: fixed;
    bottom: 0;
    color: white;   
   

    .form-group{
        width: 1000px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    label{
        color: white;
        font-size: 20px;
        margin-right: 10px;
        margin-left: 10px;
    }

    .btn {
        margin-right: 10px;
        margin-left: 10px;
        background-color: #383838;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
            background-color: #3085d6;
            color: white;
            
        }
    }
    `
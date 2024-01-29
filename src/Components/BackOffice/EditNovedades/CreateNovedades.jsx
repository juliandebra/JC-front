import React from 'react'
import Header from '../Header'
import { Formik, Form, Field } from 'formik'
import { uploadImage, getImages, createNovedades } from '../../../Service/publicApiService'
import Swal from 'sweetalert2'
import styled from 'styled-components'
import Footer from '../../Footer/Footer'

const CreateNovedades = () => {
    const [newNovedad, setNewNovedad] = React.useState({
        ID: '',
        Titulo: '',
        Subtitulo: '',
        Imagen: [],
        Url: '',
        file: null
    })
    const [submit, setSubmit] = React.useState(false)	
    const [loaded, setLoaded] = React.useState(false)



    React.useEffect(() => {
        if(submit){
            setSubmit(false)
            setTimeout(() => {
                Swal.fire({
                    title: 'Creando novedad...',
                })
                Swal.showLoading()
                setLoaded(true)
            }, 1000)
        }
        if (loaded) {
            setTimeout(() => {
                createNovedades(newNovedad)
            }, 500)
            setLoaded(false)
        }
    }, [submit, newNovedad, loaded])
  return (
    <Formik 
        initialValues={newNovedad}
        onSubmit={ async (values, { setSubmitting }) => {
            setSubmitting(false);
            uploadImage(values.file, 'novedades')
            Swal.fire({
                title: 'Subiendo Imagen...',
            })
            Swal.showLoading()
            setTimeout( async () => {
                await getImages(values.file, 'novedades').then(res => {
                    setNewNovedad({
                        ...values,
                        Imagen: res,
                        file: null
                    })
                })
                setSubmit(true)
            }, 2000)
           
        }}
    >
        
    {({ values, handleChange, setFieldValue, isSubmitting }) => (
        <FormStyle>
            <Header title='CREAR NOVEDADES'/>
            <div className="form-group">
                <label htmlFor="Titulo">Titulo</label>
                <Field type="text" name="Titulo" className="form-control" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="Subtitulo">Subtitulo</label>
                <Field type="text" name="Subtitulo" className="form-control" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="file">Imagen</label>
                <input type="file" className="form-control" onChange={e => setFieldValue('file', e.target.files[0])} />
            </div>
            <div className="form-group">
                <label htmlFor="file">URL</label>
                <input type="text" name="Url" className="form-control" onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Crear</button>
            <Footer/>
        </FormStyle>
    )}
    </Formik>
  )
}

export default CreateNovedades

const FormStyle = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #000;
    transition: 1s;
    color: #FFFFFF;
    text-align: center;

    .form-group {
        width: 25%;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }


    button {
        width: 150px;
        height: 50px;
        color: #fff;
        background-color: goldenrod;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 20px;
    }
`

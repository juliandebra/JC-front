import React, { useEffect } from 'react'
import ImagePreview from './ImagePreview'
import { Formik, Form, Field } from 'formik'
import { uploadImage, getImages, createProduct } from '../../../Service/publicApiService'
import Swal from 'sweetalert2'
import styled from 'styled-components'

const CreateForm = ({ product }) => {

    const [newItem, setNewItem] = React.useState({
        ID: '',
        Album: '',
        Artista: '',
        Año: '',
        Stock: false,
        Genero: '',
        Descripcion: '',
        Precio: '',
        Tags: '',
        FacebookURL: '',
        InstagramURL: '',
        Imagen1: '',
        Imagen2: '',
        Imagen3: '',
        Imagen4: '',
    })
    const [submit, setSubmit] = React.useState(false)	
    const [loaded, setLoaded] = React.useState(false)

    const validate = () => {}

    useEffect(() => {
        if(submit){
            setSubmit(false)
            setTimeout(() => {
                Swal.fire({
                    title: 'Creando producto...',
                })
                Swal.showLoading()
                setLoaded(true)
            }, 1000)
        }
        if (loaded) {
            setTimeout(() => {
                createProduct(newItem, product)
            }, 500)
            setLoaded(false)
        }
    }, [submit, newItem, loaded, product])

    return (
        <Formik
            initialValues={newItem}
            validate={validate}
            onSubmit={ async (values, { setSubmitting }) => {
                setSubmitting(false);
                uploadImage(values.Imagen1, product)
                if(values.Imagen2 !== ''){
                uploadImage(values.Imagen2, product)
                }
                if(values.Imagen3 !== ''){
                    console.log('entro')
                uploadImage(values.Imagen3, product)
                }
                if(values.Imagen4 !== ''){
                uploadImage(values.Imagen4, product)
                }
                Swal.fire({
                    title: 'Subiendo Imagenes...',
                })
                Swal.showLoading()
                setTimeout( async () => {
                    let images = []
                    await getImages(values.Imagen1, product).then(res => {
                        images.push(res)
                    })
                    if(values.Imagen2 !== ''){
                    await getImages(values.Imagen2, product).then(res => {
                        images.push(res)
                    })
                    }
                    if (values.Imagen3 !== '') {
                    await getImages(values.Imagen3, product).then(res => {
                        console.log(res)
                        images.push(res)
                    })
                    }
                    if (values.Imagen4 !== '') {
                    await getImages(values.Imagen4, product).then(res => {
                        images.push(res)
                    })
                    }
                    console.log(images)
                    setNewItem({
                        ...values,
                        Imagen1: images[0],
                        Imagen2: images[1] ? images[1] : '',
                        Imagen3: images[2] ? images[2] : '',
                        Imagen4: images[3] ? images[3] : '',
                    })

                    Swal.fire({
                        title: 'Subido!',
                        text: 'La imagen se ha subido correctamente',
                        type: 'success',
                        timer: 500
                    })
                    setSubmit(true)
                }, 3000)
                
            }}
        >

        {({ values, handleChange, setFieldValue, isSubmitting }) => (
            <FormStyle>
                <section className='Form-section'>
                    <section className='Input-group'>
                        <section>
                            <label>ID </label>
                            <Field type="number" name="ID" value={values.ID} onChange={handleChange}/>
                        </section>
                        <section>
                        <label>Artista </label>
                        <Field type="text" name="Artista" value={values.Artista} onChange={handleChange}/>
                        </section>
                        <section>
                            <label>Album </label>
                            <Field type="text" name="Album" value={values.Album} onChange={handleChange}/>
                        </section>
                    </section>
                    <section className='Input-group'>
                        <section>
                        <label> Genero </label>
                        <Field type="text" name="Genero" value={values.Genero} onChange={handleChange}/>
                        </section>
                        <section>
                        <label>Año </label>
                        <Field type="number" name="Año" value={values.Año} onChange={handleChange}/>
                        </section>
                        <section>
                        <label>Precio </label>
                        <Field type="number" name="Precio" value={values.Precio} onChange={handleChange}/>
                        </section>
                    </section>
                    
                    <section className='Input-group'>
                        <section>
                        <label>Tags </label>
                        <Field type="text" name="Tags" value={values.Tags} onChange={handleChange}/>
                        </section>
                       
                        <section>
                        <label>FacebookURL </label>
                        <Field type="text" name="FacebookURL" value={values.FacebookURL} onChange={handleChange}/>
                        </section>
                        <section>
                        <label> InstagramURL </label>
                        <Field type="text" name="InstagramURL" value={values.InstagramURL} onChange={handleChange}/>
                        </section>

                    </section>
                    <section className='Input-group'>
                    <label>Descripcion </label>
                        <textarea type="textarea" name="Descripcion" value={values.Descripcion} onChange={handleChange}/>
                    </section>
                </section>
                <section className='Image-group'>
                        <section className='Image-input'>
                            <section>
                                <label>Imagen 1 </label>
                                <input type="file" onChange={(event) => setFieldValue('Imagen1', event.target.files[0])}/>
                            </section>
                        <section className='image-section'>
                            {values.Imagen1 ? <ImagePreview file={values.Imagen1} /> : 'No hay imagen'  } 
                            </section>
                        </section>
                        <section className='Image-input'>
                            <section>
                                <label>Imagen 2 </label>
                                <input type="file" onChange={(event) => setFieldValue('Imagen2', event.target.files[0])}/>
                            </section>
                        <section className='image-section'>
                            {values.Imagen2 ? <ImagePreview file={values.Imagen2} /> : 'No hay imagen'  } 
                            </section>
                        </section>
                        <section className='Image-input'>
                            <section>
                                <label>Imagen 3 </label>
                                <input type="file" onChange={(event) => setFieldValue('Imagen3', event.target.files[0])}/>
                            </section>
                        <section className='image-section'>
                            {values.Imagen3 ? <ImagePreview file={values.Imagen3} /> : 'No hay imagen'  } 
                            </section>
                        </section>
                        <section className='Image-input'>
                            <section>
                                <label>Imagen 4 </label>
                                <input type="file" onChange={(event) => setFieldValue('Imagen4', event.target.files[0])}/>
                            </section>
                        <section className='image-section'>
                            {values.Imagen4 ? <ImagePreview file={values.Imagen4} /> : 'No hay imagen'  } 
                            </section>
                        </section>
                    </section>
                <button type="submit" disabled={isSubmitting}>
                    Crear producto
                </button>
                        
            </FormStyle>
            )}
        </Formik>
    )
}

export default CreateForm

const FormStyle = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #000;  
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 10px #ccc;
    animation: fadeIn 1s 0.4s both;
    .Form-section {
        display: flex;
        flex-direction: row;
    }
    .Input-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        border-radius: 5px;
        margin: 5px;
        min-height: 300px;
    }
    .Image-group {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        /* border: 4px solid #000000; */
        border-radius: 5px;
        margin: 5px;
        
    }
    .Image-input {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        margin: 5px;
        height: 300px;
        border: 4px solid #000000;
        border-radius: 5px;
    }
    input, textarea, select {
        width: 250px;
        height: 50px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        background-color: #fff;

        &:focus {
            outline: none;
        }
    }
    .check {
        width: 20px;
        height: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        background-color: #fff;
    }

    textarea{
        width: 300px ;
    }
    button {
        width: 150px;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin-top: 20px;
        &:hover {
            cursor: pointer;
        }
    }
    label {
        width: 100px;
        font-size: 20px;
        font-weight: bold;
        margin: 10px;
    }
    textarea {
        height: 300px;
    }
    .image-section{
        height: 200px;
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 4px solid #000;
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
        img{
            object-fit: cover;
        }
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    

`

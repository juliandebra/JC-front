import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc  } from 'firebase/firestore';
import { signInWithEmailAndPassword} from 'firebase/auth'
import db, { storage, auth } from '../FirebaseConfig';
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import Swal from 'sweetalert2';

export const obtainData = async (props) => {
    try {
        const data = await getDocs(collection(db, props))
        return data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'No se pudo obtener los productos',
            icon: 'error',
            confirmButtonText: 'Ok',
            timer: 2000
        })
    }
}

export const getProducts = async (product) => {
    try {
        const data = await getDocs(collection(db, product));
        return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'No se pudo obtener los productos',
            icon: 'error',
            confirmButtonText: 'Ok',
            timer: 2000
        })
    }
}

export const createProduct = async (newItem, product) => {
    try {
        Swal.fire({
            title: 'Producto agregado',
            text: 'El producto se ha agregado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000
            })
        await addDoc(collection(db, product), newItem);
        window.location.reload();
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'Revisa si los campos se rellenaron correctamente',
            })
    }
}

export const updateProduct = async (id, newItem, product) => {
    try {
        Swal.fire({
            title: 'Producto actualizado',
            text: 'El producto se ha actualizado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000
            })
        await updateDoc(doc(db, product, id), newItem);
        window.location.reload();
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'La edición no se ha podido realizar',
            })
    }
}

export const deleteProduct = async (id, product) => {
    try {
        Swal.fire({
            title: 'Producto eliminado',
            text: 'El producto se ha eliminado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000
        })
        await deleteDoc(doc(db, product, id));
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'El producto no se ha podido eliminar',
            })
    }
}

export const uploadImage = async (image, product) => {
    try { 
        const storageRef = ref(storage, `${product}/${image.name}`);
        uploadBytes(storageRef, image);
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'La imagen no se ha podido subir',
            })
    }
}

export const getImages = async (image, product) => {
    try {
        let imageURL
        const storageRef = ref(storage, `${product}/${image.name}`);
        await getDownloadURL(storageRef).then(url => {
            imageURL = url
            })
        return imageURL;
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'No se ha podido acceder a la imagen',
            })
    }
}

export const getContact = async () => {
    try {
        const data = await getDocs(collection(db, 'contacto'));
        return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'No se ha podido acceder a los mensajes',
            })
    }
}

export const updateContact = async (id, newData) => {
    try {
        Swal.fire({
            title: 'Contacto actualizado',
            text: 'El contacto se ha actualizado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000
            })
        await updateDoc(doc(db, 'Contacto', id), newData);
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'La edición no se ha podido realizar',
            })
    }
}

export const getMessages = async () => {
    try {
        const data = await getDocs(collection(db, 'mensajes'));
        return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'No se pudo obtener los mensajes',
            icon: 'error',
            confirmButtonText: 'Ok',
            timer: 2000
        })
    }
}

export const deleteMessage = async (id) => {
    try {
        await deleteDoc(doc(db, 'mensajes', id));
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'El mensaje no se ha podido eliminar',
            })
    }
}

export const publicMessage = async (newMessage) => {
    try {
        Swal.fire({
            title: 'Mensaje enviado',
            text: 'El mensaje se ha enviado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000
            })
        await addDoc(collection(db, 'mensajes'), newMessage);
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'El mensaje no se ha podido enviar',
            })
    }
}

export const getNovedades = async () => {
    try {
        const data = await getDocs(collection(db, 'novedades'));
        return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'No se pudo obtener las novedades',
            icon: 'error',
            confirmButtonText: 'Ok',
            timer: 2000
        })
    }
}

export const createNovedades = async (newData) => {
    try {
        Swal.fire({
            title: 'Novedad creada',
            text: 'La novedad se ha creado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000
            })
        await addDoc(collection(db, 'novedades'), newData);
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'La novedad no se ha podido crear',
            })
    }
}

export const updateNovedades = async (id, newData) => {
    try {
        Swal.fire({
            title: 'Novedad actualizada',
            text: 'La novedad se ha actualizado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000
            })
        await updateDoc(doc(db, 'novedades', id), newData);
        window.location.reload()
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'La edición no se ha podido realizar',
            })
    }
}

export const deleteNovedades = async (id) => {
    try {
        await deleteDoc(doc(db, 'novedades', id));
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'La novedad no se ha podido eliminar',
            })
    }
}

export const getVentas = async () => {
    try {
        const data = await getDocs(collection(db, 'compras'));
        return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    }
    catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'No se pudo obtener las ventas',
            icon: 'error',
            confirmButtonText: 'Ok',
            timer: 2000
        })
    }
}

export const createVenta = async (newData) => {
    try {
        addDoc(collection(db, 'compras'), newData);
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'La compra no se ha podido realizar',
            })
    }
}

export const deleteVenta = async (id) => {
    try {
        await deleteDoc(doc(db, 'compras', id));
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'La compra no se ha podido eliminar',
            })
    }
}

export const getNotifiaciones = async () => {
    try {
        const data = await getDocs(collection(db, 'notificaciones'));
        return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    }
    catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'No se pudo obtener las notificaciones',
            icon: 'error',
            confirmButtonText: 'Ok',
            timer: 2000
        })
    }
}

export const updateNotificacion = async (id, newData) => {
    try {
        await updateDoc(doc(db, 'notificaciones', id), newData);
    }
    catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'La notificación no se ha podido actualizar',
            })
    }
}

export const verifyUser = async (email, password) => {
    try{
        const user = await signInWithEmailAndPassword(auth, email, password)
        localStorage.setItem('user', user)
        window.location.href = '/backoffice'
    }
    catch(error){
    }
}

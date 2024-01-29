import Swal from 'sweetalert2'
import Header  from '../Header/Header'

const PayDenied = () => {

    Swal.fire({
        title: 'No hay productos en el carrito',
        text: 'Por favor agregue productos al carrito',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
    })
    return (
        <>
            <Header/>
        </>
    )
}

export default PayDenied
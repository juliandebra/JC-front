
const DeniedPay = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    let confirmPay = cart.length === 0 
    return confirmPay 
}

export default DeniedPay
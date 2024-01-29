import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import { CartState } from '../../Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTimes  } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import axios from 'axios'
import { deviceW, deviceH } from '../Breakpoints'

import styled from 'styled-components'

const CartWidget = () => {

    const navigate = useNavigate();

    const { items, deleteItem, formatPeso, total, setPayError } = CartState() 
    let cartItems = localStorage.getItem('cart')
    const [cartList, setCartList] = React.useState(cartItems ? JSON.parse(cartItems) : [])

    React.useEffect(() => {
        setCartList(cartItems ? JSON.parse(cartItems) : [])
    }, [cartItems])

    const  confirmDelete = (ID) => {
        deleteItem(ID)
        setCartList(cartList.filter(item => item.ID !== ID))
        if(cartList.length === 0) {
            setPayError(false)
        }
        Swal.fire({
            type: 'success',
            title: 'Producto eliminado',
            text: 'El producto se ha eliminado del carrito'
        })

    }
  return (
    <Dropdown onClick={() => setCartList(cartItems ? JSON.parse(cartItems) : [])}>
        <DropDown>
            <FAIcon 
            style={{marginRight: '5px'}} 
            icon={faShoppingCart} />
            { items !== 0 && items}
        </DropDown>

        <Dropdown.Menu style={{ minWidth: 500}}>
            
            <Menu>
                {cartList.length > 0 ? 
                    cartList.map (item => (
                        <section key={item.id}>
                            <span className='close'>
                                <Button onClick={() =>  confirmDelete(item.ID)}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </Button>
                            </span>
                            <span className='img-span'>
                                <img src={item.Imagen1} alt={item.name} style={{ width: 50, height: 50 }} />
                            </span>
                            <span>{item.Album}</span>
                            <span>{item.Artista}</span>
                            <span className='precio'>{" "}{formatPeso(item.Precio)}</span>
                        </section>
                    ))  
                : <h1>No hay productos en el carrito</h1>}
                <h1>Total: {formatPeso(total)}</h1>
                {items === 0 ? null : 
                <button className='cart-button' onClick={() => {
                    navigate('./Cart');
                    axios.post('http://localhost:5000/pay')
                    .then(response => {
                    })
                    .catch(error => {
                        console.log(error);
                    });
                }
                }> IR AL CARRITO
                 <FontAwesomeIcon  icon={faShoppingCart} />  
                </button>
                }
            </Menu>
        </Dropdown.Menu>
    </Dropdown>
    )
}

export default CartWidget


const Menu = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    margin-top: -15px ;
    margin-bottom: -10px ;
    border-radius: 10px;
    background-color: #0a0a0a;
    color: #0a0a0a;
    font-size: 1rem;
    font-weight: bold;
    section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 10px;
        background-color: #f5f5f5;
        border-radius: 10px;
        margin: 10px 0;
    }
    h1{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        margin-top: 10px;
        font-size: 1.7rem;
        font-weight: bold;
        color: #0a0a0a;
        background-color: #f5f5f5;
        border-radius: 10px;
        
    }
    span{
        width: 100%;
    }
    .close{
        width: 40px;
        margin-right: 10px;
    }
    .img-span{
        width: 40px;
        margin-right: 30px;
    }
    .precio{
        width: 100px;
        margin-left: 10px;
    }
    .cart-button{
        width: 100%;
        height: 50px;
        border-radius: 10px;
        background-image:linear-gradient(97deg, #daa520 0%, #d6a322 26%, rgba(251,245,183,1) 58%, rgba(251,245,183,1) 87%, rgba(252,246,186,1) 100%); 
        background-size: 100% auto;
        color: #0a0a0a;
        font-size: 1.2rem;
        font-weight: bold;
        margin-top: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    .cart-button:hover{
        transform: scale(1.02);
        color: #fff;
        background-size: 200% auto;

    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        width: 100vw;
        span{
            margin-left: 5px;
        }
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        width: 100%;
        span{
            margin-left: 5px;
        }
    }

    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        width: 101%;
        h1{
            font-size: 1.5rem;
        }
    }
    @media ${deviceW.laptopL} and (min-height: 753px) {
        width: 101%;
        h1{
            font-size: 1.5rem;
        }
    }


    `
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0a0a0a;
    border-radius: 60px;
    border: 0px solid #fff;
    margin: 4px 4px 4px 0 ;   
    width: 30px;
    height: 30px;
    color: #fff;
    .SearchIcon:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        width: 20px;
        height: 20px;
    }

`

const DropDown = styled(Dropdown.Toggle)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0a0a0a;
    border: 0px solid #fff;
    margin: 4px 20px 4px 0 ;
    color: #fff;
    &:hover {
        cursor: pointer;
        background-color: goldenrod;
        border: none;
    }
    
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        margin: 4px 0px 4px 0 ;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        margin: 4px 20px 4px 0 ;
    }
`

const FAIcon = styled(FontAwesomeIcon)`

    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        font-size: 1rem;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        font-size: 1.3rem;
    }
    @media ${deviceW.tabletL} and ${deviceH.tabletL}{
        font-size: 1.5rem;
    }
     @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        font-size: 1.5rem;
    }


`
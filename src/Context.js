import React, {createContext, useContext, useEffect, useState} from 'react'
import axios from 'axios'

export const Cart = createContext()

const Context = ({ children }) => {
//Estados
    const [cart, setCart] = useState([])
    const [items, setItems] = useState(0)
    const [total, setTotal] = useState(0)
    const [modalItem, setModalItem] = useState({})
    const [loading, setLoading] = useState(false)
    const [payError, setPayError] = useState(false)
    const [userData, setUserData] = useState({})
    const [shop, setShop] = useState([]);
    const [search, setSearch] = useState(null);

// Funciones
    const addToCart = (item) => {
        setCart([...cart, item])
        setItems(items + 1)
        setTotal(total + item.Precio)
        setPayError(true)
        let order = {
            title: item.Album + ' - ' + item.Artista,
            unit_price: item.Precio,
            quantity: 1,
          }
          axios.post('http://localhost:5000/order', order)
              .then(response => {
                console.log(response)
              })
              .catch(error => {
                console.log(error)
              });
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    })

    const deleteItem = (ID) => {
        const newCart = cart.filter(item => item.ID !== ID)
        const newTotal = total - cart.find(item => item.ID === ID).Precio
        setCart(newCart)
        setItems(items - 1)
        setTotal(newTotal)
    }

    const formatPeso = (value) => {
        return new Intl.NumberFormat('es-AR', {
          style: 'currency',
          currency: 'ARS',
          minimumFractionDigits: 2,
        }).format(value);
      };
  return (
    <Cart.Provider value={{
        cart,
        setCart, 
        items,
        setItems,
        total,
        setTotal,   
        addToCart, 
        deleteItem,
        formatPeso,
        modalItem,
        setModalItem,
        loading,
        setLoading,
        payError,
        setPayError,
        userData,
        setUserData,
        shop,
        setShop,
        search,
        setSearch

    }} >{children}</Cart.Provider>
  )
}

export const CartState = () => {
    return useContext(Cart)
}

export default Context
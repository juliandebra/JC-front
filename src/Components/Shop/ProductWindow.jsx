import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { CartState } from '../../Context';
import Swal from 'sweetalert2'

import {deviceW, deviceH} from '../Breakpoints'
import Item from './Item';
import Loader from './disco.gif'

const ProductWindow = ({products, search, searchItems, page, setPages}) => {

    const { addToCart, loading, setLoading } = CartState()
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 2000)
    }, [setLoading])

    const confirmAdd = (product) => {
        let cartItems = JSON.parse(localStorage.getItem('cart'))
        let duplicateItem = cartItems.find(item => item.ID === product.ID)
        if(duplicateItem) {
            Swal.fire({
                type: 'error',
                title: 'No se pudo agregar el producto',
                text: 'El producto ya se encuentra en el carrito',
                timer: 2000
            })
        } else {
            addToCart(product)
            Swal.fire({
                type: 'success',
                title: 'Producto agregado',
                text: 'El producto se ha agregado al carrito',
                timer: 2000
            })
        }
    }

    const pagesCount = Math.ceil(products?.length / 12)

    

    let totalPages = useMemo(() => {return []}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [products])
    
    useEffect(() => {
        setPages(pagesCount)
        for(let i = 1; i <= pagesCount; i++) {
            let pageContainer = []
            for(let j = (i - 1) * 12; j < i * 12; j++) {
                if(products[j]) {
                    pageContainer.push(products[j])
                }
            }
            totalPages.push(pageContainer)
        }
    }, [pagesCount, products, totalPages, setPages])

    
    return (
        <ProductWindowStyle>
            {loading ?
                <>
                    {search && (searchItems.length > 0 ? 
                        searchItems.map(product => (
                            <Item key={product.id} product={product} confirmAdd={confirmAdd}/>
                        )) 
                    : 
                        <div><h1>Sin Resultados</h1></div>)}
                </>
                : 
                <div style={{margin: 40}}>
                    <h3>Cargando...</h3>
                    <img src={Loader} alt='' width={300} height={300}/>
                </div>
            }
            {loading &&
                <>
                    {!search && totalPages[page-1] && 
                        totalPages[page-1].map(product => (
                            <Item key={product.id} product={product} confirmAdd={confirmAdd}/>
                    ))}
                </>
            }
        </ProductWindowStyle>
    )
}
export default ProductWindow;

const ProductWindowStyle = styled.div`
    display: grid;
    width: 100%;
    min-height: 800px;
    justify-content: center;
    grid-template-columns: auto auto auto auto auto auto;
    background-color: #f5f5f5;
    border-radius: 10px; 
    padding: 30px;
    animation: fade-in 3s ease;

    @keyframes fade-in {
        from{opacity: 0}
        to{opacity: 1}
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        grid-template-columns: auto auto;
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        grid-template-columns: auto auto auto auto ;
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS} {
        grid-template-columns: auto auto auto auto auto auto;
    }
    @media ${deviceW.laptopS} and (min-height: 625px) {
        grid-template-columns: auto auto auto auto auto auto;
    }
    @media ${deviceW.laptopL} and (min-height: 650px) {
        grid-template-columns: auto auto auto auto auto auto;
    }
`

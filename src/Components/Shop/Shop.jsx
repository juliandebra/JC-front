import {useEffect, useState}  from 'react';
import PayMethod from './PayMethod';
import ShopFilters from './ShopFilters';
import styled from 'styled-components';
import { deviceW, deviceH } from '../Breakpoints'
import ProductWindow from './ProductWindow';
import { getProducts } from '../../Service/publicApiService';
import { Pagination } from '@mui/material';
import { CartState } from '../../Context';
import { Outlet } from 'react-router-dom';

const Shop = () => {

    const { shop , search, setSearch } = CartState()

    const [products, setProducts] = useState([]);
    const [searchItems, setSearchItems] = useState([]);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(0);

    const [yearModal, setYearModal] = useState(false);
    const [genreModal, setGenreModal] = useState(false);
  
    useEffect(() => {
        getProducts(shop.toLowerCase()).then(data => {
            setProducts(data);
        })
    }, [shop]);

    const handleChange = (event) => {
        setPage(event.target.innerText)
    };

    return (
        <ShopVoid>
            <Outlet/>
            <ShopStyle className='Shop' >
                <ShopFilters
                    yearModal={yearModal}
                    genreModal={genreModal}
                    setYearModal={setYearModal}
                    setGenreModal={setGenreModal}
                    setSearch={setSearch}
                    setSearchItems={setSearchItems}
                    products={products}
                />
                <ProductWindow 
                    products={products}
                    search={search}
                    searchItems={searchItems}
                    page={page}
                    setPages={setPages}
                />
                    <PageSection>
                        <Pagination  
                            variant='outlined' 
                            count={pages} 
                            page={page} 
                            onChange={handleChange}
                            hidePrevButton 
                            hideNextButton
                        />
                    </PageSection>
            </ShopStyle>
            <PayMethod /> 
        </ShopVoid> 
    )
}
export default Shop;

//styled components
const ShopStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95vw;
    margin: auto;
    background-color: #000;
    padding: 10px;
    margin: 0 0px 0 0;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000000;
    border: 1px solid #000000; 
    text-align: center;
    animation: slidein 3s 0s both;
    transition: 1s;
    flex-direction: column
    height: 100%;
    @keyframes slidein {
        from {
          
            margin-right: 3%;
        }
        to {
           
            margin-right: 6%;
            
        }
    }
    @media ${deviceW.mobileS} and ${deviceH.mobileS}{
        margin-top: 15%;
        @keyframes slidein {
            from {
             
                margin-top: 13%;
            }
            to {
              
                margin-top: 17%;
                
            }
        }
    }
    @media ${deviceW.tabletS} and ${deviceH.tabletS}{
        margin-top: 6%;
        @keyframes slidein {
            from {
              
                margin-top: 3px;
            }
            to {
              
                margin-top: 6%;
                
            }
        }
    }
    @media ${deviceW.laptopS} and ${deviceH.laptopS}{
        @keyframes slidein {
            from {
               
                margin-top: 3px;
            }
            to {
             
                margin-top: 6%;
                
            }
        }
    }
    @media ${deviceW.laptopS} and (min-height: 625px) and (max-height: 767px){
        @keyframes slidein {
            from {
               
                margin-top: 3%;
            }
            to {
              
                margin-top: 6%;
                
            }
        }
    }

`
const ShopVoid = styled.div`
    flex-direction: column;
    display: flex;
`
const PageSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000000;
    `
import React from 'react'

//styled components
import styled from 'styled-components'

const YearBubbleItems = ({products, setSearch, setSearchItems}) => {

  let decades = [50,60,70,80,90,'00',10];
  const [yearsModal, setYearsModal] = React.useState(false);
  const [decade, setDecade] = React.useState('');

  const searchByDecade = (decade) => {
    setSearch(true)
    setSearchItems(products.filter(product => product.Tags.includes(decade.toString())))
  }
  const searchByYear = (year) => {
    setSearch(true)
    setSearchItems(products.filter(product => product.Año === year))
  }

  const YearsModal = () => {
    let years = [];
    for(let i = 0; i < 10; i++) {
      if(decade !== '00' && decade !== 10) {
        years.push(parseInt(decade) + 1900 + i);
      } else if(decade === '00' || decade === 10) {
        years.push(parseInt(decade) + 2000 + i);
      }
    }
    return (
      <YearBubble onMouseEnter={() => setYearsModal(true)} onMouseLeave={() => setYearsModal(false)} >
      {years.map(year => {
        return (
           <YearBubbleItem onClick={() => searchByYear(year)} >
              {year} 
            </YearBubbleItem>
        )})}
        </YearBubble>
    )
  }
  return (
    <DecadeBubble onMouseEnter={() => setYearsModal(true)} onMouseLeave={() => setYearsModal(false)}>
      {decades.map(decade => {
        return (
          <DecadeBubbleItem key={decade} onClick={() => searchByDecade(decade)} onMouseEnter={() => {setYearsModal(true); setDecade(decade)}} onMouseLeave={() => setYearsModal(false)}>
              {decade}'s  
          </DecadeBubbleItem>
        )})}
        < >
       {yearsModal && <YearsModal onMouseEnter={() => setYearsModal(true)} onMouseLeave={() => setYearsModal(false)} />}
       </>
    </DecadeBubble>

  )
}

export default YearBubbleItems

const DecadeBubble = styled.div`
  font-size: 1.3rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px #000000;
  transition: 0.3s;
`
const DecadeBubbleItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: .3s;
  cursor:pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`
 const YearBubble = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  margin: 10px;
  position: absolute;
  top: 35px;
  right: -10px;
  border-radius: 0px 0px 10px 10px;
  border-top: 1px solid #000;
  z-index: 10;
  box-shadow: 0px 5px 5px #000000;
  transition: .3s;
  animation: fadein 0.3s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
const YearBubbleItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: .3s;
  cursor:pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`

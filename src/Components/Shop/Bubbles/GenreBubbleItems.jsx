import React from 'react'

//styled components
import styled from 'styled-components'

const GenreBubbleItems = ({products, setSearch, setSearchItems}) => {

  let genres = ['Rock','Funk','Pop','Punk','Heavy Metal','Jazz','Rap','Electronica','Cumbia', 'Reggae'];
  const [subGenresModal, setSubGenresModal] = React.useState(false);
  const [genre, setGenre] = React.useState('');

  const searchByGenre = (genre) => {
    setSearch(true)
    setSearchItems(products.filter(product => product.Genero.toLowerCase().includes(genre.toLowerCase())))
    if(genre === ''){
        setSearch(false)
        setSearchItems(products)
    }
  }
  const searchBySubgenre = (subgenre) => {
    setSearch(true)
    setSearchItems(products.filter(product => product.Tags.includes(subgenre.toLowerCase())))
    if(subgenre === ''){
        setSearch(false)
        setSearchItems(products)
    }
  }

  const SubGenresModal = () => {
    let subGenres = [];
    switch(genre) {
        case 'Rock':
            subGenres = ['Rock', 'Country Rock','Funk Rock', 'Folk Rock','Glam Rock', 'Garage Rock', 'Grunge','Hard Rock','Heavy Metal','Indie Folk','Industrial', 'New Wave','Jazz Rock','Rock Alternativo','Rock Indie','Rock Nacional','Rock Progresivo','Rock Psicodelico','Rock & Roll','Rockabilly','Rocksteady','Punk','Surf'];
            break;  
        case 'Funk':
            subGenres = ['Funk','Funk Metal','Funk Rock','Hard Funk','Jazz Funk','R&B','Soul','Soul Funk', 'Disco', 'Neo Soul'];
            break;
        case 'Pop':
            subGenres = ['Britpop','Dance', 'Disco', 'Electropop', 'Pop', 'Pop Punk', 'Pop Rock','UK Garage', 'Urbano', 'Pop Latino', 'New Age', 'R&B', 'Synth Pop', 'New Age', 'New Wave'];
            break;
        case 'Punk':
            subGenres = ['Punk','Experimental','Industrial','Noise', 'Hardcore', 'Post Punk', 'Garage', 'Grunge', 'New Wave', 'Trashcore', 'Grindcore'];
            break;
        case 'Heavy Metal':
            subGenres = ['Heavy Metal','Black Metal','Death Metal','Doom Metal','Doomcore','Hard Rock', 'Hardcore', 'Grindcore', 'Trash Metal', 'Power Metal', 'Speed Metal', 'Glam Metal', 'Nu Metal', 'Stoner'];
            break;
        case 'Jazz':
            subGenres = ['Jazz','Acid Jazz','Bossa Nova','Big Band','Bebop', 'Hot Jazz','Swing','Free Jazz','Jazz Fusion', 'Jazz Funk', 'Soul', 'Blues', 'Jazz Latino'];
            break;
        case 'Rap':
            subGenres = ['Rap', 'Rap Metal', 'Hip Hop', 'Trap', 'Rap Latino']
            break;
        case 'Electronica':
            subGenres = ['Electronica','Techno','Trance', 'New Wave', 'New Age', 'Pop', 'House', 'Drum and Bass', 'Ambient', 'Synthpop'];
            break;
        case 'Cumbia':
            subGenres = ['Cumbia','Cumbia villera','Cumbia Argentina', 'Cumbia Latinoamericana', 'Axe', 'Merengue', 'Bachata'];
            break;
        case 'Reggae':
            subGenres = ['Reggae', 'Reggae Roots', 'Dub', 'Dancehall', 'Regueton', 'Ragga', 'Samba Reggae', 'Ska', 'Rocksteady' ];
            break;
        default:
            subGenres = [];
             break; 

    }

    

    return (
      <SubGenreBubble onMouseEnter={() => setSubGenresModal(true)} onMouseLeave={() => setSubGenresModal(false)} >
      {subGenres.map(subGenre => {
        return (
           <SubGenreBubbleItem onClick={() => searchBySubgenre(subGenre)} >
              {subGenre} 
              </SubGenreBubbleItem>    
        )})}
        </SubGenreBubble>
    )
  }
  
  return (
    <GenreBubble onMouseEnter={() => setSubGenresModal(true)} onMouseLeave={() => setSubGenresModal(false)}>
      {genres.map(genre => {
        return (
          <GenreBubbleItem key={genre} onClick={() => { searchByGenre(genre)}} onMouseEnter={() => {setSubGenresModal(true); setGenre(genre)}} onMouseLeave={() => setSubGenresModal(false)}>
              {genre}
          </GenreBubbleItem>
        )})}
        <div >
        {subGenresModal && <SubGenresModal onMouseEnter={() => setSubGenresModal(true)} onMouseLeave={() => setSubGenresModal(false)} />}
        </div>
    </GenreBubble>
  )
}

export default GenreBubbleItems

const GenreBubble = styled.div`
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

const GenreBubbleItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%; 
  color: #000;
  white-space: nowrap;
  transition: .3s;
  cursor:pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`
 const SubGenreBubble = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  background-color: #f5f5f5;
  width: 100%;
  height: 450px;
  margin: 10px;
  position: absolute;
  top: 36px;
  right: -10px;
  border-radius: 10px;
  z-index: 10;
  box-shadow: 3px 3px 5px #000000;
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
const SubGenreBubbleItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 30%;
  color: #000;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #000000;
  transition: .3s;
  cursor:pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
` 

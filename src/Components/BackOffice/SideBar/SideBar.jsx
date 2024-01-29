import "./SideBar.css";
import styled from 'styled-components'
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faBook, faCompactDisc, faRecordVinyl, faWindowMaximize } from '@fortawesome/free-solid-svg-icons'




export default function Sidebar() {
  const navigate = useNavigate()
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Shopping</h3>
          <ul className="sidebarList">
            <Buttons onClick={() => navigate('/backoffice/Shopping/CD')}>
            <FontAwesomeIcon icon={faCompactDisc}/>
              CD
            
            </Buttons>
            <Buttons onClick={() => navigate('/backoffice/Shopping/DVD')}>
            <FontAwesomeIcon icon={faPlayCircle}/>
              DVD
            
            </Buttons>
            <Buttons onClick={() => navigate('/backoffice/Shopping/Vinilos')}>
            <FontAwesomeIcon icon={faRecordVinyl}/>
              VINILOS
            
            </Buttons>
            <Buttons onClick={() => navigate('/backoffice/Shopping/Cassettes')}>
            <FontAwesomeIcon icon={faWindowMaximize}/>
              CASSETTES
              <FontAwesomeIcon icon="fa-solid fa-cassette-tape" />
            </Buttons>
            <Buttons onClick={() => navigate('/backoffice/Shopping/Libros')}>
            <FontAwesomeIcon icon={faBook}/>
              LIBROS
            
            </Buttons>
          </ul>
        </div>
        <div className="sidebarMenu">
        </div>
      </div>
    </div>
  );
}

const Buttons = styled.button`
background-color: #fff;
height: 40px;
width: 100px;
display: flex;
flex-direction: row;
padding: 5px;
align-items: center;
border-radius: 10px;
`

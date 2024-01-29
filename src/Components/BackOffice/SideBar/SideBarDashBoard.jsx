import React from 'react'
import "./SideBar.css";
import styled from 'styled-components'
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag,  faPlus, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { getNotifiaciones, updateNotificacion } from "../../../Service/publicApiService";



export default function Sidebar() {
  const navigate = useNavigate()

  const [notificaciones, setNotificaciones] = React.useState(null)

  React.useEffect(() => {
    getNotifiaciones().then(res => {
      setNotificaciones(res)
    }
    )
  }, [])
  
  const clickMessages = async () => {
    await updateNotificacion(notificaciones[0].id, {
      ...notificaciones[0],
      Mensajes: 0
    })
    navigate('/backoffice/Contacto/Mensajes')
  }

  const clickCompras = async () => {
    await updateNotificacion(notificaciones[0].id, {
      ...notificaciones[0],
      Compras: 0
    })
    navigate('/backoffice/Ventas')
  }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Buttons onClick={() => navigate('/backoffice/Novedades')}>
            <FontAwesomeIcon icon={faPlus}/>
              Novedades
            
            </Buttons>
            <Buttons onClick={() => navigate('/backoffice/Shopping')}>
            <FontAwesomeIcon icon={faShoppingBag}/>
              Shopping
            
            </Buttons>
            <Buttons onClick={() => navigate('/backoffice/Contacto')}>
            <FontAwesomeIcon icon={faPhoneAlt}/>
              Contacto
            
            </Buttons>

          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem" onClick={() => clickCompras()} >
              Últimas compras realizadas {notificaciones && notificaciones[0].Compras}
            </li>
            <li className="sidebarListItem" onClick={() => clickMessages()}>
              Mensajes sin leer { notificaciones && notificaciones[0].Mensajes}
            </li>
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

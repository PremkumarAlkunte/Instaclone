import React from 'react'
import Instalogo from "../images/instalogo.png";
import './Header.css'
import{Link} from 'react-router-dom'


export default function PostView() {
  return (
    <>
      <div className='container'>
        <header>
            <div className='header'>
                <img id='insta' src={Instalogo} alt="instalogo"></img>
                {/* <img id='camera' src={Cameralogo} alt="cameralogo" ></img> */}
                <Link to="/form" ><img id='camera' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrDVdT6stzYiMpUk3BXE43BOZu4pPO9kBlMg&usqp=CAU" alt="cameralogo" ></img></Link>
            </div>
        </header>
        <hr/>
        
      </div>
    </>
  )
}
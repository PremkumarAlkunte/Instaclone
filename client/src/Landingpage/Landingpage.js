import React from 'react'
import Banner from "../main.jpg"
import "./Landingpage.css"
import { Link, Switch, Route } from 'react-router-dom'

export default function Landingpage() {
  
  return (
    <>
      <div className='landing-container'>
        <img src={Banner} alt="Banner"/>
        <div className='description'>
        <h2>
          10x Team 04
        </h2>
        <Link to="/postview" ><button id='button'>Enter</button></Link>
        </div>
        <Switch>
          <Route path={'/'}></Route>
        </Switch>
      </div>
    </>
  )
}

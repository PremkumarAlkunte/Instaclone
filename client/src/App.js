import React from 'react'
import { BrowserRouter, Route,} from 'react-router-dom'
import Landingpage from './Landingpage/Landingpage'
import Postview from './Postview/Postview'
import Form from './Form/form'
import Header from "./Header/Header"

export default function App() {
  return (
    <>
    <BrowserRouter>
      
        <Route exact path="/" component={Landingpage}></Route>
        <Route exact path="/postview" component={Postview}></Route>
        <Route exact path="/form" component={Header}></Route>
        <Route exact path="/form" component={Form}></Route>
      
    </BrowserRouter>
    </>
  )
};
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Formulario from './formulario'
import TablaCanciones from './tablaCanciones'

export const App = (props) => {
    const url = "http://45.236.130.191/canciones.php"
    const [canciones, setCanciones] = useState([])
    
    useEffect(() => {
        if (localStorage.getItem("canciones") != undefined && localStorage.getItem("canciones") != []) {
            setCanciones(JSON.parse(localStorage.getItem("canciones")))
        } else {
            axios.get(url).then(response => {
                localStorage.setItem("canciones", JSON.stringify(response.data))
                setCanciones(JSON.parse(localStorage.getItem("canciones")))
            })
        }
    }, [])
    
    
    
    return (
        <>
    <Formulario canciones={canciones} setCanciones={setCanciones}/>
    <TablaCanciones canciones={canciones} setCanciones={setCanciones}/>
    </>
  )
}


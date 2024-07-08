import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TablaCanciones from './tablaCanciones'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'


const Formulario = ({ canciones, setCanciones }) => {
    // const url = "http://45.236.130.191/canciones.php"
    // const [canciones, setCanciones] = useState([])
    
    // useEffect(() => {
      //     axios.get(url).then(response => {
        //         localStorage.setItem("canciones", JSON.stringify(response.data))
        //         setCanciones(JSON.parse(localStorage.getItem("canciones")))
        //     })
        // }, [])
    
    const [titulo, setTitulo] = useState("")
    const [artista, setArtista] = useState("")
    
    const nuevoId = () => {
      if (canciones) {
        const ids = canciones.map(v => (v.id))
        return Math.max(...ids) + 1 // id maximo + 1
      }
    }
    
    const guardar = () => {
      const cancion = {id: nuevoId(), title: titulo, artist: artista}
      setCanciones([...canciones, cancion])
      localStorage.setItem("canciones", JSON.stringify([...canciones, cancion]))
    }
  
  return (
    <div className='container'>
      <div className='row'>
            <div className='col-6'>
                <div className='col'>
                    <label htmlFor="title" className='form-label'>
                        Titulo
                    </label>
                    <input
                        type="text"
                        id='title'
                        className='form-control'
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                        />
                </div>
                <div className='col'>
                    <label htmlFor="artist" className='form-label'>
                        Artista
                    </label>
                    <input
                        type="text"
                        id='artist'
                        className='form-control'
                        value={artista}
                        onChange={e => setArtista(e.target.value)}
                        />
                </div>
                <div className='col mt-4'>
                    <button className='btn btn-success' onClick={guardar}>Guardar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Formulario
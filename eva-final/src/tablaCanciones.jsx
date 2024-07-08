import React from 'react'

const TablaCanciones = ({canciones, setCanciones}) => {

    const eliminar = (e) => {
        const cancionFiltro = canciones.filter(c => c.id != e.target.value)
        localStorage.setItem("canciones", JSON.stringify(cancionFiltro))
        setCanciones(cancionFiltro)
    }

    const editar = (e) => {
        
    }

  return (
    <>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Artista</th>
                    <th>Acciones</th>
                    <th>Modificacion</th>
                </tr>
            </thead>
            <tbody>
                {canciones && canciones.map((c) => (
                        <tr key={c.id}>
                            <td>{c.title}</td>
                            <td>{c.artist}</td>
                            <td>
                                <button className='btn btn-danger'
                                onClick={eliminar}
                                value={c.id}>
                                    Eliminar
                                </button>
                            </td>
                            <td>
                            <button className='btn btn-succes'>
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
  )
} 

export default TablaCanciones
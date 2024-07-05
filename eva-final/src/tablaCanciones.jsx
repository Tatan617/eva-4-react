import React from 'react'

const TablaCanciones = () => {
    /*const [canciones, setCanciones] = useState([])

    if (canciones == []) {
        setCanciones(JSON.parse(localStorage.getItem("canciones")))
    }*/
    const canciones = JSON.parse(localStorage.getItem("canciones"))

    const eliminar = (e) => {
        const cancionEliminada = canciones.filter(c => c.id != e.target.value)
        localStorage.setItem("canciones", JSON.stringify(cancionEliminada))
    }

  return (
    <>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Artista</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {canciones &&
                    canciones.map((c) => (
                        <tr key={c.id}>
                            <td>{c.title}</td>
                            <td>{c.artist}</td>
                            <td>
                                <button className='btn btn-danger' onClick={eliminar} value={c.id}>
                                    Eliminar
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
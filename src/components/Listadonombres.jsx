import React , {useState} from 'react'
import uniqid from 'uniqid'
 const Listadonombres = () => {

const [nombre,setNombre] = useState ('')
const [listanombres,setListaNombres] = useState([])
const [modoedicion,setModoedicion] = useState(false)
const [id,setid ]= useState('')
const[error,setError] = useState(null)

const addNombre = (e)=>{
    e.preventDefault()
    if(!nombre.trim()){
        setError('El campo nombre esta vacio')
        return
    }
    const nuevoNombre = {
        id:uniqid(),
        tituloNombre:nombre

    }
    setListaNombres([...listanombres , nuevoNombre])
setNombre('')
setError(null)
}
const deleteNombre =(id)=>{
const nuevoArray = listanombres.filter(item=>item.id !==id)
setListaNombres(nuevoArray)
}

const editar = (item) =>{
    setModoedicion(true)
    setNombre(item.tituloNombre)
    setid(item.id)
}
const editarNombre= ( e) =>{
    e.preventDefault()
    const nuevoArray =listanombres
    .map(item => item.id === id ? {id : id, tituloNombre:nombre}:item)
    setListaNombres(nuevoArray)
    setModoedicion(false)
    setNombre('')
}

    return (
        <div class="p-3 mb-2 bg-warning text-dark">
            <h2 >Apilcacion CRUD Basica</h2>
            <div className="row">
            <div className="col">
                
                <h2>Listado de nombres</h2>
                <ul className="list-group">
                    {
                        listanombres.map(
                            item=>
                            <li key =" {item.id}" className="list-group-item">{item.tituloNombre}
                            <button className="btn btn-danger float-end"
                            onClick={()  => {deleteNombre(item.id)}}>
                                BORRAR
                            </button>
                            <button className="btn btn-info float-end"
                            onClick={()  => {editar(item)}}>
                                EDITAR
                            </button>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="col">
                <h2>Formulario</h2>

                <form onSubmit={modoedicion ? editarNombre : addNombre} className="form-group">
                    <input onChange={ (e)=>{setNombre(e.target.value) } }className="form-control mb-3 "  type="text" 
                    placeholder="Introduce el nombre" 
                    value={nombre}/>
                    <input  className="btn btn-info btn-block" type="submit" 
                    value={modoedicion ? 'EDITAR NOMBRE' : 'REGISTAR NOMBRE'} />
                </form>

                {
                    error != null ? (
                        <div className="alert-danger">{error}
                        </div>
                    )
                    :
                    (
                        <div>

                        </div>
                    )


                }
            </div>

            </div>
        </div>
    )
}

export default Listadonombres;

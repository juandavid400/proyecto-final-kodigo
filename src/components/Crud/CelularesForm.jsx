import React, {useEffect, useState} from 'react'
import axios from "axios"

const CelularesForm = ({id, del, actualizar}) => {

    if(del !== true)
            del = false

    const [price, precio] = useState("")
    const [img, setImg] = useState("")
    const [img2, setImg2] = useState("")
    const [title, setTitle] = useState("")
    const [nuevo, setisNew] = useState("")
    const [oldprice, oldPrice] = useState("")
    // const [price, price] = useState("")

    useEffect(() => {
        

        if(id !== undefined)
            cargarCelulares()
        else{

            precio("")
            setImg("")
            setImg2("")
            setTitle("")
            setisNew("")
            oldPrice("")
        }
    }, [id])

    async function cargarCelulares(){
        try{
            let res = await axios("https://denny2023.azurewebsites.net/api/celulares/"+id)
            let data = await res.data

            precio(data.price)
            setImg(data.img)
            setImg2(data.img2)
            setTitle(data.title)
            setisNew(data.nuevo)
            oldPrice(data.oldprice)

        }
        catch(error){
            alert(error)
            if(error.response.status === 404)
                document.querySelector("#btnCancelar").click()
        }
    }

    function enviar(e){
        let form = document.querySelector("#formulario")

        e.preventDefault()
        e.stopPropagation()

        if(!form.checkValidity()){

            form.classList.add('was-validated')
        }
        else{
            if(id === undefined)
                guardar()
            else if(del !== true)
                editar()
            else{
                let respuesta = window.confirm("Esta seguro que desea eliminar?")
                
                if(respuesta === true)
                    eliminar()
            }
                
        }
        
    }

    async function eliminar(){
        try{
            let res = await axios.delete("https://denny2023.azurewebsites.net/api/celulares?id=" + id)
            let data = await res.data

            alert(data.message)

            if(data.status === 1){
                document.querySelector("#btnCancelar").click()
                actualizar()
            }
        }
        catch(error){
            alert(error)
            if(error.response.status === 404)
                document.querySelector("#btnCancelar").click()
        }
    }

    async function editar(){
        try{
            const celular =
            {
                
                celularId : id,
                price: price,
                img: img,
                img2: img2,
                title: title,
                nuevo: nuevo,
                oldprice: oldprice,
            }

            let res = await axios.put("https://denny2023.azurewebsites.net/api/celulares", celular)
            let data = await res.data

            alert(data.message)

            if(data.status === 1){
                document.querySelector("#btnCancelar").click()
                actualizar()
            }

        }
        catch(error){
            alert(error)
            if(error.response.status === 404)
                document.querySelector("#btnCancelar").click()
        }
    }

    async function guardar(){
        try{
            const celular =
            {
                price: precio,
                img: img,
                img2: img2,
                title,
                nuevo: nuevo,
                oldprice: oldprice
            }

            let res = await axios.post("https://denny2023.azurewebsites.net/api/celulares", celular)
            let datos = res.data

            alert(datos.message)

            if(datos.status === 1){
                document.querySelector("#btnCancelar").click()
                actualizar()
            }
                

        }
        catch(error){
            alert(error)
        }
    }

    function cancelar(e){
        e.preventDefault()
        e.stopPropagation()
        let form = document.querySelector("#formulario")
        form.classList.remove('was-validated')
    }

    return (
        <div>
            <form id="formulario" className='needs-validation' noValidate>
                {
                    id !== undefined ?
                    <div className='form-group mb-3'>
                        <label className='form-label'>ID:</label>
                        <input type="text" value={id} readOnly disabled className="form-control" />
                    </div>
                    :
                    ""
                }
            
                <div className='form-group mb-3'>
                    <label className='form-label'>price:</label>
                    <input required type="text" value={price} onChange={(e) => precio(e.target.value)} className="form-control" disabled={del} placeholder="Ingrese el precio" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Complete el campo</div>
                </div>
                <div className='form-group mb-3'>
                    <label className='form-label'>img:</label>
                    <input required type="file" name='img' accept="image/*" value={img} onChange={(e) => setImg(e.target.value)} className="form-control" disabled={del} placeholder="Ingrese un img" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Complete el campo</div>
                </div>
                <div className='form-group mb-3'>
                    <label className='form-label'>img2:</label>
                    <input required type="file" name='img2' accept="image/*" value={img2} onChange={(e) => setImg2(e.target.value)} className="form-control" disabled={del} placeholder="Ingrese un img2" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Complete el campo</div>
                </div>
                <div className='form-group mb-3'>
                    <label className='form-label'>title:</label>
                    <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" disabled={del} placeholder="Ingrese el title" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Complete el campo</div>
                </div>
                <div className='form-group mb-3'>
                    <label className='form-label'>Es nuevo:</label>
                    <input required type="text" value={nuevo} onChange={(e) => setisNew(e.target.value)} className="form-control" disabled={del} placeholder="Ingrese true o false si es nuevo" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Complete el campo</div>
                </div>
                <div className='form-group mb-3'>
                    <label className='form-label'>oldprice:</label>
                    <input required type="text" value={oldprice} onChange={(e) => oldPrice(e.target.value)} className="form-control" disabled={del} placeholder="Ingrese la oldprices" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Complete el campo</div>
                </div>
                <div className='modal-footer form-group mb-3'>
                    <input onClick={(e) => enviar(e)} type="submit" className={`btn btn-${id === undefined ? "success" : del===true ? "danger" : "primary"}`} value={id === undefined ? "Guardar" : del===true ? "Eliminar" : "Editar"} />
                    <button id="btnCancelar" data-bs-dismiss="modal" onClick={(e) => cancelar(e)} className='btn btn-warning'>Cancelar</button>
                </div>
        </form>
        
    </div>
    )
}

export default CelularesForm;
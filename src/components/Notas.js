import React, { useEffect, useState } from "react";
import "./notas.css";

function Notas() {
    const [notas, setNotas] = useState([]);
    const [texto, setTexto] = useState('');
    const [estado, setEstado] = useState(false);

    useEffect(()=>{
        //console.log(estado);
    },[estado])

    const agregarNota = () => {
        const objetoNota = {
            texto: texto,
            estado: false
        }
        setNotas([...notas, objetoNota]);
        textoNota.value = '';
    }

    const borrarNota = (indice) => {
        const nuevasNotas = [...notas];
        nuevasNotas.splice(indice, 1);
        setNotas(nuevasNotas);
    };

    const cambiarEstado = (indice) => {
        notas.forEach((e, index)=>{
            if(indice === index){
                e.estado = !e.estado;
            }
        })
        const nuevasNotas = [...notas];
        nuevasNotas.splice(indice, 1);
        setNotas(nuevasNotas);
        setEstado(!estado);
    }
    return (
        <>
            <h1>Lista de Notas</h1>
            <input type="text" placeholder="agregar nota" maxLength="40" id="textoNota" onChange={(e) => setTexto(e.target.value)}></input>
            <button className="agregar" onClick={() => agregarNota()}>Agregar</button>
            {notas.map((item, indice) => (
                <div className="tareas" key={indice} >
                    <p className="detalleNota">{item.texto}</p>
                    <input type="checkbox" id="estadoNota" onChange={()=>(cambiarEstado(indice))}></input>
                    <p className="estado">Estado: {item.estado ? "completo": "incompleto"}</p>
                    <button className="borrar" onClick={() => borrarNota(indice)}>Borrar</button>
                </div>
            ))}
        </>
    )
}

export default Notas;
import React, { useEffect, useState } from "react";

function Notas() {
    const [notas, setNotas] = useState([]);
    const [texto, setTexto] = useState('');
    const [estado, setEstado] = useState(false);

    useEffect(()=>{
        console.log(estado);
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
        setEstado(!estado);
    }
    return (
        <>
            <h1>Ingrese una nota</h1>
            <input type="text" id="textoNota" onChange={(e) => setTexto(e.target.value)}></input>
            <button onClick={() => agregarNota()}>ok</button>
            {notas.map((item, indice) => (
                <div key={indice} >
                    <p className="detalleNota">{item.texto}</p>
                    <input type="checkbox" id="estadoNota" onChange={()=>(cambiarEstado(indice))}></input>
                    <p>Estado: {item.estado ? "completo": "incompleto"}</p>
                    <button className="btn-borrar" onClick={() => borrarNota(indice)}>borrar</button>
                </div>
            ))}
        </>
    )
}

export default Notas;
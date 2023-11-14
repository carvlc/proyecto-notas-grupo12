import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import "./notas.css";
import Nota from "./Nota";

function Notas() {
    const [notas, setNotas] = useState([]);
    const [texto, setTexto] = useState('');
    const [titulo, setTitulo] = useState('');
    const [isChange, setIsChange] = useState(false)

    useEffect(() => {
        console.log(notas);
        setTitulo('')
        setTexto('')
    }, [isChange])

    const agregarNota = () => {
        const objetoNota = {
            titulo: titulo,
            texto: texto,
            estado: 'Inicial'
        }
        setNotas([...notas, objetoNota]);
        setTitulo('')
        setTexto('')

    }

    const borrarNota = (indice) => {
        const nuevasNotas = [...notas];
        nuevasNotas.splice(indice, 1);
        setNotas(nuevasNotas);
    };

    const cambiarEstado = (indice) => {
        notas.forEach((e, index) => {
            if (indice === index) {
                if (e.estado === 'En proceso') {
                    e.estado = 'Resuelto'
                }
                if (e.estado === "Inicial") {
                    e.estado = 'En proceso';
                }
            }
        })
        console.log(notas)
        setIsChange(!isChange)
    }

    const handleSubmit = e => {
        e.target.reset();
    }
    return (
        <>
            <div className="container">
                <h1>Ingrese su Nota <i class="bi bi-pencil-fill"></i></h1>
                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type="text" value={texto} onChange={(e) => setTexto(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" onClick={() => agregarNota()}>
                        Agregar <i class="bi bi-check-circle-fill"></i>
                    </Button>
                </Form>
            </div>
            <br></br>
            <div className="grid">
                <div className="notas-container">
                    <h2>Inicio</h2>
                    {notas.map((item, indice) => (

                        item.estado === 'Inicial' ?
                            <Nota
                                key={indice}
                                clave={indice}
                                titulo={item.titulo}
                                texto={item.texto}
                                estado={item.estado}
                                borrarNota={borrarNota}
                                cambiarEstado={cambiarEstado}
                            ></Nota>
                            :
                            <p key={indice}></p>

                    ))}
                </div>
                <div className="notas-container">
                    <h2>Tareas en Proceso</h2>
                    {notas.map((item, indice) => (
                        item.estado === 'En proceso' ?
                            <Nota
                                key={indice}
                                clave={indice}
                                titulo={item.titulo}
                                texto={item.texto}
                                estado={item.estado}
                                borrarNota={borrarNota}
                                cambiarEstado={cambiarEstado}
                            ></Nota>
                            :
                            <p key={indice}></p>

                    ))}
                </div>
                <div className="notas-container">
                    <h2>Tareas Resueltas</h2>
                    {notas.map((item, indice) => (

                        item.estado === 'Resuelto' ?
                            <Nota
                                key={indice}
                                clave={indice}
                                titulo={item.titulo}
                                texto={item.texto}
                                estado={item.estado}
                                borrarNota={borrarNota}
                                cambiarEstado={cambiarEstado}
                            ></Nota>
                            :
                            <p key={indice}></p>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Notas;
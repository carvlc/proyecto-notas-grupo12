import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Nota({clave, titulo, texto,estado, borrarNota,cambiarEstado}) {
  return (
    <Card key={clave} border='info' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        
        <Card.Text>{texto}</Card.Text>
        <Card.Text>Estado: {estado}</Card.Text>

        <hr/>
        <Button variant="success" onClick={() => (cambiarEstado(clave))}>Cambiar Estado</Button>
        <span> </span>
        <Button variant="danger" onClick={() => borrarNota(clave)}>borrar</Button>
      </Card.Body>
    </Card>
  );
}

export default Nota;
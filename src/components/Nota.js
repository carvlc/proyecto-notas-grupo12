import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


function Nota({clave, titulo, texto,estado, borrarNota,cambiarEstado}) {
  return (
    <Card key={clave} border='info' >
      
      <Card.Body>
        <Card.Title><i class="bi bi-card-text"></i> {titulo} </Card.Title>
       
        <Card.Text>{texto}</Card.Text>
        <Card.Text>Estado: <Badge pill bg="dark">{estado}</Badge> </Card.Text>
        

        <hr/>
        <Button variant="danger" onClick={() => borrarNota(clave)}><i class="bi bi-trash-fill"></i></Button>
        <span> </span>
        {estado !== 'Resuelto'?<Button variant="success" onClick={() => (cambiarEstado(clave))}>Cambiar Estado <i class="bi bi-arrow-90deg-right"></i></Button>:<></>}
        
      </Card.Body>
    </Card>
  );
}

export default Nota;
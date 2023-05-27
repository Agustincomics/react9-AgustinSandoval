import React from 'react';
import { Button, ListGroup } from "react-bootstrap";

const CitaCard = ({ cita, borrarCita }) => {
  return (
    <div className="card">
      <h3>{cita.nombreDuenio}</h3>
      <p>Mascota: {cita.nombreMascota}</p>
      <p>Fecha: {cita.fecha}</p>
      <p>Hora: {cita.hora}</p>
      <p>Síntomas: {cita.sintomas}</p>
      <Button variant="danger" onClick={()=> borrarCita(cita)}>Borrar</Button>
    </div>
  );
};

export default CitaCard;
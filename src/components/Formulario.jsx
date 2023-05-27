import {Form, Button} from 'react-bootstrap';
/* import ListaTareas from './ListaTareas'; */
import { useState, useEffect } from 'react';
import CitaCard from './Cards';

const Formulario = () => {
    
    const [citas, setCitas] = useState([]);
    const [nombreMascota, setMascota] = useState("");
    const [nombreDuenio, setDuenio] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [sintomas, setSintomas] = useState("");

    useEffect(() => {
        const citasLocalStorage = JSON.parse(localStorage.getItem('citas')) || [];
        setCitas(citasLocalStorage);
      }, []);

    //aqui creo mis funciones
    useEffect(()=>{
        // console.log(tarea);
        // console.log(listadoTareas);
        localStorage.setItem('citas', JSON.stringify(citas));
     }, [citas])
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (nombreMascota.trim() === "" || nombreDuenio.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === "") {
            setError("completar todos los campos correctamente.");
            return;
          }

        const nuevaCita = {
            id: Date.now(),
            nombreMascota,
            nombreDuenio,
            fecha,
            hora,
            sintomas,
        };

        setCitas([...citas, nuevaCita]);
        
        setMascota("");
        setDuenio("");
        setFecha("");
        setHora("");
        setSintomas("");
    }

    const borrarCita = (id)=>{
        let arregloFiltrado = citas.filter((cita)=> cita !== id);
        setCitas(arregloFiltrado);
     }

    return (
        <section>
            <Form onSubmit={handleSubmit}>
        
                <Form.Group className="mb-3 d-flex" controlId="tarea">
                    <Form.Control type="text" placeholder="Ingrese el Nombre de la mascota" required maxLength={20} minLength={4}
                    onChange={(e)=> setMascota(e.target.value)}
                    value={nombreMascota} />
                     <Form.Control type="text" placeholder="Ingrese el Nombre del dueño" required maxLength={20} minLength={4}
                    onChange={(e)=> setDuenio(e.target.value)}
                    value={nombreDuenio} />
                     <Form.Control type="date" placeholder="Ingrese la fecha" required maxLength={20} minLength={4}
                    onChange={(e)=> setFecha(e.target.value)}
                    value={fecha} />
                     <Form.Control type="text" placeholder="hh:mm" required maxLength={5} minLength={4}
                    onChange={(e)=> setHora(e.target.value)}
                    value={hora} />
                     <Form.Control type="text" placeholder="describir sintomas" required maxLength={20} minLength={4}
                    onChange={(e)=> setSintomas(e.target.value)}
                    value={sintomas} />
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form.Group>
            </Form>
            <h2>Citas Agendadas</h2>

            {citas.length === 0 ? (
                <p>No hay citas agendadas.</p>
            ) : (
                citas.map((cita) => (
                <CitaCard key={cita.id} cita={cita} borrarCita={borrarCita} />
                ))
            )}
        </section>
    );
};

export default Formulario;
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import './App.css';
import Formulario from './components/Formulario';

function App() {

  return (
    <>
      <div id='root'>
        <Container className='my-5 mainPage'>
          <h1 className='display-4 text-center'>titulo</h1>
          <hr />
          {/* aqui agrego el formulario */}
          <Formulario></Formulario>
        </Container>
        <footer className='bg-dark text-light text-center p-4'>
          <p>&copy; Todos los derechos reservados</p>
        </footer>
      </div>
    </>
  )
}

export default App
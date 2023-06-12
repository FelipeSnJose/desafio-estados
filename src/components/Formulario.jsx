import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Formulario = ({ handleFormError }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const validarDatos = (e) => {
    e.preventDefault();

    if (nombre === '' || email === '' || pass === '' || confirmPass === '') {
      handleFormError(true, 'warning', 'Completa todos los campos');
      return;
    }

    if (!validateEmail(email)) {
      handleFormError(true, 'danger', 'Formato de correo electrónico inválido');
      return;
    }

    if (pass !== confirmPass) {
      handleFormError(true, 'danger', 'Las contraseñas no coinciden');
      return;
    }

    handleFormError(false);
    setNombre('');
    setEmail('');
    setPass('');
    setConfirmPass('');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  return (
    <>
      <form className="forms" onSubmit={validarDatos}>
        <FloatingLabel controlId="floatingName" label="Nombre" className="mb-3">
          <Form.Control
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            placeholder="Nombre"
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingPass"
          label="Contraseña"
          className="mb-3"
        >
          <Form.Control
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Contraseña"
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingConfirmPass"
          label="Confirma tu contraseña"
          className="mb-3"
        >
          <Form.Control
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            type="password"
            placeholder="Confirma tu contraseña"
          />
        </FloatingLabel>

        <Button type="submit" variant="success">
          Registrarse
        </Button>
      </form>
    </>
  );
};

export default Formulario;

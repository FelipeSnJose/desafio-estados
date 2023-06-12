import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alerts from './Alerts';
import Stack from 'react-bootstrap/Stack';

const Registro = () => {
  const [alertVariant, setAlertVariant] = useState('');
  const [alertText, setAlertText] = useState('');
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const handleFormError = (errorState, variant, text) => {
    if (errorState) {
      setAlertVariant(variant);
      setAlertText(text);
      setRegistroExitoso(false);
    } else {
      setAlertVariant('');
      setAlertText('');
      setRegistroExitoso(true);
    }
  };

  return (
    <>
    <Stack gap={4}>

        <h1>Crea una cuenta</h1>

        <div className='social'>
            <SocialButton icon="facebook" />
            <SocialButton icon="github" />
            <SocialButton icon="linkedin" />
        </div>

        <div className='formulario'>
            <p>O usa tu email para registrarte</p>
            <Formulario handleFormError={handleFormError} />
        </div>

        <div className='alertas'>
            {alertText && <Alerts variant={alertVariant} text={alertText} />}
            {registroExitoso && (
            <Alerts variant="success" text="Cuenta registrada con éxito" />
        )}
        </div>

    </Stack>
    </>
  );
};

export default Registro;

import Alert from 'react-bootstrap/Alert';

const Alerts = ({ variant, text }) => {
  return (
    <>
      <Alert key={variant} variant={variant}>
        {text}
      </Alert>
    </>
  );
};

export default Alerts;

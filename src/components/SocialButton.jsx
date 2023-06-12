import Button from 'react-bootstrap/Button';

const SocialButton = ({ icon }) => {
  return (
    <>
    <Button variant="light">
        <i className={`fa-brands fa-${icon} fa-2xl`} />
    </Button>

    </>
  );
};

export default SocialButton;

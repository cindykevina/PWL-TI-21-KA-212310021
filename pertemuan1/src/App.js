import { useState } from 'react';
import { Button, Form, Modal, Alert } from 'react-bootstrap';

function App() {
  const [npm, setNpm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [showAlert, setshowAlert] = useState("false");
  const [showModal, setshowModal] = useState("false");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (npm.length > 10) {
      setshowAlert(true);
      return;
    }

    setshowModal(true);
  };

  const handleCloseModal = () => {
    setshowModal(false);
  };

  const calculateAge = () => {
    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  return(
    <div className="anjay min-vh-100 d-flex align-items-center">
      <div className='container'>
        <div className='p-5 bg-white shadow rounded-4 w-50 mx-auto'>
          <h2 className='text-center'>Personal Data Form</h2>
          
          {showAlert && (
            <Alert 
            variant="danger"
            onClose={() => setshowAlert(false)}
            dismissible
            >
              Maximum NPM number is 10 digits.
              <button 
              type="button"
              className='btn-close'
              onClick={() => setshowAlert(false)}>
              </button>
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">NPM</Form.Label>
              <Form.Control 
              style={{ backgroundColor:'' }}
              type="number"
              value={npm}
              onChange={(e) => {
                setNpm(e.target.value);
                setshowAlert(false);
              }}
              required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">FirstName</Form.Label>
              <Form.Control
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Middle Name</Form.Label>
              <Form.Control
                type="text"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Last Name</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Birthdate</Form.Label>
              <Form.Control
                type="date"
                required
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </Form.Group>

            <div className="text-center">
              <Button
                variant="primary"
                type="submit"
                size="lg"
                className="w-50 mt-3 fw-bold"
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Personal Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>NPM: {npm}</p>
          <p>
            Fullname: {firstName} {middleName} {lastName}
          </p>
          <p>Age: {calculateAge()}th</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;



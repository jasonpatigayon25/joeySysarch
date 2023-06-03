import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MDBFooter, MDBContainer} from 'mdb-react-ui-kit';

const styles = {
  pageContainer: {
    backgroundImage: "url('https://www.div-ide.com.au/wp-content/uploads/2022/10/The-upside-of-being-a-co-1024x470.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    margin: "0 auto",
  },
  container: {
    width: "400px",
    margin: "0 auto",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
};
const footerStyle = {
  backgroundColor: 'white',
};

function DeleteRecord() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home");
  };
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    


    if (email === '') {
      setErrorMessage('Please enter the email of the record to delete.');
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:8000/delete/${email}`);

      setEmail('');
      setErrorMessage('');

      alert('User deleted successfully.');
    } catch (error) {
      console.error('Error deleting record:', error);
      setErrorMessage('Failed to delete record. Please try again.');
    }
  };

  return (
    <Container>
      <div style={styles.pageContainer}>
        <div style={styles.container}>
          <div className="row">
            <div className="col-sm-12">
              <h2 className="heading" style={styles.heading}>
                DELETE ACCOUNT
              </h2>
              {errorMessage && <div className="error">{errorMessage}</div>}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    style={styles.input}
                  />
                </Form.Group>

                <Button
                  variant="danger"
                  type="submit"
                  style={styles.button}
                >
                  Delete Record
                </Button>
                <Button
                  onClick={handleButtonClick}
                  style={styles.button}
                >
                  Home
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <MDBFooter className="text-center py-3" style={footerStyle}>
        <MDBContainer>
          <p className="mb-0">
            &copy; 2023 Div-ide App. All rights reserved.
          </p>
        </MDBContainer>
      </MDBFooter>
    </Container>
  );
}

export default DeleteRecord;

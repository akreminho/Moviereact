import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulaire.css';
const Formulaire = () => {
  return (
    <div className='forms'>
      <Form className='formul' style={{ width: '50rem', paddingTop: '2rem'}} >
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="last-name" placeholder="Enter Full name" />
        <Form.Text className="text-muted">
        Please Insert your Full Name     

        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Formulaire

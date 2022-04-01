import React, { useState } from 'react'
import './ContactForm.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: {
      value: null,
      error: false
    },
    email: {
      value: null,
      error: false
    },
    message: {
      value: null,
      error: false
    }
  });

  const handleInputChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: {
        value: e.target.value,
        error: e.target.value ? false : true
      }
    }));
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    let hasError = false;

    for(const [key, value] of Object.entries(formData)) {
      setFormData(prev => ({
        ...prev,
        [key]: {
          ...value,
          error: value.value ? false : true
        }
      }));

      if(!value.value) hasError = true;
    }

    /* { TODO: handle form submit } */
    if(!hasError) {
      alert('form submit')
      console.log(formData)
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Form.Group
        className="mb-3"
        controlId="form-name"
        htmlFor="form-name"
      >
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder={formData.name.value}
          onChange={handleInputChange}
        />
        {formData.name.error && (
          <Form.Text className="text-danger">
            Name is required.
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="form-email"
        htmlFor="form-email"
      >
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder={formData.email.value}
          onChange={handleInputChange}
        />
        {formData.email.error && (
          <Form.Text className="text-danger">
            Email is required.
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="form-message"
        htmlFor="form-message"
      >
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          rows={3}
          placeholder={formData.message.value}
          onChange={handleInputChange}
        />
        {formData.message.error && (
          <Form.Text className="text-danger">
            Message is required.
          </Form.Text>
        )}
      </Form.Group>

      <Button type="submit">Submit</Button>
    </form>
  )
}

export default ContactForm
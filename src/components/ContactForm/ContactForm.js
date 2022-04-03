import React, { useState } from 'react'
import './ContactForm.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { submitContactForm } from '../../services/contactForm';

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [formMessage, setFormMessage] = useState(null);
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

  const handleFormSubmit = async (e) => {
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

    if(!hasError) {
      setSubmitting(true);
      setSent(true);

      submitContactForm(formData).then(result => {
        if(result) {
          setFormMessage("Thanks for reaching out! I will respond as soon as possible.");
        } else {
          setFormMessage("Could not send email at this time. Please contact me at <a href='mailto:josh@j0w0.com'>josh@j0w0.com</a> or through LinkedIn.");
        }
        setSubmitting(false);
      });
    }
  }

  return (
    <>
      {submitting ? (
        <p>Sending...</p>
      ) : (
        <>
          {formMessage && (
            <p dangerouslySetInnerHTML={{ __html: formMessage }}></p>
          )}

          {!sent && (
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

              <Button type="submit" className="mb-3">Submit</Button>
            </form>
          )}
        </>
      )}
    </>
  )
}

export default ContactForm
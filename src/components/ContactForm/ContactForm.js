import React, { useState } from 'react'

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
      <div>
        <label htmlFor="form-name">Name</label>
        <input
          type="text"
          name="name"
          id="form-name"
          placeholder={formData.name.value}
          onChange={handleInputChange}
        />
        {formData.name.error && <p className="error">Name is required.</p>}
      </div>

      <div>
        <label htmlFor="form-email">Email</label>
        <input
          type="text"
          name="email"
          id="form-email"
          placeholder={formData.email.value}
          onChange={handleInputChange}
        />
        {formData.email.error && <p className="error">Email is required.</p>}
      </div>

      <div>
        <label htmlFor="form-message">Message</label>
        <textarea
          name="message"
          id="form-message"
          onChange={handleInputChange}
        >
          {formData.message.value}
        </textarea>
        {formData.message.error && <p className="error">Message is required.</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm
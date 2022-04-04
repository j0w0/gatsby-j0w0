import React from 'react'
import { Link } from 'gatsby'

const ContactCTA = ({ contactPage = false }) => {
  return (
    <div className="mb-2 mb-md-0">
      <h3>How can I help?</h3>

      <div className="d-grid gap-2 d-xl-block">
        {!contactPage && (
          <Link to="/contact" className="btn btn-primary me-xl-2">
            Contact Me
          </Link>
        )}
        <button className="btn btn-primary">View Resume</button>
      </div>
    </div>
  )
}

export default ContactCTA
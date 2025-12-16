import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Contact Page</h1>
      <p>Get in touch with us!</p>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/" style={{ margin: '0 1rem' }}>Go to Home</Link>
        <Link to="/about" style={{ margin: '0 1rem' }}>Go to About</Link>
      </div>
    </div>
  )
}

export default Contact

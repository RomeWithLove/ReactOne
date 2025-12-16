import { Link } from 'react-router-dom'

function About() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>About Page</h1>
      <p>This is the about page showcasing React Router DOM navigation.</p>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/" style={{ margin: '0 1rem' }}>Go to Home</Link>
        <Link to="/contact" style={{ margin: '0 1rem' }}>Go to Contact</Link>
      </div>
    </div>
  )
}

export default About

import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/">Go back to Home</Link>
      </div>
    </div>
  )
}

export default NotFound

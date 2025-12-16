import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to React One</h1>
      <p>A React.js project with Vite and React Router DOM</p>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/about" style={{ margin: '0 1rem' }}>Go to About</Link>
        <Link to="/contact" style={{ margin: '0 1rem' }}>Go to Contact</Link>
      </div>
    </div>
  )
}

export default Home

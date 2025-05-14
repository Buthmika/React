import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import ListUser from './components/ListUser'

function App() {
  return (
    <>
      <h1>CRUD APP</h1>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">List User</Link></li>
            <li><Link to="/create">Create User</Link></li>
            <li><Link to="/edit">Edit User</Link></li>
          </ul>
        </nav>
        <ListUser></ListUser>

        <Routes>
          <Route path="/" element={<h2></h2>} />
          <Route path="/create" element={<h2>Create User</h2>} />
          <Route path="/edit" element={<h2>Edit User</h2>} />
        </Routes>
      </Router>
    </>
  )
}

export default App

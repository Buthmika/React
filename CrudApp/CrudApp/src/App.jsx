import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
      <h1>CRUD APP</h1>
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">List User</Link>
          </li>
          <li>
            <Link to="/create">Create User</Link>
          </li>
          <li>
            <Link to="/edit">Edit User</Link>
          </li>
        </ul>
      </nav>
      </BrowserRouter>
    </>

    
    
  )
}

export default App

import './App.css'
import Users from './Components/Users/Users'

const usersPromise = fetch('http://localhost:3000/users')
  .then((response) => response.json())




function App() {

  return (
    <>
      <h1>User Management Application</h1>

      <Users usersPromise={usersPromise}></Users>
    </>
  )
}

export default App

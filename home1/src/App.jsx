import {NavLink, Route, Routes } from 'react-router-dom';
import UserList from './Components/UserList';
import Detail from './Components/Detail';




function App() {
  return (
    <div className='App'>
  <nav>
    <NavLink to='/'>UserList</NavLink>
  </nav>
    <Routes>
      <Route path="/" element ={<UserList/>} />
      <Route path="/user/:id" element ={<Detail/>} />
    </Routes>
  </div>
  )
}

export default App;
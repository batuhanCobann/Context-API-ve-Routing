import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './componets/Header'
import Degismez from './Degismez/Degismez'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Degismez />
    </>
  )
}

export default App

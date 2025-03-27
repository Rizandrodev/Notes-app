
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Login from './components/pages/Login/login'
import Signup from './components/pages/Signup/Signup'

const routes=(
  <Router>
    <Routes>
      <Route path='/dashboard' exact element={<Home/>} />
      <Route path='/login' exact element={<Login/>} />
      <Route path='/signup' exact element={<Signup/>} />

    </Routes>
  </Router>
)
function App() {


  return (
    <div>
        {routes}
    </div>
  )
}

export default App

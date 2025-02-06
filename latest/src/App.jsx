import React from 'react'
import Login from './pages/Login.jsx'
import Dash from './pages/Dash.jsx'
import Curr from './pages/Curr.jsx'
import Update from './pages/Update.jsx'
import Predict from './pages/Predict.jsx'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/dashboard' element={<Dash></Dash>}></Route>
          <Route path='/dashboard/current_report' element={<Curr></Curr>}></Route>
          <Route path='/dashboard/update' element={<Update></Update>}></Route>
          <Route path='dashboard/predict' element={<Predict></Predict>}></Route>
        </Routes>
      </Router>
  )
}

export default App;
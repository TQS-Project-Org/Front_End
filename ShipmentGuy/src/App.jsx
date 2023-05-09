import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './pages/Login/Login';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage/HomePage';

function App() {
  

  return (
    <Router>
			<Routes>
				{/* Rotas não Autenticadas */}
				<Route path="/" element={<Login />} />
				{/* Rotas Já Autenticadas*/}
				{/* <Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
				</Route> */}
			</Routes>
    </Router>
  )
}

export default App

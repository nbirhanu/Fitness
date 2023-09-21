import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import './App.css'
import Navbar from './Components/Navbar'
import Homepage from './pages/Homepage'
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './Components/Footer'
import { AuthProvider } from './Components/AuthContext'

const App = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
					<Navbar />
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/exercise/:id" element={<ExerciseDetail />} />
					</Routes>
					<Footer />
				</Box>
			</AuthProvider>
		</BrowserRouter>
	)
}

export default App

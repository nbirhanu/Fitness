import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import './App.css'
import Navbar from './Components/Navbar'
import Homepage from './pages/Homepage'
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './Components/Footer'

const App = () => {
	return (
		<BrowserRouter>
			<Box>
				<Navbar />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/exercise/:id" element={<ExerciseDetail />} />
				</Routes>
				<Footer />
			</Box>
		</BrowserRouter>
	)
}

export default App

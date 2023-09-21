import React from 'react'
import { Box } from '@mui/material'
import Herobanner from '../Components/Herobanner'
import SearchExercise from '../Components/SearchExercise'
import Exercise from '../Components/Exercise'

const Homepage = () => {
	return (
		<Box>
			<Herobanner />
			<SearchExercise />
			<Exercise />
		</Box>
	)
}

export default Homepage

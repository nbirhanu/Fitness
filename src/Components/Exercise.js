// import React, { useState, useEffect } from 'react'
import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Typography, Stack } from '@mui/material'
import { useAuth } from './AuthContext'
// import { fetchData, exerciseOption } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercise = () => {
	// const { exercise, setExercise, bodyPart } = useAuth()
	const { exercise } = useAuth()
	const [currentpage, setCurrentPage] = useState(1)
	//
	// useEffect(() => {
	// 	const fetchExercisesData = async () => {
	// 		let exercisesData = []

	// 		if (bodyPart === 'all') {
	// 			exercisesData = await fetchData(
	// 				'https://exercisedb.p.rapidapi.com/exercises',
	// 				exerciseOption
	// 			)
	// 		} else {
	// 			exercisesData = await fetchData(
	// 				`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
	// 				exerciseOption
	// 			)
	// 		}

	// 		setExercise(exercisesData)
	// 	}

	// 	fetchExercisesData()
	// }, [bodyPart])
	//
	const exercisesPerPage = 9
	const indexOfLastExercie = exercisesPerPage * currentpage
	const indexOfFirstExercise = indexOfLastExercie - exercisesPerPage
	const currentExercise = exercise.slice(indexOfFirstExercise, indexOfLastExercie)
	//
	const pagination = function (e, value) {
		setCurrentPage(value)
		window.scrollTo({ top: 1800, behavior: 'smooth' })
	}
	//

	//
	return (
		<Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
			<Typography
				textAlign="center"
				variant="h4"
				fontWeight="bold"
				sx={{ fontSize: { lg: '44px', xs: '30px' } }}
				mb="46px">
				show result
			</Typography>
			<Stack
				direction="row"
				sx={{ gap: { lg: '107px', xs: '50px' } }}
				flexWrap="wrap"
				justifyContent="center">
				{currentExercise.map((exercise, index) => (
					<ExerciseCard key={index} exercise={exercise} />
				))}
			</Stack>
			<Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
				{exercise.length > 9 && (
					<Pagination
						color="standard"
						shape="rounded"
						defaultpage={1}
						count={Math.ceil(exercise.length / exercisesPerPage)}
						page={currentpage}
						onChange={pagination}
						size="large"
						boundaryCount={3}
					/>
				)}
			</Stack>
		</Box>
	)
}

export default Exercise

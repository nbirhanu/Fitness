import React from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchData, exerciseOption, youtubeOptions } from '../utils/fetchData'
import DetailExercise from '../Components/DetailExercise'
import ExerciseVideo from '../Components/ExerciseVideo'
import Similarexercises from '../Components/Similarexercises'
const ExerciseDetail = () => {
	const [exerciseDetail, setExercisedetail] = useState({})
	const [youtubeVideo, setYoutubeVideo] = useState([])
	const { id } = useParams()

	//
	useEffect(
		function () {
			const fetchExerciseDetail = async function () {
				const exerciseDetailData = await fetchData(
					`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
					exerciseOption
				)
				console.log(exerciseDetailData)
				setExercisedetail(exerciseDetailData)
				//
				const youtubeExerciseData = await fetchData(
					`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name}`,
					youtubeOptions
				)
				setYoutubeVideo(youtubeExerciseData.contents)
				//
			}
			fetchExerciseDetail()
		},
		[id]
	)
	//
	return (
		<Box>
			<DetailExercise exerciseDetail={exerciseDetail} />
			<ExerciseVideo youtubeVideo={youtubeVideo} name={exerciseDetail.name} />
			<Similarexercises />
		</Box>
	)
}

export default ExerciseDetail

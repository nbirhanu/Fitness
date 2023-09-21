import React from 'react'
import { Stack, Box, Typography, TextField, Button, colors } from '@mui/material'
import { useState, useEffect } from 'react'
import { fetchData, exerciseOption } from '../utils/fetchData'
import HorizontalScroll from './HorizontalScroll'
import { useAuth } from './AuthContext'
const SearchExercise = () => {
	const { search, setSearch, exercise, setExercise, bodyParts, setBodyParts } = useAuth()

	//
	useEffect(function () {
		const fetchBodyPartData = async function () {
			const bodyPartData = await fetchData(
				`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,
				exerciseOption
			)
			setBodyParts(['all', ...bodyPartData])
		}
		fetchBodyPartData()
	}, [])
	//
	const handleSearch = async function () {
		if (search) {
			const exerciseData = await fetchData(
				`https://exercisedb.p.rapidapi.com/exercises`,
				exerciseOption
			)

			const searchedExercise = exerciseData.filter(
				exercise =>
					exercise.name.toLowerCase().includes(search) ||
					exercise.target.toLowerCase().includes(search) ||
					exercise.equipment.toLowerCase().includes(search) ||
					exercise.bodyPart.toLowerCase().includes(search)
			)
			setSearch('')
			setExercise(searchedExercise)
		}
	}
	return (
		<Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
			<Typography
				fontWeight={700}
				padding="20px"
				textAlign="center"
				sx={{ fontSize: { lg: '44px', xs: '30px' } }}>
				Awesome Exercise You <br /> Should Know
			</Typography>

			<Box position="relative">
				<TextField
					sx={{
						input: { fontWeight: '700', borderRadius: '4px', border: 'none' },
						width: { lg: '800px', xs: '350px' },
						background: '#fff',
						borderRadius: '40px',
					}}
					value={search}
					onChange={e => setSearch(e.target.value.toLowerCase())}
					placeholder="Search Exercise"
					type="text"
				/>
				<Button
					onClick={handleSearch}
					className="search-btn"
					sx={{
						backgroundColor: '#FF2625',
						color: '#fff',
						position: 'absolute',
						top: '3px',
						width: { lg: '175px', xs: '80' },
						fontSize: { lg: '20px', xs: '14px' },
					}}>
					Search
				</Button>
			</Box>
			<Box sx={{ position: 'relative', width: '100%', padding: '20px' }}>
				<HorizontalScroll />
			</Box>
		</Stack>
	)
}

export default SearchExercise

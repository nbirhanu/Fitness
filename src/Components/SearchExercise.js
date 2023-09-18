import React from 'react'
import { Stack, Box, Typography, TextField, Button, colors } from '@mui/material'
import { useState, useEffect } from 'react'
const SearchExercise = () => {
	const [search, setSearch] = useState('')
	const handleSearch = async function () {
		if (search) {
			// const exerciseData = await fetchData()
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

			<Box position="relative" mb="172px">
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
		</Stack>
	)
}

export default SearchExercise

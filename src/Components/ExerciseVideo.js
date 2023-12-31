import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

const ExerciseVideo = ({ youtubeVideo, name }) => {
	if (!youtubeVideo.length) return <h2>loading...</h2>
	return (
		<Box>
			<Typography
				sx={{ fontSize: { lg: '44px', xs: '25px' } }}
				fontWeight={700}
				color="#000"
				mb="33px">
				Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise
				videos
			</Typography>
			<Stack
				sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }}
				justifyContent="flex-start"
				flexWrap="wrap"
				alignItems="center">
				{youtubeVideo?.slice(0, 3)?.map((item, index) => (
					<a
						key={index}
						className="exercise-video"
						href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
						target="_blank"
						rel="noreferrer">
						<img
							style={{ borderTopLeftRadius: '20px' }}
							src={item.video.thumbnails[0].url}
							alt={item.video.title}
						/>
						<Box>
							<Typography
								sx={{ fontSize: { lg: '16px', xs: '8px' } }}
								fontWeight={600}
								color="#000">
								{item.video.title}
							</Typography>
							<Typography fontSize="14px" color="#000">
								{item.video.channelName}
							</Typography>
						</Box>
					</a>
				))}
			</Stack>
		</Box>
	)
}

export default ExerciseVideo

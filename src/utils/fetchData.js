// url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
export const exerciseOption = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
	},
}
export const youtubeOptions = {
	method: 'GET',

	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
	},
}

export const fetchData = async function (url, option) {
	const res = await fetch(url, option)
	const data = await res.json()
	return data
}

import React, { useState, useEffect } from 'react'
import Title from './Components/Title'
import SearchMovies from './Components/SearchMovies'
import TrendingMovies from './Components/TrendingMovies'
import './styles.css'

export default function App() {
	const [trending, setTrending] = useState([])

	useEffect(() => {
		const data = async () => {
			const trendingUrl = `https://api.themoviedb.org/3/search/trending?api_key=27dafd812c1e71b956120968116eaf3f&language=en-US&media_type=tv&time_window=day`

			let response = await fetch(trendingUrl)
			let data = await response.json()

			setTrending(data.results)
		}
		data()
	}, [setTrending])

	return (
		<div className="container">
			<Title />
			<SearchMovies />
			<TrendingMovies trending={trending} />
		</div>
	)
}

import React, { useState } from 'react'
import MovieCard from './MovieCard'

export default function SearchMovies() {
	// Track states: input query, movies
	const [query, setQuery] = useState('')
	const [movies, setMovies] = useState([])
	async function searchMovies(e) {
		// prevent page reload
		e.preventDefault()

		// connect to themovieDb
		const url = `https://api.themoviedb.org/3/search/movie?api_key=27dafd812c1e71b956120968116eaf3f&language=en-US&query=${query}`

		try {
			// use fetch api if you're making a GET request to return a promise
			const res = await fetch(url)
			const data = await res.json()

			// update movies
			setMovies(data.results)
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<>
			<form className="form" onSubmit={searchMovies}>
				<label htmlFor="query" className="label">
					Movie Name
				</label>
				<input
					type="text"
					className="input"
					name="query"
					placeholder="Enter a movie to search"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit" className="button">
					Search
				</button>
			</form>
			<div className="card-list">
				{movies
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						<MovieCard movie={movie} key={movie.id} />
					))}
			</div>
		</>
	)
}

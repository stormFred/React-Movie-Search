import React from 'react'
import Title from './Components/Title'
import SearchMovies from './Components/SearchMovies'
import './styles.css'

export default function App() {
	return (
		<div className="container">
			<Title />
			<SearchMovies />
		</div>
	)
}

import React from 'react'

export default function TrendingMovies({ trending }) {
	return (
		<>
			<h2 className="trending--heading">Trending</h2>
			<div className="trending">
				{trending.map((trend) => (
					<div className="trending--movie" trend={trend} key={trend.id}>
						<div>
							<img
								className="trend--image"
								src={`https://image.tmdb.org/t/p/w300/${trend.poster_path}`}
								alt={`${trend.title} poster`}
							/>
							<div className="trend--content">
								<h3 className="trend--title">{trend.title || trend.name}</h3>
								<p>
									<small>RELEASE DATE: {trend.release_date}</small>
								</p>
								<p>
									<small>RATING: {trend.vote_average}</small>
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

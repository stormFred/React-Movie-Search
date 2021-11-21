### Links

- GitHub URL: (https://github.com/stormFred/React-Movie-Search)
- Live Site URL:(https://searchmovieswithreact.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
<!-- - [Netlify] and [GitHub] pages for continous deployment -->

### What I learned. React Js

- How to use useEffect to render changes when a state updates:

```React js
    const [trending, setTrending] = useState([])

	useEffect(() => {
		const data = async () => {
			...
			setTrending(data.results)
		}
		data()
	}, [setTrending])

```

- using async/await to fetch data from an api asynchronously:

```React js

  const data = async () => {
			const trendingUrl = `...`

			let response = await fetch(trendingUrl)
			let data = await response.json()

			setTrending(data.results)
  }
  ..
```

-

### Continued development

-Use React Router to add more pages
-Filter the incoming data so you can search to tv shows or movies
-Refactor the naming of the componets to make them more re-usable

## Author

- Twitter - [@FredStorm](https://www.twitter.com/stormFred)

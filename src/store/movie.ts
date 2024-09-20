import { create } from 'zustand'
import type { Movie } from '@/types'
import axios from 'axios'

interface MovieState {
	movies: Movie[]
	series: Movie[]
	fetchMovies: () => void
}

export const useConsumerStore = create<MovieState>((set) => {
	const initialState = {
		movies: [],
		series: [],
	}

	const functions = {
		fetchMovies: async () => {
			await axios
				.get('http://localhost:3000/movies.json')
				.then((response) => {
					const all: Movie[] = response.data.entries
					const movies = all
						.filter(
							(content) =>
								content.programType === 'movie' && content.releaseYear > 2010,
						)
						.sort((a, b) => a.title.localeCompare(b.title))
					const series = all
						.filter(
							(content) =>
								content.programType === 'series' && content.releaseYear > 2010,
						)
						.sort((a, b) => a.title.localeCompare(b.title))
					set({ movies, series })
				})
				.catch((error) => {
					console.error(error)
				})
		},
	}

	return {
		...initialState,
		...functions,
	}
})

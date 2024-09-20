import type { Movie } from '@/types'
import { useEffect, useState } from 'react'

interface PaginatedData {
	entries: Movie[]
	page: number
	limit: number
	total: number
}

export function usePaginate(url: string, type: string, query: URLSearchParams) {
	const [data, setData] = useState<PaginatedData>({
		entries: [],
		page: 1,
		limit: 0,
		total: 0,
	})

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(`${url}?${query.toString()}`)
			const json = await res.json()
			console.log('json', json)

			const currentPage: number = Number(query.get('page')) || 1
			const limit: number = Number(query.get('limit')) || 10
			const start = (currentPage - 1) * limit
			const end = start + limit

			const entries = json.entries
				.filter(
					(content: Movie) =>
						content.programType === 'movie' && content.releaseYear > 2010,
				)
				.sort((a: Movie, b: Movie) => a.title.localeCompare(b.title))

			const total = Math.ceil(entries.length / limit)

			setData({
				entries: entries.slice(start, end),
				page: Number(currentPage),
				limit: limit,
				total,
			})

			console.log('data', data)
		}

		fetchData()
	}, [url, query.toString()])

	return {
		entries: data.entries,
		page: data.page,
		limit: data.limit,
		total: data.total,
	}
}

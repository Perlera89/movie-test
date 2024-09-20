import MoviesList from '@/components/movies'
import { usePaginate } from '@/hooks/usePaginate'
import { useSearchParams, useNavigate } from 'react-router-dom'

export default function Page() {
	const [searchParams] = useSearchParams()
	const navigate = useNavigate()

	const { entries, page, total } = usePaginate(
		'http://localhost:3000/movies.json',
		'movies',
		searchParams,
	)

	const handlePagination = (page: number) => {
		searchParams.set('page', page.toString())
		navigate({ search: searchParams.toString() })
	}

	return (
		<>
			{entries && entries.length > 0 ? (
				<>
					<MoviesList
						movies={entries}
						title="Películas"
						total={total}
						page={page}
						onPaginate={handlePagination}
					/>
				</>
			) : (
				<p className="text-center h-screen text-2xl">No hay películas</p>
			)}
		</>
	)
}

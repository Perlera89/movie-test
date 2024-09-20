import { Button } from '@nextui-org/button'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useConsumerStore } from '@/store/movie'
import { Image } from '@nextui-org/react'
import type { Movie } from '@/types'
import { Link } from 'react-router-dom'

interface MovieProps {
	title: string
	link: string
	movies: Movie[]
}

function Carrousel({ movies, title, link }: MovieProps) {
	return (
		<div className="mb-16">
			<div className="flex justify-between items-center mb-8 ">
				<h2 className="text-4xl">{title}</h2>
				<Link to={link}>
					<Button variant="faded">Ver todas</Button>
				</Link>
			</div>

			{movies.length > 0 ? (
				<Splide
					options={{
						perPage: 5,
						perMove: 1,
						gap: '1rem',
						pagination: false,
						breakpoints: {
							640: {
								perPage: 2,
							},
							768: {
								perPage: 3,
							},
							1024: {
								perPage: 4,
							},
						},
					}}
				>
					{movies.map((movie) => (
						<SplideSlide key={movie.title}>
							<div className="flex flex-col gap-2 w-full">
								<Image
									isZoomed
									alt={movie.title}
									className="object-cover rounded-xl"
									src={movie.images.posterArt.url}
									width={350}
								/>
								<h3 className="text-lg font-semibold">{movie.title}</h3>
							</div>
						</SplideSlide>
					))}
				</Splide>
			) : (
				<p>No hay contenido disponible</p>
			)}
		</div>
	)
}

export default function Page() {
	const movies = useConsumerStore((state) => state.movies)
	const series = useConsumerStore((state) => state.series)
	const filteredMovies = movies.slice(0, 10)
	const filteredSeries = series.slice(0, 10)
	return (
		<>
			<Carrousel movies={filteredMovies} title="Películas" link="/movies" />
			<Carrousel movies={filteredSeries} title="Series" link="/series" />
		</>
	)
}

import SearchItem from '@/components/search'
import SelectComponent from './select'
import type { Movie } from '@/types'
import CardItem from './card'
import { Image, Pagination } from '@nextui-org/react'
import { useDisclosure } from '@nextui-org/react'
import ModalItem from './modal'
import { useState } from 'preact/hooks'

interface MoviesProps {
	title: string
	total: number
	page: number
	onPaginate: (page: number) => void
	movies: Movie[]
}

export default function MoviesList({
	title,
	movies,
	total,
	page,
	onPaginate,
}: MoviesProps) {
	console.log(movies)
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const [movie, setMovie] = useState<Movie | null>(null)

	const handleClick = (movie: Movie) => {
		setMovie(movie)
	}

	return (
		<div>
			<div className="flex justify-between items-center mb-8">
				<h2 className="text-4xl">{title}</h2>

				<div className="flex gap-2 items-center w-1/3">
					<SearchItem />
					<SelectComponent />
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
				{movies.map((movie) => (
					<CardItem
						key={movie.title}
						movie={movie}
						onOpen={onOpen}
						onClick={() => handleClick(movie)}
					/>
				))}
			</div>

			<Pagination
				showControls
				total={total}
				page={page}
				className="flex justify-center mt-4"
				onChange={onPaginate}
			/>

			<ModalItem title={movie?.title} isOpen={isOpen} onOpenChange={onOpenChange}>
				{movie && (
					<div className="p-4 rounded-lg">
						<div className="flex flex-col md:flex-row gap-8">
							<Image
								alt={movie.title}
								className="object-cover rounded-xl"
								src={movie.images.posterArt.url}
							/>
							<div className="flex flex-col justify-between">
								<div>
									<div className="flex gap-2 mb-2">
										<p className="text-white font-semibold">Tipo:</p>
										<p className="text-gray-300">
											{movie.programType === 'movie' ? 'Película' : 'Serie'}
										</p>
									</div>
									<div className="flex gap-2 mb-2">
										<p className="text-white font-semibold">Fecha de salida:</p>
										<p className="text-gray-300">{movie.releaseYear}</p>
									</div>
								</div>
								<div className="mt-4">
									<p className="text-white font-semibold">Descripción:</p>
									<p className="text-gray-300 mt-2">{movie.description}</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</ModalItem>
		</div>
	)
}

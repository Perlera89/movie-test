import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'
import type { Movie } from '@/types'

interface CardProps {
	movie: Movie
	onOpen: () => void
	onClick: () => void
}

export default function CardItem({ movie, onClick, onOpen }: CardProps) {
	const handleClick = () => {
		onOpen()
		onClick()
	}

	return (
		<Card className="py-4" key={movie.title}>
			<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
				<h4 className="font-bold text-large">{movie.title}</h4>
				<p className="text-tiny uppercase font-bold">{movie.releaseYear}</p>
			</CardHeader>
			<CardBody className="py-4 cursor-pointer" onClick={handleClick}>
				<Image
					isZoomed
					alt="Card background"
					className="object-cover rounded-xl w-full"
					src={movie.images.posterArt.url}
					width={270}
				/>
			</CardBody>
		</Card>
	)
}

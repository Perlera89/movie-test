import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@nextui-org/react'

export default function ErrorPage() {
	const location = useLocation()

	return (
		<div className="flex flex-col gap-4 items-center justify-center h-screen text-center">
			<h2 class="text-4xl font-bold">¡Oops! Algo salió mal</h2>
			<img width={400} src="/not-found.svg" alt="Error" />
			<p class="w-[400px]">
				No pudimos cargar la página que estás buscando. Compruba la URL y vuelve a
				intentar
			</p>
			<p class="text-blue-400">URL: {location.pathname}</p>
			<Link to="/">
				<Button color="primary">Página principal</Button>
			</Link>
		</div>
	)
}

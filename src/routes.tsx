import { createBrowserRouter } from 'react-router-dom'

// pages
import MainPage from '@/layout/main'
import Movies from '@/app/movies/page'
import Series from '@/app/series/page'
import ErrorPage from './app/error-page'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/movies',
				element: <Movies />,
			},
			{
				path: '/series',
				element: <Series />,
			},
		],
	},
])

export default router

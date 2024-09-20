import Header from '@/layout/header'
import { Outlet, useLocation } from 'react-router-dom';
import Home from '@/app/page'
import { useConsumerStore } from '@/store/movie'
import { useEffect } from 'preact/hooks'

export default function MainPage(): React.ReactElement {
    const fetchMovies = useConsumerStore((state) => state.fetchMovies)

    useEffect(() => {
        const fetch = () => {
            fetchMovies()
        }

        fetch()
    }, [])

    const location = useLocation();
    const path = location.pathname;

    return <>
        <Header />
        <main className='p-8'>
            {
                path === '/' ? <Home /> : <Outlet />
            }
        </main>
    </>
}
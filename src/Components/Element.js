import React, { lazy } from 'react';
import Home from './Home/Home';
import { useRoutes, Navigate } from 'react-router-dom';

const LazyHome = lazy(() => import('../Components/Home/Home1'));
const LazyPokemon = lazy(() => import('../Components/Pokemon/Pokemon'));
const LazyPokemonDetails = lazy(() => import('../Components/Pokemon/PokemonDetails/PokemonDetails'));

function Element() {

    const routes = useRoutes([
        {
            path: '/',
            element: <Home />,
            children: [
                {
                    path: '',
                    element: <Navigate replace to="home" />,
                },
                {
                    path: 'home',
                    element: <LazyHome />,
                },
                {
                    path: 'pokemon',
                    element: <LazyPokemon />
                    
                },
                {
                    path: 'pokemon-details/:ID',
                    element: <LazyPokemonDetails />
                },
            ]
        },
    ]);

    return routes;
}

export default Element;

import React, { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Home from './Home/Home';

const LazyHome = lazy(() => import('../Components/Home/Home1'));
const LazyPokemon = lazy(() => import('../Components/Pokemon/Pokemon'));
const LazyPokemonDetails = lazy(() => import('../Components/Pokemon/PokemonDetails/PokemonDetails'));
const LazyCategoriesDetails = lazy(() => import('../Components/Categories/CategoriesDetails/CategoriesDetails'))

function Element({ searchValue }) {

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
                    element: <LazyPokemon searchValue={searchValue} />

                },
                {
                    path: 'pokemon-details/:id',
                    element: <LazyPokemonDetails />
                },
                {
                    path: 'categories/:category/:id',
                    element: <LazyCategoriesDetails />
                },
            ]
        },
    ]);

    return routes;
}

export default Element;

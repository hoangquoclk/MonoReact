import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { RootPage } from '../pages';
import { privateRouter } from './privateRouter';
import { publicRouter } from './publicRouter';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootPage />}>
            {publicRouter}
            {privateRouter}
        </Route>,
    ),
);

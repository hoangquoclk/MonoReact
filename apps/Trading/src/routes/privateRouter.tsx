import { Navigate, Route } from 'react-router-dom';
import { RoutePath } from '../consts';
import { Home } from '../pages/Home';
import { News } from '../pages/News';
import { DetailTicker } from '../component/DetailTicker';

export const privateRouter = (
    <Route>
        <Route index element={<Navigate to={RoutePath.home} />} />
        <Route path={RoutePath.home} element={<Home />} />
        <Route path={RoutePath.news} element={<News />} />
        <Route path={RoutePath.tickerDetail} element={<DetailTicker />} />
    </Route>
);

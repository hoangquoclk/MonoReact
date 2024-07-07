import { Route } from 'react-router-dom';
import { RoutePath } from '../consts';

export const publicRouter = (
    <Route>
        <Route path={RoutePath.login} element={<>Login</>} />
    </Route>
);

import { RouterProvider } from 'react-router-dom';
import { router } from '../routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '../pages/ErrorBoundary';
import { DAY } from '../consts/time';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: DAY,
        },
    },
});

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
                <RouterProvider router={router} />
            </ErrorBoundary>
        </QueryClientProvider>
    );
}

export default App;

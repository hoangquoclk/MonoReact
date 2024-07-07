import { useQuery } from '@tanstack/react-query';
import { getMarketExchangeInfo } from '../../services/binance';
import { KeyQueries } from '../../consts/key-queries';
import { DAY } from '../../consts/time';

export const useGetMarketExchangeInfo = () => {
    return useQuery({
        queryKey: [KeyQueries.GetMarketExchangeInfo],
        queryFn: async () => {
            const response = await getMarketExchangeInfo({});
            return response?.data;
        },
        retry: false,
        staleTime: DAY,
        refetchOnWindowFocus: false,
    });
};

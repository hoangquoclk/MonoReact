import { AxiosRequestConfig } from 'axios';
import { MarketApi } from '@service/binance';

export const getMarketExchangeInfo = ({
    symbol,
    symbols,
    permissions,
    options,
}: {
    symbol?: string;
    symbols?: string;
    permissions?: string;
    options?: AxiosRequestConfig;
}) => {
    const market = new MarketApi();
    return market.apiV3ExchangeInfoGet(symbol, symbols, permissions, options);
};

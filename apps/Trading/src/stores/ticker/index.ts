import { create } from 'zustand';
import { InlineResponse2001, InlineResponse2001Symbols } from '@service/binance';
import { groupBy, unionBy } from 'lodash';

type State = {
    tickers: Record<string, Array<InlineResponse2001Symbols>>[];
    baseAssets: Array<InlineResponse2001Symbols>;
};

type Action = {
    updateTickers: (tickers: InlineResponse2001) => void;
};

export const useTickerStore = create<State & Action>((set) => ({
    tickers: [],
    baseAssets: [],
    updateTickers: (exchangeInfo: InlineResponse2001) =>
        set(() => {
            const tickersTemp = groupBy(exchangeInfo.symbols, 'quoteAsset');
            const baseAssetsTemp: Array<InlineResponse2001Symbols> = unionBy(exchangeInfo.symbols, 'baseAsset');
            return {
                tickers: { ...tickersTemp },
                baseAssets: [...baseAssetsTemp],
            };
        }),
}));

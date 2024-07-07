import { IJsonModel, Layout, Model, TabNode } from 'flexlayout-react';
import 'flexlayout-react/style/light.css';
import React, { useCallback, useEffect, useRef } from 'react';
import { useGetMarketExchangeInfo } from '../../hooks/binance';
import { useTickerStore } from '../../stores/ticker';
import { DetailTicker } from '../../component/DetailTicker';
import { Portfolio } from '../../component/Portfolio';
import { MenuLeftSide } from '../../component';
import { LeftMenuEnum } from '../../consts';
import { Box } from '@mui/material';
import { v4 as uuid } from 'uuid';

const json: IJsonModel = {
    global: {
        tabEnableFloat: true,
        tabSetMinWidth: 100,
        tabSetMinHeight: 100,
        borderMinSize: 100,
    },
    borders: [
        {
            type: 'border',
            location: 'left',
            children: [
                {
                    type: 'tab',
                    id: uuid(),
                    name: LeftMenuEnum.leftMenu,
                    component: LeftMenuEnum.leftMenu,
                    enableClose: false,
                },
            ],
        },
    ],
    layout: {
        type: 'row',
        id: 'row-default',
        children: [],
    },
};

const model = Model.fromJson(json);

export const Home = () => {
    const layoutRef = useRef<any>();

    const addLayoutByType = useCallback((type: LeftMenuEnum) => {
        if (type) {
            layoutRef?.current.addTabWithDragAndDrop('Category', {
                type: 'tab',
                component: type,
                name: type,
            });
        }
    }, []);

    const factory = (node: TabNode) => {
        const component = node.getComponent();
        if (component === LeftMenuEnum.leftMenu) {
            return <MenuLeftSide addLayoutByType={addLayoutByType} />;
        }
        if (component === LeftMenuEnum.priceChart) {
            return <DetailTicker />;
        }
        if (component === LeftMenuEnum.portfolio) {
            return <Portfolio />;
        }
    };

    const { data } = useGetMarketExchangeInfo();
    const { updateTickers } = useTickerStore();

    useEffect(() => {
        if (data) {
            updateTickers(data);
        }
    }, [JSON.stringify(data)]);

    return (
        <Box
            sx={{
                height: '100%',
                '.flexlayout__layout': {
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                },
                '.flexlayout__tab': {
                    padding: '4px 8px',
                },
            }}
        >
            <Layout model={model} factory={factory} ref={layoutRef} />
        </Box>
    );
};

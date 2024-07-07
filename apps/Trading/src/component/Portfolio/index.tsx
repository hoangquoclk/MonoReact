import { useTickerStore } from '../../stores/ticker';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { getRowsData } from '../../utils';
import { InlineResponse2001Symbols } from '@service/binance';

const columns: GridColDef<InlineResponse2001Symbols>[] = [
    {
        field: 'baseAsset',
        headerName: 'Ticker',
        width: 150,
        editable: false,
        resizable: false,
    },
];

export const Portfolio = () => {
    const { baseAssets } = useTickerStore();

    const rows = getRowsData(baseAssets);

    console.log('baseAssets', baseAssets);
    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 100,
                        },
                    },
                }}
                pageSizeOptions={[100]}
                disableRowSelectionOnClick
            />
        </Box>
    );
};

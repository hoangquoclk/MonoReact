import { v4 as uuid } from 'uuid';

export const getRowsData = (rowsData: Array<any> | undefined) => {
    if (!rowsData) return [];
    return rowsData?.map((item) => ({ ...item, id: uuid() }));
};

import React, { FC } from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { LeftMenuEnum } from '../consts';

export const MenuLeftSide: FC<{ addLayoutByType: (type: LeftMenuEnum) => void }> = ({ addLayoutByType }) => {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton onMouseDown={() => addLayoutByType(LeftMenuEnum.portfolio)}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Portfolio" />
                </ListItemButton>
                <ListItemButton onMouseDown={() => addLayoutByType(LeftMenuEnum.priceChart)}>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItemButton>
            </List>
        </Box>
    );
};

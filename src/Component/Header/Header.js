
import React, { useContext } from 'react';
import { InfoContext } from '../../store/InfoContext';
import CustomButton from '../CustomButton/CustomButton';
import { Typography, Stack } from '@mui/material';

const Header = () => {

    const context = useContext(InfoContext);
    return (
        <div>
            <Stack direction="row" 
                justifyContent="flex-end"
                alignItems="center">
                <Typography xs={12} gutterBottom variant="subtitle2" className="textHeader">
                    Lista de Pessoas, {context.info}
                </Typography>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <CustomButton onClick={() => context.onChangeInfo('teste Info')}>Change </CustomButton>
            </Stack>
            
        </div>
    );
};

export default Header;
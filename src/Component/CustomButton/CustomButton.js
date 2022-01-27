import React from 'react';
import { Button } from '@mui/material';
import './CustomButton.css'

const CustomButton = ({onClick, children}) => {
    return (        
        <Button className='customButton' variant="contained" onClick={onClick} >
            {children}
        </Button>        
    );
};

export default CustomButton;
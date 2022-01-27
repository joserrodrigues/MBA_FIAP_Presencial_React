import React from 'react';
import { TextField } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';


const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        color: '#ed145b',
        border: '1px solid #af0f44',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: '#2b2b2b',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&.Mui-focused': {
            backgroundColor: 'transparent',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: '#af0f44',
            color: '#ed145b'
        },
    },
    '& .MuiInputLabel-root': {
        color: '#af0f44',
        '&.Mui-focused': {
            color: '#af0f44'
        },
    }
}));

const CustomTextField = ({ label, defaultValue, onChange}) => {
    return (
        <RedditTextField
            label={label}
            defaultValue={defaultValue}
            variant="filled"
            style={{ marginTop: 11 }}
            onChange={onChange}
      />
    );
};

export default CustomTextField;